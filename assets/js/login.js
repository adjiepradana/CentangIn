// const loginSystem = (username, password) => {
//     if(username !== 'Admin') {
//         return 'Username Salah'
//     } else if (password !== '12345') {
//         return 'Password salah'
//     } else {
//         return 'Login berhasil'
//     }
// } 

// const loginHandle = () => {
//     const username = document.getElementById('username').value
//     const password = document.getElementById('password')

//     if(!usenrame || !password) {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Masukkan Username & Password'
//         })

//         return
//     }

//     const loginCheck = loginSystem(username, password) 

//     if (loginCheck === 'Login berhasil') {
//         Swal.fire({
//             icon: 'success',
//             title: 'Login berhasil',
//             timer: 1500,
//             showConfirmButton: false
//         })

//         setTimeout(() => {
//             window.location.href = "main.html"
//         }, 1500)

//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Login gagal',
//             text: loginCheck
//         })
//     }
// }