import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const CompanyDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleCompany = data.find(company => company.id === id);

    const showDetails = (job) => {
        Swal.fire({
            title: job.title,
            html: `
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p><strong>Job Type:</strong> ${job.jobType}</p>
                <p><strong>Description:</strong> ${job.description}</p>
                <p><strong>Requirements:</strong></p>
                <ul style="text-align:left">
                    ${job.requirements.map(req => `<li> ${req}</li>`).join('')}
                </ul>
            `,
            width: '600px',
            showCancelButton: true,
            confirmButtonText: 'Apply Now',
            cancelButtonText: 'Close',
            preConfirm: () => {
                window.open(singleCompany.website, '_blank');
            }
        });
    };

    return (
        <div className="card grid card-dash bg-base-100 w-96 mt-20 mx-auto">
            <div className="card-body">
                <div>
                    {singleCompany.jobs.map(job => (
                        <div className='grid gap-2' key={job.id}>
                            <h1 className='lg:text-4xl text-2xl'>{job.title}</h1>
                            <h2 className='text-xl'>{job.jobType}</h2>
                            <h3 className='text-gray-600'>{job.salary}</h3>
                            <button className="btn btn-primary" onClick={() => showDetails(job)}>Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;


