import React, { useState } from 'react';

const countries = [
  { name: 'Australia', code: '+61' },
  { name: 'India', code: '+91' },
  { name: 'Pakistan', code: '+92' },
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Denmark', code: '+45' },
  { name: 'Germany', code: '+49' },
  { name: 'Indonesia', code: '+62' },
];

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Invalid email';
    }
    if (!formData.phone || formData.phone.length < 10) {
      errors.phone = 'Phone Number must be at least 10 characters';
    }
    if (!formData.countryCode) {
      errors.countryCode = 'Country code is required';
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
      <h2>Contact Information</h2>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        className={errors.email && `error-input`}
      />
      {errors.email && <div className='error-message'>{errors.email}</div>}
      <label>Country Code</label>
      <select
        name="countryCode"
        value={formData.countryCode}
        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
        className={errors.countryCode && `error-input`}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      {errors.countryCode && <div className='error-message'>{errors.countryCode}</div>}
      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Phone Number"
        className={errors.phone && `error-input`}
      />
      {errors.phone && <div className='error-message'>{errors.phone}</div>}
      </div>
      <div className='step-buttons'>
        <ul>
      <button type="button" onClick={prevStep}>Prev</button>
      <button type="submit">Next</button>
        </ul>
      </div>
    </form>
  );
};

export default Step2;
