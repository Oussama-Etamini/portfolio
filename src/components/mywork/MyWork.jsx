// src/components/mywork/MyWork.jsx
import React from 'react';
import Work_Data from '../../assets/work_data';
import './MyWork.css';
import { Link } from 'react-router-dom';

function MyWork() {
    return (
        <div id='mywork' className='mywork'>
            <div className="mywork-title">
                <h1> My latest work </h1>
            </div>
            <div className="mywork-container">
                {Work_Data.map((work) => {
                    return (
                            <div>
                                <img src={work.w_img} alt={work.w_name} />
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