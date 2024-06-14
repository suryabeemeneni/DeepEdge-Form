import React, { useEffect, useState } from 'react';
import Stepper from './Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Summary from './Summary';
import Header from '../Header/Header'

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    countryCode: '+91',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const steps = ['Personal Information', 'Contact Information', 'Account Setup', 'Review'];

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const submitForm = () => {
    console.log(formData);
    window.removeEventListener('beforeunload', handleBeforeUnload);
    localStorage.setItem('username', formData.username);
  };

  return (
    <>
    <Header/>
    <div className='stepper-container'>
            <div className='steper-heading'>
      <h3>Registration Form</h3>
      </div>
      <Stepper steps={steps} currentStep={currentStep} />
      {currentStep === 0 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {currentStep === 1 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 2 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 3 && <Summary formData={formData} prevStep={prevStep} submitForm={submitForm} />}
    </div>
    </>
  );
};

export default MultiStepForm;
