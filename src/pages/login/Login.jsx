import React, { useState } from 'react'
import './Login.css'

import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { loginPageData } from '../../constants/loginData'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login Form Data:', formData)
  }

  return (
    <main className="login-page">

      <section className="login-left-panel">

        <div className="login-form-card">

          <button
            type="button"
            className="login-logo-btn"
            onClick={() => navigate('/')}
          >
            <img
              src={loginPageData.logo}
              alt="Kytes Logo"
              className="login-logo"
            />
          </button>

          <div className="login-heading">
            <h1>{loginPageData.title}</h1>
            <p>{loginPageData.subtitle}</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="login-field">
              <label htmlFor="email">Business Email*</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>

              <div className="login-password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="login-options">

              <label className="login-remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />

                <span>{loginPageData.rememberLabel}</span>
              </label>

              <button
                type="button"
                className="login-forgot-btn"
                onClick={() => navigate('/forgot-password')}
              >
                {loginPageData.forgotPasswordText}
              </button>

            </div>

            <button type="submit" className="login-submit-btn">
              {loginPageData.signInText}
            </button>

            <button type="button" className="login-google-btn">
              <span className="login-google-icon">G</span>
              <span>{loginPageData.googleText}</span>
            </button>

          </form>

          <div className="login-footer-text">
            <span>{loginPageData.footerText}</span>

            <button
              type="button"
              onClick={() => navigate('/signup')}
            >
              {loginPageData.signUpText}
            </button>
          </div>

        </div>

      </section>

      <section className="login-right-panel">
        <img
          src={loginPageData.illustration}
          alt="Kytes Community"
          className="login-illustration"
        />
      </section>

    </main>
  )
}

export default Login