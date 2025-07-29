const signupForm = document.getElementById("signup-form");
const message = document.getElementById("message");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  message.textContent = "Processing...";

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const { data, error } = await fetch("https://ejbvidirnsjvadvekede.supabase.co/auth/v1/signup", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYnZpZGlybnNqdmFkdmVrZWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTA3ODMsImV4cCI6MjA2OTE4Njc4M30.KoCt8f2bXjn3843XOsRMLwyZ0lKpARkrRqb_GXlGfUs",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password,
      options: {
        data: { full_name: fullName },
        email_redirect_to: "https://merry-sunflower-421769.netlify.app/"
      }
    })
  }).then(res => res.json());

  if (error || data.error) {
    message.textContent = "Error: " + (error?.message || data?.error?.message || "Something went wrong");
    message.style.color = "red";
  } else {
    message.textContent = "Signup successful! Please check your email to confirm.";
    message.style.color = "green";
    signupForm.reset();
  }
});
