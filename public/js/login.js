
// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the login form
//   const email = document.getElementById('email-signup').value.trim();
//   const password = document.getElementById('password-signup').value.trim();
//   if (email && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/userroutes/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     console.log(response);

//     if (response.ok) {
//       const responseData = await response.json();
//       const userId = responseData.user.id;
//       console.log(userId);
//       // If successful, redirect the browser to the profile page
//       //document.location.replace('/api/homepageroutes');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();
//   console.log('i was clicked');

//   const email = document.getElementById('email-signup').value.trim();
//   const password = document.getElementById('password-signup').value.trim();
// console.log(email, password);
// console.log(JSON.stringify({ email, password }));
//   if (email && password) {
//     const response = await fetch('/api/userroutes/signup', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/api/homepageroutes');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

document
  .getElementById('login-btn')
  .addEventListener('click', loginFormHandler);

document
  .getElementById('sign-up-btn')
  .addEventListener('click', signupFormHandler);