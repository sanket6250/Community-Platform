import React from 'react'
import './CommunityBanner.css'
import { useNavigate } from 'react-router-dom'
import { Assets } from '../../assets/Assets'

const CommunityBanner = () => {
  const navigate = useNavigate()

  return (
    <section
      className="community-banner"
      style={{
        backgroundImage: `url(${Assets.Community_Banner})`,
      }}
    >
      <div className="banner-overlay"></div>

      <div className="container">

        <div className="banner-content">

          <h1 className="banner-title">
            Kytes Community
          </h1>

          <p className="banner-description">
            Join a global network of CXOs and project leaders,
            shaping the future of project management driving
            complex projects worldwide.
          </p>

          <button
            className="banner-btn"
            onClick={() => navigate('/login')}
          >
            <span>
              Join the Community
            </span>

            <div className="banner-btn-icon">
              →
            </div>
          </button>

        </div>

      </div>

    </section>
  )
}

export default CommunityBanner