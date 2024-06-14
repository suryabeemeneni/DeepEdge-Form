import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.firstName || formData.firstName.length < 2) {
      errors.firstName = 'First Name must be at least 2 characters';
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      errors.lastName = 'Last Name must be at least 2 characters';
    }
    if (!formData.dob) {
      errors.dob = 'Date of Birth is required';
    }
    return errors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleNext}>
      <div className='form'>
      <h2>Personal Information</h2>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        placeholder="First Name"
        className={errors.firstName && 'error-input'}
      />
      {errors.firstName && <div className='error-message'>{errors.firstName}</div>}
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        placeholder="Last Name"
        className={errors.lastName && `error-input`}
      />
      {errors.lastName && <div className='error-message'>{errors.lastName}</div>}
      <label>Date of Birth</label>
      <input
      style={{width:'100%', paddingLeft:'0', paddingRight:'0'}}
        type="date"
        name="dob"
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        placeholder="Date of Birth"
        className={errors.dob && `error-input`}
      />
      {errors.dob && <div className='error-message'>{errors.dob}</div>}
      </div>
      <div className='step-buttons'>
        <ul>
      <button type="submit">Next</button>
        </ul>
      </div>
    </form>
  );
};

export default Step1;
