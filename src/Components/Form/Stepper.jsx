import React from 'react';
import './Stepper.css';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
        >
          <div className={`step-number ${index <= currentStep ? 'step-number-completed' : ''} ${index === currentStep ? 'step-number-active' : ''}`}>
            {/* {index} */}
            {index <= currentStep -1 && <i className='fa fa-check'/>}
            </div>
          <div className="step-title">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
