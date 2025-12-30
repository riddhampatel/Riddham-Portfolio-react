import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-text-primary">Resume</h1>
          <Button variant="primary"><FiDownload /> Download PDF</Button>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary-400 mb-6">Experience</h2>
            <div className="border-l-2 border-secondary-400 pl-6 pb-6">
              <h3 className="text-xl font-bold text-text-primary">Full-Stack Developer Intern</h3>
              <p className="text-secondary-400">2025 - Present</p>
              <p className="text-text-secondary mt-2"> development of scalable MERN applications</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary-400 mb-6">Education</h2>
            <div className="border-l-2 border-secondary-400 pl-6">
              <h3 className="text-xl font-bold text-text-primary">BCA  </h3>
              <p className="text-secondary-400">Silver Oak University, 2023</p>
              <p className="text-text-secondary mt-2">CGPA: 9.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
