import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🛠 Replace with your Supabase details
const supabaseUrl = 'https://ejbvidirnsjvadvekede.supabase.co'
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY'  // 👈 यहाँ अपना सही key लगाओ

const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById('signup-form')
const message = document.getElementById('message')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name, phone }
    }
  })

  if (error) {
    message.innerHTML = `<span class="error">❌ ${error.message}</span>`
  } else {
    message.innerHTML = `<span class="success">✅ Account created! Please confirm your email to proceed.</span>`
    form.reset()
  }
})
