// Supabase URL and API Key
const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Signup Logic
document.getElementById('signup-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  const message = document.getElementById('message');
  if (error) {
    message.innerText = "❌ " + error.message;
    message.style.color = 'red';
  } else {
    message.innerText = "✅ Please check your email to confirm.";
    message.style.color = 'green';
  }
});
