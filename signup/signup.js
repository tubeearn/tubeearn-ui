import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ✅ Your Supabase project credentials
const supabaseUrl = 'https://ejbvidirnsjvadvekede.supabase.co'
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY' // 👈 यहाँ सही key लगाओ

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
      data: {
        name,
        phone,
      },
    },
  })

  if (error) {
    message.className = 'message error'
    message.textContent = `❌ ${error.message}`
  } else {
    message.className = 'message success'
    message.textContent = `✅ Account created! Please check your email.`
    form.reset()
  }
})
