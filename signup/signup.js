const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signUp() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const status = document.getElementById("status");

  status.innerText = "⏳ Processing...";

  if (!email || !password) {
    status.innerText = "❌ Email and Password are required!";
    return;
  }

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    status.innerText = "❌ " + error.message;
  } else {
    status.innerText = "✅ Check your email to confirm signup!";
  }
}
