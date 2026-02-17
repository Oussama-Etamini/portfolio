// src/components/mywork/MyWork.jsx
import React from 'react';
import Work_Data from '../../assets/work_data';
import './MyWork.css';
import { Link } from 'react-router-dom';

function MyWork() {
    return (
        <div id="mywork" className="mywork">
            <div className="mywork-title">
                <h1> My latest work </h1>
            </div>
            <div className="mywork-container">
                {Work_Data.map((work) => {
                    return (
                        <div className="mywork-item" key={work.id}>
                            <Link to={`/work/${work.slug}`} aria-label={`Open ${work.w_name} details`}>
                                <img src={work.sections?.[0]?.img} alt={work.w_name} />
                                {/* <div className="mywork-item-overlay">
                                    <p>{work.w_name}</p>
                                </div> */}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '22px' }}></i>
            </div>
        </div>
    );
}

export default MyWork;