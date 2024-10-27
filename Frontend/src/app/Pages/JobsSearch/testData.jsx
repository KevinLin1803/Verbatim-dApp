import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const JobListings = () => {
    const jobListings = [
        { id: 1, title: 'Software Development Engineer II', company: 'TechCorp', salary: '$5000/m', url: '' },
        { id: 2, title: 'Software Engineer', company: 'DataTech', salary: '$5000/m', url: '' },
        { id: 3, title: 'Junior Full Stack Software Engineer', company: 'Innovate Inc.', salary: '$5000/m', url: '' },
        { id: 4, title: 'Software Development Specialist 3 (PNs 20014302, 20014382) - HYBRID', company: 'Creative Studios', salary: '$4500/m', url: '' },
        { id: 5, title: '[HYBRID] JAVA Web Developer (Software Development Specialist 3)', company: 'BuildWorks', salary: '$5200/m', url: '' },
        { id: 6, title: 'Staff Software Engineer', company: 'Webify', salary: '$4800/m', url: '' },
        { id: 7, title: 'Senior Software Engineer - Hybrid', company: 'CloudNet', salary: '$5500/m', url: '' },
        { id: 8, title: 'Software Engineer (NJUS)', company: 'BizTech', salary: '$4700/m', url: '' },
        { id: 9, title: 'Lead Java Developer – SACWIS experience', company: 'HelpDesk', salary: '$3000/m', url: '' },
        { id: 10, title: 'Machine Learning Engineer', company: 'AI Labs', salary: '$6000/m', url: '' },
        { id: 11, title: 'Network Administrator', company: 'NetSecure', salary: '$3500/m', url: '' },
        { id: 12, title: 'Product Manager', company: 'InnovateX', salary: '$5300/m', url: '' },
        { id: 13, title: 'Data Scientist', company: 'DeepData', salary: '$6200/m', url: '' },
        { id: 14, title: 'Cybersecurity Analyst', company: 'SecureTech', salary: '$5500/m', url: '' },
        { id: 15, title: 'Mobile Developer', company: 'AppHub', salary: '$5000/m', url: '' },
    ];    

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="pt-10 px-16">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {currentJobs.map((job) => (
                    <div key={job.id} className="bg-white shadow-md rounded-lg p-3 h-48 w-54 flex flex-col justify-between">
                        <h2 className="text-xl font-bold text-green-700">{job.title}</h2>
                        <p className="text-gray-600">{job.company} - {job.location}</p>
                        <p className="mt-2 text-gray-800">{job.description}</p>
                        <p className="mt-2 text-gray-800">{job.salary}</p>
                        <a href={job.url} className="mt-4 inline-block text-green-700 hover:text-green-800 underline" target="_blank" rel="noopener noreferrer">
                            Go to post
                        </a>
                    </div>
                ))}
            </div>
          
            {/* Pagination Buttons */}
            <div className="flex justify-center mt-6 space-x-2">
                {[...Array(Math.ceil(jobListings.length / jobsPerPage)).keys()].map((num) => (
                <button
                key={num}
                onClick={() => paginate(num + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === num + 1 ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'
                } hover:bg-green-800 hover:text-white focus:outline-none`}
                >
                {num + 1}
                </button>
                ))}
            </div>
        </div>
    );
};

export default JobListings;
