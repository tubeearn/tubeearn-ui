const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const captchaCode = Math.floor(1000 + Math.random() * 9000);
document.getElementById("captcha").textContent = captchaCode;

async function signUp() {
  const fullname = document.getElementById("fullname").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const status = document.getElementById("status");

  if (!fullname || !mobile || !email || !password || !confirmPassword || !captchaInput) {
    status.innerText = "❌ All fields are required.";
    status.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    status.innerText = "❌ Passwords do not match.";
    status.style.color = "red";
    return;
  }

  if (captchaInput !== captchaCode.toString()) {
    status.innerText = "❌ Captcha incorrect.";
    status.style.color = "red";
    return;
  }

  status.innerText = "⏳ Creating account...";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        mobile
      }
    }
  });

  if (error) {
    status.innerText = "❌ " + error.message;
    status.style.color = "red";
  } else {
    status.innerText = "✅ Account created! Please confirm your email.";
    status.style.color = "green";
  }
}
