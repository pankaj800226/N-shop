// // import axios from 'axios'
// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { Link, useNavigate } from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { app } from '../firebase/firebase'
// const Login = () => {
//     const [password, setPassword] = useState('')
//     const [email, setEmail] = useState('')

//     // const auth = getAuth(app)
//     const Navigate = useNavigate()
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const auth = getAuth(app)
//         signInWithEmailAndPassword(auth, email, password)
//             .then((res) => {
//                 console.log(res.user);
//                 Navigate('/')
//                 toast.success('🦄 Login Succesfully', {
//                     position: "top-center",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 })
//             }).catch((err) => {
//                 toast.success('🦄 Login erroe', {
//                     position: "top-center",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 })
//                 setPassword('')
//                 setEmail('')
//             }
//             )
//     }

//     return (
//         <div class="contact_container">
//             <form onSubmit={handleSubmit}>
//                 <h2>Login</h2>

//                 <div>
//                     <input type="text" placeholder="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         value={email}
//                         name='email'
//                     />
//                 </div>

//                 <div>
//                     <input type="text" placeholder="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         value={password}
//                         name='password'
//                     />
//                 </div>

//                 <div>
//                     {/* <textarea placeholder="Your Comment"></textarea> */}
//                     <button>Login</button>
//                 </div>
//                 <div>
//                 </div>
//             </form>
//             <div class="login_Btn">
//                 <p></p>
//                 <Link to='/register'><button>Register</button></Link>
//             </div>
//         </div>
//     )
// }

// export default Login