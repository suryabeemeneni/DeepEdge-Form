import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = ({ formData, prevStep, submitForm }) => {
  const navigate = useNavigate();

  const submitFormButtom = () => {
    submitForm()
    navigate('/Success')
  }
  return (
    <>
    <div className='form form-summary'>
      <h2>Review</h2>
      <div className='step-buttons' style={{margin:'10px 0'}}/>
      <h2>Personal Information</h2>
      <h3>First Name</h3>
      <p>{formData.firstName}</p>
      <h3>Last Name </h3>
      <p>{formData.lastName}</p>
      <h3>Date of Birth </h3>
      <p>{formData.dob}</p>
      <div className='step-buttons' style={{margin:'10px 0'}}/>
      <h2>Contact Information</h2>
      <h3>Email </h3>
      <p>{formData.email}</p>
      <h3>Phone </h3>
      <p>{formData.countryCode} {formData.phone}</p>
      <div className='step-buttons' style={{margin:'10px 0'}}/>
      <h2>Account Setup</h2>
      <h3>Username</h3>
      <p>{formData.username}</p>
    </div>
      <div className='step-buttons'>
        <ul>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={submitFormButtom}>Submit</button>
        </ul>
      </div>
      </>
  );
};

export default Summary;
