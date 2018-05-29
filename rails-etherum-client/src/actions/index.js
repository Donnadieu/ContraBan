export function login(values) {
  fetch(`http://localhost:3000/api/auth/login?email=${values.email}&password=${values.password}`, {
    method: "POST"
  })
  .then(response => {
    debugger
  })
}
