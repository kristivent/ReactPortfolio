import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (field: string) => {
    if (field === 'name' && !name) {
      setErrors((prev) => ({ ...prev, name: 'Name is required' }));
    }
    if (field === 'email' && !validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    }
    if (field === 'message' && !message) {
      setErrors((prev) => ({ ...prev, message: 'Message is required' }));
    }
  };

  return (
    <section id="contact" className="container my-5">
      <h2 className="text-primary mb-4">Contact</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
          />
          {errors.name && <small className="form-text text-danger">{errors.name}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
          />
          {errors.email && <small className="form-text text-danger">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur('message')}
          />
          {errors.message && <small className="form-text text-danger">{errors.message}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default Contact;