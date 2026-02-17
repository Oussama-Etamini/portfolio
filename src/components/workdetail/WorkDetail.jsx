import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import services_data from '../../assets/services_data';
import './WorkDetail.css';

export default function WorkDetail() {
    const { slug } = useParams();
    const item = services_data.find(w => w.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

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
            {Array.isArray(item.technologies) && item.technologies.length > 0 && (
                <p className="tech-summary">
                    Technologies used: {item.technologies.join(', ')}.
                </p>
            )}

            {Array.isArray(item.sections) && item.sections.map((sec, idx) => {
                const imgLeft = idx % 2 === 0;

                return (
                    <div key={idx} className={`work-row ${imgLeft ? 'img-left' : 'img-right'}`}>
                        <div className={`work-image ${sec.tall ? 'tall' : ''}`}>
                            {sec.title && <h2 className="section-title">{sec.title}</h2>}
                            <img src={sec.img} alt={sec.title ?? item.w_name} />
                        </div>
                        <div className="work-content">
                            <p>{sec.description}</p>
                        </div>
                    </div>
                );
            })}

            <div className="work-actions">
                <Link to="/#mywork" className="btn">Back</Link>
            </div>
        </div>
    );
}