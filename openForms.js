const signUpBlock = document.querySelector('#sign-up');
const signUpButton = document.getElementById('sign-up-button');
let signUpLeaveButton = document.getElementById('leave-sign-up');
const logInBlock = document.querySelector('#log-in');
const LogInButton = document.getElementById('log-in-button');
let LogInLeaveButton = document.getElementById('leave-log-in');

const targetLogIn = document.getElementById('target-to-log-in');
const targetSignUp = document.getElementById('target-to-sign-up');

signUpButton.addEventListener('click', () => {
  signUpBlock.style.cssText = `
    display: block;
  `;
})

signUpLeaveButton.addEventListener('click', () => {
  signUpBlock.style.cssText = `
    display: none;
  `;
})

LogInButton.addEventListener('click', () => {
  logInBlock.style.cssText = `
    display: block;
  `;
})

LogInLeaveButton.addEventListener('click', () => {
  logInBlock.style.cssText = `
    display: none;
  `;
})

targetLogIn.onclick = () => {
  signUpBlock.style.cssText = `
    display: none;
  `;
  logInBlock.style.cssText = `
    display: block;
  `;
};

targetSignUp.onclick = () => {
  signUpBlock.style.cssText = `
    display: block;
  `;
  logInBlock.style.cssText = `
    display: none;
  `;
}
