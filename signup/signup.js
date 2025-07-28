import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://ejbvidirnsjvadvekede.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("signup-form");
const statusMsg = document.getElementById("status-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  statusMsg.textContent = "⏳ Waiting for you... Please wait...";
  statusMsg.style.color = "orange";

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "https://your-redirect-url.com"
      }
    });

    if (error) {
      statusMsg.textContent = `❌ Error: ${error.message}`;
      statusMsg.style.color = "red";
    } else {
      statusMsg.textContent = "✅ Account created! Please confirm your email.";
      statusMsg.style.color = "green";
    }
  } catch (err) {
    statusMsg.textContent = "❌ Unexpected error occurred.";
    statusMsg.style.color = "red";
  }
});
