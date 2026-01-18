import React, { useState } from 'react';

const InputForm = ({ onSubmit, isLoading }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        years_of_experience: '',
        description: '',
        ctc: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
                <span className="gradient-text">Design Your Agentic Future</span>
            </h2>
            <form onSubmit={handleSubmit} className="form-grid">
                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="glass-input"
                        placeholder="Rohan Sharma"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="glass-input"
                        placeholder="rohan.sharma@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Current Role</label>
                    <input
                        type="text"
                        name="role"
                        required
                        className="glass-input"
                        placeholder="e.g. Senior Marketing Manager"
                        value={formData.role}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Years of Experience</label>
                    <input
                        type="number"
                        name="years_of_experience"
                        required
                        className="glass-input"
                        placeholder="5"
                        value={formData.years_of_experience}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>1-Line Job Description</label>
                    <input
                        type="text"
                        name="description"
                        required
                        className="glass-input"
                        placeholder="I manage ad campaigns and analyze market trends."
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Current CTC (Lakhs per Annum)</label>
                    <input
                        type="number"
                        name="ctc"
                        required
                        className="glass-input"
                        placeholder="25"
                        value={formData.ctc}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn-primary" disabled={isLoading} style={{ marginTop: '1rem' }}>
                    {isLoading ? 'Generating AI Roadmap...' : 'Reveal My Future'}
                </button>
            </form>
        </div>
    );
};

export default InputForm;
