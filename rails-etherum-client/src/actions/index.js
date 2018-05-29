export function login(values) {
  fetch('http://localhost:3000/api/auth/login', {
    method: "POST",
    body: {"user": {"email": values.email, "password": values.password} }
  })
  .then(response => {
    console.log(response);
  })
}
