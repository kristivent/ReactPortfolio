import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ title, description }) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Project;