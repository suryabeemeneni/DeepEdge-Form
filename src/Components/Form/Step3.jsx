import React, { useState } from 'react';

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)

  const validate = () => {
    let errors = {};
    if (!formData.username || formData.username.length < 4) {
      errors.username = 'Username must be at least 4 characters';
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters, and include letters and numbers';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
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
      <h2>Account Setup</h2>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        placeholder="Username"
        className={errors.username && `error-input`}
      />
      {errors.username && <div className='error-message'>{errors.username}</div>}
      <label>Password</label>
      <input
      style={{paddingLeft: '30px'}}
        type={showPassword ? 'text' : "password"}
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
        className={errors.password && `error-input`}
      />
      <div className='fa-password'>
      <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} onClick={() => setShowPassword(!showPassword)}/>
      </div>
      {errors.password && <div className='error-message' style={{marginTop:'15px'}}>{errors.password}</div>}
      <label>Confirm Password</label>
      <input
      style={{paddingLeft: '30px'}}
        type={showCPassword ? 'text' : "password"}
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        placeholder="Re-Enter Password"
        className={errors.confirmPassword && `error-input`}
      />
      <div className='fa-password'>
      <i className={showCPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} onClick={() => setShowCPassword(!showCPassword)}/>
      </div>
      {errors.confirmPassword && <div className='error-message' style={{marginTop:'15px'}}>{errors.confirmPassword}</div>}
      </div>
      <div className='step-buttons'>
        <ul>
      <button type="button" onClick={prevStep}>Prev</button>
      <button type="submit">Review</button>
        </ul>
      </div>
    </form>
  );
};

export default Step3;
