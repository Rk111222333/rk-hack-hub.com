const correctPassword = '111222333'; // replace with your desired password
const redirectTo = 'https://t.me/rkgaming444/6'; // replace with your desired redirect URL
function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim();
  const errorMessage = document.getElementById('Error');

  if (password === correctPassword) {
    window.location.href = redirectTo ;
  } else {
    errorMessage.innerHTML = 'Incorrect password!';
    passwordInput.value = '';
  }
}