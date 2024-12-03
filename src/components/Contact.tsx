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
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message')}
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;