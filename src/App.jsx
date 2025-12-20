import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Products from './Page/Products'
import Gallery from './Page/Gallery'
import Blog from './Page/Blog'
import Team from './Page/Team'
import Contact from './Page/Contact'
import Navbar1 from './Component/Navbar1'
import Navbar from './Component/Navbar'
import Navbar3 from './Component/Navbar3'
import Direction from './Component/Direction'
import Footer from './Component/Footer'
import Footer2 from './Component/Footer2'
import Footer3 from './Component/Footer3'
import Footer4 from './Component/Footer4'
import Profile from './Page/Profile'
import MyAccount from './Page/MyAccount'
import WishList from './Page/WishList'
import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
  const [card,setCard] = useState([])
  return (
    <Router >
      {/* <Navbar1/> */}
      <ScrollToTop /> 
      <Navbar card = {card} setCard = {setCard} />
      
     {/* <Navbar3/>
      */}
      {/* <Direction/> */}
      <Routes>
        <Route path='/' element={<Home card = {card} setCard ={setCard}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products  card ={card} setCard={setCard}/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/myaccount' element={<MyAccount/>}></Route>
        <Route path='/wishlist' element={<WishList card = {card} setCard = {setCard}/>}></Route>

      </Routes>
      <Footer2/>
      <Footer/>
      {/* <Footer2/>
      <Footer3/>
      <Footer4/>
      <Footer5/> */}
    </Router>
  )
}

export default App

























// import React, { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user",
//   });

//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   // input change handle
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const res = await axios.post(
//         "https://padmpb.onrender.com/api/auth/register",
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       setMsg("✅ Registration Successful");
//       console.log(res.data);

//     } catch (error) {
//       console.error(error);
//       setMsg(
//         error.response?.data?.message || "❌ Registration Failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto" }}>
//       <h2>Register</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>

//       {msg && <p>{msg}</p>}
//     </div>
//   );
// }

// export default Register;




// import React, { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const res = await axios.post(
//         "https://padmpb.onrender.com/api/auth/login",
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       setMsg("✅ Login Successful");

//       // token save in localStorage
//       localStorage.setItem("token", res.data.token);

//       console.log("Login Response:", res.data);

//     } catch (error) {
//       console.error(error);
//       setMsg(
//         error.response?.data?.message || "❌ Login Failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       {msg && <p>{msg}</p>}
//     </div>
//   );
// }

// export default Login;
