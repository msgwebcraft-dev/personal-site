import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById("my-form-status");
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      }
    } catch (error) {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
  };

  return (
    <section id="contact" className="py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-text mb-8">Get In Touch</h2>
        <p className="text-xl text-secondary mb-16 max-w-2xl mx-auto leading-relaxed">Have a project in mind? Let&apos;s collaborate — I&apos;m always open to exciting opportunities.</p>

        <form id="my-form" action="https://formspree.io/f/mldbvnod" method="POST" onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 bg-secondary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text placeholder-text/60 text-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-6 py-4 bg-secondary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text placeholder-text/60 text-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            required
            className="w-full px-6 py-4 bg-secondary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text placeholder-text/60 text-lg resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-accent hover:bg-accent/80 transition text-primary font-bold px-8 py-4 rounded-lg text-lg"
          >
            Send Message
          </button>
          <p id="my-form-status" className="text-accent mt-4"></p>
        </form>

        <div className="flex justify-center space-x-8 mt-16 text-3xl">
          <a href="https://github.com/MmelIGaba" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mmela-dyantyi-849aa52a3/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:msgwebworks@gmail.com" className="text-text hover:text-accent transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
