import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background-950 flex items-center justify-center py-20">
      <div className="w-full max-w-md bg-background-900 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Welcome Back</h1>
        <p className="text-text-secondary mb-8">Sign in to your account</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
          <Button variant="primary" type="submit" isLoading={isLoading} className="w-full justify-center">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
