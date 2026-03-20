import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { FiDownload } from 'react-icons/fi';
import { portfolioContent } from '../data/portfolioContent';

const Resume = () => {
  const { resume } = portfolioContent;

  return (
    <div className="min-h-screen bg-background-950 py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">Resume</h1>
          {resume.downloadUrl ? (
            <a href={resume.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="w-full sm:w-auto justify-center"><FiDownload /> Download PDF</Button>
            </a>
          ) : (
            <Button variant="secondary" disabled className="w-full sm:w-auto justify-center"><FiDownload /> Add Resume Link</Button>
          )}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary-400 mb-6">Experience</h2>
            {resume.experiences.map((item) => (
              <div key={`${item.role}-${item.period}`} className="border-l-2 border-secondary-400 pl-6 pb-6">
                <h3 className="text-xl font-bold text-text-primary">{item.role}</h3>
                <p className="text-secondary-400">{item.period}</p>
                <p className="text-text-secondary mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary-400 mb-6">Education</h2>
            {resume.education.map((item) => (
              <div key={`${item.degree}-${item.period}`} className="border-l-2 border-secondary-400 pl-6">
                <h3 className="text-xl font-bold text-text-primary">{item.degree}</h3>
                <p className="text-secondary-400">{item.institute}, {item.period}</p>
                <p className="text-text-secondary mt-2">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
