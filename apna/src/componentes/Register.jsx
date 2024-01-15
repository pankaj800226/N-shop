// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,

// } from 'firebase/auth'
// import { app } from '../firebase/firebase'
// import { toast } from 'react-toastify'
// const Register = () => {
//     // const navigate = useNavigate()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const auth = getAuth(app)
//     const googleProvider = new GoogleAuthProvider();
//     const signWithGoogle = () => {
//         signInWithPopup(auth, googleProvider)
//         // navigate('/')
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((value) => {
//                 toast.success('🦄 Register Succesfully', {
//                     position: "top-center",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 });
//             }).catch((error) => {
//                 console.log(error);
//                 toast.error('🦄 auth/email-already-in-use', {
//                     position: "top-center",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 })
//             })
//         setEmail('')
//         setPassword('')
//     }
//     return (
//         <div class="contact_container">
//             <form onSubmit={handleSubmit}>
//                 <h2>Register</h2>

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
//                     <button>Register</button>
//                 </div>
//             </form>
//             <div class="login_Btn">
//                 <p>Already Have an Account</p>
//                 <Link to='/login'><button>Login</button></Link>
//             </div>
//             <div className="google_auth">
//                 <button onClick={signWithGoogle}><span><img src="google.png" alt="" />Sign With Google</span></button>
//             </div>
//         </div>
//     )
// }

// export default Register