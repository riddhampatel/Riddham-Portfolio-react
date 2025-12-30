import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-text-primary">Get In Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
            <Button variant="primary" type="submit">Send Message</Button>
          </form>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-secondary-400 text-2xl"><FiMail /></div>
              <div><h3 className="font-bold text-text-primary">Email</h3><p className="text-text-secondary">your@email.com</p></div>
            </div>
            <div className="flex gap-4">
              <div className="text-secondary-400 text-2xl"><FiPhone /></div>
              <div><h3 className="font-bold text-text-primary">Phone</h3><p className="text-text-secondary">+1 (555) 123-4567</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
