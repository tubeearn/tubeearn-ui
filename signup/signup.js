// Supabase Setup
const SUPABASE_URL = "https://ejbvidirnsjvadvekede.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Form submission
document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const fullName = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirm = document.getElementById('confirmPassword').value.trim();
  const messageBox = document.getElementById('message');

  messageBox.textContent = '';

  if (password !== confirm) {
    messageBox.textContent = "Passwords do not match!";
    messageBox.className = 'error-message';
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName,
        mobile: mobile
      }
    }
  });

  if (error) {
    messageBox.textContent = error.message;
    messageBox.className = 'error-message';
  } else {
    messageBox.textContent = "Account created! Check your email to confirm.";
    messageBox.className = 'success-message';
    document.getElementById('signupForm').reset();
  }
});
