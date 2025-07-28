import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://ejbvidirnsjvadvekede.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFz..."; // shortened here
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("signup-form");
const statusMsg = document.getElementById("status-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  statusMsg.textContent = "⏳ Creating your account...";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://your-redirect-link.com", // Update this to your redirect URL
    },
  });

  if (error) {
    statusMsg.textContent = `❌ Error: ${error.message}`;
    statusMsg.style.color = "red";
  } else {
    statusMsg.textContent =
      "✅ Account created. Please confirm your email to continue.";
  }
});
