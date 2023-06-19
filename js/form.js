
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    const eyeOpenIcon = document.getElementById('eye-open-icon');
    const eyeClosedIcon = document.getElementById('eye-closed-icon');

    if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeOpenIcon.classList.remove('hidden');
    eyeClosedIcon.classList.add('hidden');
    } else {
    passwordInput.type = 'password';
    eyeOpenIcon.classList.add('hidden');
    eyeClosedIcon.classList.remove('hidden');
    }
}

// +++++++++  SCROLL ++++++

function scrollToDiv() {
    const div = document.getElementById('minhaDiv');
    div.scrollIntoView({ behavior: 'smooth' });
  }
  
                    