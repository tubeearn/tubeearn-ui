const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function handleSignup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const msg = document.getElementById("message");
  const btn = document.getElementById("signupBtn");

  if (!email || !password) {
    msg.innerText = "❗ Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  btn.innerText = "Signing up...";
  btn.disabled = true;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    msg.innerText = "❌ " + error.message;
    msg.style.color = "red";
  } else {
    msg.innerText = "✅ Welcome to TubeEarn! Please verify your email.";
    msg.style.color = "green";
  }

  btn.innerText = "Sign Up";
  btn.disabled = false;
}
