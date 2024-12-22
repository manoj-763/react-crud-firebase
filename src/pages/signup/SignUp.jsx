import { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
// Uncomment the next two lines if you're using Firestore
// import { addDoc, collection } from 'firebase/firestore';
// import { firestore } from '../../firebase';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user details
      const userData = {
        uid: user.uid,
        name: name,
        email: email,
      };

      // Example: Save to Firestore (optional)
      // await addDoc(collection(firestore, 'users'), userData);

      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(userData));

      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-heading">Create Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="signin-text">
          Already have an account? <Link to="/login" className="signin-link">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
