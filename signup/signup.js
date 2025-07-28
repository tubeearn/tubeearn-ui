const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Captcha setup
const randomCaptcha = Math.floor(1000 + Math.random() * 9000);
document.getElementById("captchaCode").innerText = randomCaptcha;

async function signUp() {
  const name = document.getElementById("fullname").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const captchaInput = document.getElementById("captchaInput").value;
  const message = document.getElementById("message");

  if (!name || !mobile || !email || !password || !confirm || !captchaInput) {
    message.innerText = "❌ All fields are required!";
    return;
  }

  if (password !== confirm) {
    message.innerText = "❌ Passwords do not match!";
    return;
  }

  if (captchaInput !== randomCaptcha.toString()) {
    message.innerText = "❌ Incorrect captcha!";
    return;
  }

  message.innerText = "⏳ Creating your account...";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        mobile
      }
    }
  });

  if (error) {
    message.innerText = "❌ " + error.message;
  } else {
    message.innerText = "✅ Please check your email to confirm.";
  }
}
