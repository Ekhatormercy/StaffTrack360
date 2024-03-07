import React, { useState } from 'react';
import './Performance.css';

const Performance = () => {
  const allStaffRating = JSON.parse(localStorage.getItem('allStaffRating'));

  return (
    <div className="Performance">
      <div className="MainPerformance">
        {/* <p className='sN'>S/N</p> */}
        <p className="EmployeeName">NAME</p>
        <p className="EmployeeDepartment">DEPARTMENT</p>
        <div className="ratings">
          <p>TC</p>
          <p>OR</p>
          <p>TM</p>
          <p>CF</p>
          <p>DA</p>
          <p>WQ</p>
          <p>CU</p>
        </div>
      </div>
      
        <div  className="MainPerformanceRating">
        {allStaffRating.map((performance) => (
          <div  key={performance.staffEmail}className='MainPerformance2'>
          {/* <p className='sN'>01</p> */}
          
          <p className="EmployeeName">{performance.staffName}</p>
          <p className="EmployeeDepartment">{performance.staffDepartment}</p>
          <div className="ratings2">
            <p>{performance.TC}</p>
            <p>{performance.OR}</p>
            <p>{performance.CF}</p>
            <p>{performance.TM}</p>
            <p>{performance.DA}</p>
            <p>{performance.WQ}</p>
            <p>{performance.totalPerformance}</p>
          </div>
          </div>
        
      ))}
      </div>
    </div>
  );
};

export default Performance;
