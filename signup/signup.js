const SUPABASE_URL = 'https://ejbvidirnsjvadvekede.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_API_KEY);

// Captcha
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = num1 + num2;
document.getElementById('captcha-question').innerText = `What is ${num1} + ${num2}?`;

// Signup form
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const captcha = parseInt(document.getElementById('captcha-answer').value);
  const status = document.getElementById('statusMessage');

  if (password !== confirmPassword) {
    status.innerText = "Passwords do not match.";
    return;
  }

  if (captcha !== correctAnswer) {
    status.innerText = "Captcha is incorrect.";
    return;
  }

  status.innerText = "Creating your account...";

  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'https://merry-sunflower-421769.netlify.app/',
      data: { fullname, phone }
    }
  });

  if (error) {
    status.innerText = "❌ " + error.message;
  } else {
    status.innerText = "✅ Account created. Please check your email to verify.";
  }
});
