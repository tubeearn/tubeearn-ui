const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function handleSignup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const msg = document.getElementById("message");

  if (!email || !password) {
    msg.innerText = "❗ Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    msg.innerText = "❌ " + error.message;
    msg.style.color = "red";
  } else {
    msg.innerText = "✅ Signup successful! Please check your email to verify.";
    msg.style.color = "green";
  }
}
