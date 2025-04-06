import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/ContactUs.css";

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Feedback submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you! Please fill out the form below.</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <div className="button-wrapper">
                    <button type="submit">Send Message</button>
                </div>
            </form>
            <button className="back-btn" onClick={() => navigate("/home")}>
                Back to Home
            </button>
        </div>
    );
};

export default ContactUs;