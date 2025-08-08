// tubeearn-ui/secure/config/configure.js
// AES decrypt helper using CryptoJS (expects CryptoJS loaded before this file)
(function(){
  // passphrase — change this to your own strong secret if you want
  const PASSPHRASE = "TubeEarn@123";

  // ----- PUT THE AES-CIPHERTEXTS (Base64 strings from CryptoJS.AES.encrypt) BELOW -----
  // Replace the placeholders with the ciphertext strings you generate locally.
  const CIPHERTEXT_SUPABASE_URL = "PASTE_SUPABASE_URL_CIPHERTEXT_HERE";
  const CIPHERTEXT_SUPABASE_KEY = "PASTE_SUPABASE_KEY_CIPHERTEXT_HERE";

  // decrypt function using CryptoJS
  function decryptAES(ciphertext, passphrase) {
    try {
      const bytes  = CryptoJS.AES.decrypt(ciphertext, passphrase);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
      return plaintext;
    } catch (err) {
      console.error("Decrypt error:", err);
      return null;
    }
  }

  // Decrypted values available as global constants for pages
  window.SUPABASE_CONFIG = {
    SUPABASE_URL: decryptAES(CIPHERTEXT_SUPABASE_URL, PASSPHRASE),
    SUPABASE_API_KEY: decryptAES(CIPHERTEXT_SUPABASE_KEY, PASSPHRASE)
  };

  // quick sanity log (remove in production)
  if (!window.SUPABASE_CONFIG.SUPABASE_URL || !window.SUPABASE_CONFIG.SUPABASE_API_KEY) {
    console.warn("SUPABASE_CONFIG not decrypted. Make sure ciphertexts are placed and passphrase is correct.");
  }
})();
