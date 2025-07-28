const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signUp() {
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const status = document.getElementById("status");

  if (!mobile || !email || !password || !confirmPassword) {
    status.innerText = "❌ All fields are required.";
    return;
  }

  if (password !== confirmPassword) {
    status.innerText = "❌ Passwords do not match.";
    return;
  }

  status.innerText = "⏳ Processing your request...";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        mobile
      }
    }
  });

  if (error) {
    status.innerText = "❌ " + error.message;
  } else {
    status.innerText = "✅ Account created! Please confirm your email to activate.";
  }
}
