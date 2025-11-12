import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Work_Data from '../../assets/work_data';
import './WorkDetail.css';

export default function WorkDetail() {
    const { slug } = useParams();
    const item = Work_Data.find(w => w.slug === slug);

    if (!item) {
        return (
            <div className="workdetail notfound">
                <p>Project not found.</p>
                <Link to="/">Back to portfolio</Link>
            </div>
        );
    }

    return (
        <div className="workdetail">
            <h1 className="work-title">{item.w_name}</h1>
            <p className="title">{item.category}</p>
            {/* technologies */}
            <div className="technologies">
                {Array.isArray(item.technologies) && item.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                ))}
            </div>
            {Array.isArray(item.sections) && item.sections.map((sec, idx) => {
                const imgLeft = idx % 2 === 0;
                return (
                    <div key={idx} className={`work-row ${imgLeft ? 'img-left' : 'img-right'}`}>
                        <div className="work-image">
                            <img src={sec.img} alt={sec.title ?? item.w_name} />
                        </div>
                        <div className="work-content">
                            {sec.title && <h2>{sec.title}</h2>}
                            <p>{sec.description}</p>
                            {sec.tech && <p className="tech">Tech: {sec.tech.join(', ')}</p>}
                        </div>
                    </div>
                );
            })}

            <div className="work-actions">
                <Link to="/" className="btn">Back</Link>
            </div>
        </div>
    );
}