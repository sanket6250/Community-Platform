import React, { useState } from 'react'
import './Signup.css'

import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { signupPageData } from '../../constants/signupData'

const Signup = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const togglePassword = (fieldName) => {
    setShowPassword((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }))
  }

  const getInputType = (field) => {
    if (!field.hasToggle) {
      return field.type
    }

    return showPassword[field.name] ? 'text' : 'password'
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.agree) {
      alert('Please accept the Terms of Service and Privacy Policy.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password do not match.')
      return
    }

    console.log('Signup Form Data:', formData)
  }

  return (
    <main className="signup-page">

      <section className="signup-left-panel">

        <div className="signup-form-card">

          <button
            type="button"
            className="signup-logo-btn"
            onClick={() => navigate('/')}
          >
            <img
              src={signupPageData.logo}
              alt="Kytes Logo"
              className="signup-logo"
            />
          </button>

          <div className="signup-heading">
            <h1>{signupPageData.title}</h1>
            <p>{signupPageData.subtitle}</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>

            {signupPageData.fields.map((field) => (
              <div className="signup-field" key={field.id}>

                <label htmlFor={field.id}>
                  {field.label}
                </label>

                <div className={field.hasToggle ? 'signup-password-wrapper' : 'signup-input-wrapper'}>

                  <input
                    id={field.id}
                    type={getInputType(field)}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    autoComplete={
                      field.name === 'email'
                        ? 'email'
                        : field.name === 'username'
                          ? 'username'
                          : 'new-password'
                    }
                    required
                  />

                  {field.hasToggle && (
                    <button
                      type="button"
                      className="signup-eye-btn"
                      onClick={() => togglePassword(field.name)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword[field.name] ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  )}

                </div>

              </div>
            ))}

            <label className="signup-terms">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />

              <span>
                {signupPageData.termsText}{' '}
                <a href="/">{signupPageData.termsLinkText}</a>{' '}
                and{' '}
                <a href="/">{signupPageData.privacyLinkText}</a>
                <span className="signup-required-star"> *</span>
              </span>

            </label>

            <button type="submit" className="signup-submit-btn">
              {signupPageData.signUpText}
            </button>

            <button type="button" className="signup-google-btn">
              <span className="signup-google-icon">G</span>
              <span>{signupPageData.googleText}</span>
            </button>

          </form>

          <div className="signup-footer-text">
            <span>{signupPageData.footerText}</span>

            <button
              type="button"
              onClick={() => navigate('/login')}
            >
              {signupPageData.loginText}
            </button>
          </div>

        </div>

      </section>

      <section className="signup-right-panel">
        <img
          src={signupPageData.illustration}
          alt="Kytes Community Signup"
          className="signup-illustration"
        />
      </section>

    </main>
  )
}

export default Signup