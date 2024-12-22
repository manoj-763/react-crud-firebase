import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';
import Toast from "../../components/Toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      // Show success alert
      toast("Logged in successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        });

      // Navigate to home after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error);

      // Show error alert
      toast("Failed to login. Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        });
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Initialize Google provider
    try {
      const result = await signInWithPopup(auth, provider); // Show Google popup
      const user = result.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      // Show success alert
      toast("Logged in with Google successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        });

      // Navigate to home after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Error during Google login:", error);

      // Show error alert
      toast("Google login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        });

    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Toast/>
        <h1 className="login-title">Login In</h1>
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleLogin}>
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google Icon" />
            Login with Google
          </button>
        </div>
        <p className="divider-text">or use your account</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <p className="forgot-password">Forgot your password?</p>
        <p className="signup-text">Need to Signup? <Link to="/signup" className="signup-link">Create Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
