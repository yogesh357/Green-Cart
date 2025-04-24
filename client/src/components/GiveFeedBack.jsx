import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const GiveFeedBack = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace with your EmailJS service ID, template ID, and public key
        emailjs.send(
            'your_service_id', // From EmailJS dashboard
            'your_template_id', // From EmailJS dashboard
            formData,
            'your_public_key' // From EmailJS dashboard
        )
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Greecart</h2>
            {submitStatus === 'success' && (
                <div className="alert alert-success">
                    Thank you! Your message has been sent successfully.
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="alert alert-error">
                    Oops! Something went wrong. Please try again later.
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default GiveFeedBack;