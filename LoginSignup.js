import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/LoginSignup.css";

const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const toggleMode = () => {
        setIsSignup(!isSignup);
        setFormData({ name: "", email: "", username: "", password: "" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isSignup ? "Signup successful!" : "Login successful!");
        navigate("/home");
    };

    return (
        <div className="login-container">
            <div className="form-box">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {isSignup && (
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="btn">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>
                <p onClick={toggleMode} className="switch-mode">
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;