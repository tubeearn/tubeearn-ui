const SUPABASE_URL = 'https://ejbvidirnsjvadvekede.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const statusMsg = document.getElementById("statusMsg");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }
    }
  });

  if (error) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "❌ " + error.message;
  } else {
    statusMsg.style.color = "green";
    statusMsg.textContent = "✅ Account created. Check your email to confirm.";
    document.getElementById("signupForm").reset();
  }
});
