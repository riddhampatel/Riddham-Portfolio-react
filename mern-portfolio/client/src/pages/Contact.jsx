import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { portfolioContent } from '../data/portfolioContent';

const Contact = () => {
  const { personal } = portfolioContent;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background-950 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-12 text-text-primary">Get In Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
            <Button variant="primary" type="submit" className="w-full sm:w-auto justify-center">Send Message</Button>
          </form>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-secondary-400 text-2xl"><FiMail /></div>
              <div><h3 className="font-bold text-text-primary">Email</h3><p className="text-text-secondary">{personal.email}</p></div>
            </div>
            <div className="flex gap-4">
              <div className="text-secondary-400 text-2xl"><FiPhone /></div>
              <div><h3 className="font-bold text-text-primary">Phone</h3><p className="text-text-secondary">{personal.phone}</p></div>
            </div>
            <div className="flex gap-4">
              <div className="text-secondary-400 text-2xl"><FiMapPin /></div>
              <div><h3 className="font-bold text-text-primary">Location</h3><p className="text-text-secondary">{personal.location}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
