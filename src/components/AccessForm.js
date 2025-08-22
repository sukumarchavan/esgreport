import React, { useState } from 'react';
import './AccessForm.css';

const AccessForm = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    contactNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Your Name is required';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (!/^\d{10,15}$/.test(formData.contactNumber.replace(/\s/g, ''))) {
      newErrors.contactNumber = 'Please enter a valid contact number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!showOtpForm) {
      // First step: Validate form and send OTP
      if (!validateForm()) {
        return;
      }
      
      setIsLoading(true);
      
      try {
        // Simulate API call to send OTP
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, we'll use a fixed OTP (123456)
        // In production, this would be sent via email
        console.log('OTP sent to:', formData.email);
        
        setShowOtpForm(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error sending OTP:', error);
        setIsLoading(false);
      }
    } else {
      // Second step: Verify OTP
      if (!otp.trim()) {
        setOtpError('Please enter the OTP');
        return;
      }
      
      if (otp !== '123456') { // Demo OTP
        setOtpError('Invalid OTP. Please try again.');
        return;
      }
      
      setIsLoading(true);
      
      try {
        // Simulate API call to verify OTP
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success - grant access
        onSuccess();
        onClose();
        setIsLoading(false);
      } catch (error) {
        console.error('Error verifying OTP:', error);
        setIsLoading(false);
      }
    }
  };



  const handleClose = () => {
    if (!isLoading) {
      onClose();
      setFormData({
        name: '',
        companyName: '',
        email: '',
        contactNumber: ''
      });
      setErrors({});
      setShowOtpForm(false);
      setOtp('');
      setOtpError('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="access-form-overlay">
      <div className="access-form-modal">
        <button className="access-form-close" onClick={handleClose} disabled={isLoading}>
          ×
        </button>
        
        <div className="access-form-content">
          <h2 className="access-form-title">
            {showOtpForm ? 'Verify Your Email' : ''}
          </h2>
          
          <p className="access-form-subtitle">
            {showOtpForm 
              ? `We've sent a verification code to ${formData.email}`
              : 'Please fill in your details to access the full report'
            }
          </p>
          
            <form onSubmit={handleSubmit} className="access-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.companyName ? 'error' : ''}`}
                  placeholder="Enter your company name"
                  disabled={isLoading}
                />
                {errors.companyName && <span className="error-message">{errors.companyName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="contactNumber" className="form-label">Contact Number *</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className={`form-input ${errors.contactNumber ? 'error' : ''}`}
                  placeholder="Enter your contact number"
                  disabled={isLoading}
                />
                {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email ID *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                  disabled={isLoading}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {showOtpForm && (
                <div className="form-group">
                  <label htmlFor="otp" className="form-label">Enter OTP *</label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      if (otpError) setOtpError('');
                    }}
                    className={`form-input ${otpError ? 'error' : ''}`}
                    placeholder="Enter 6-digit OTP"
                    maxLength="6"
                    disabled={isLoading}
                  />
                  {otpError && <span className="error-message">{otpError}</span>}
                </div>
              )}
              
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    {showOtpForm ? 'Verifying...' : 'Sending OTP...'}
                  </>
                ) : (
                  showOtpForm ? 'Verify & Continue' : 'Send OTP'
                )}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default AccessForm;
