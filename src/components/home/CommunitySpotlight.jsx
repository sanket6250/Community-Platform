import React from 'react'
import './CommunitySpotlight.css'

import { ArrowRight } from 'lucide-react'
import { Assets } from '../../assets/Assets'

const CommunitySpotlight = () => {
  return (
    <section className="community-spotlight-section">

      <div className="container">

        <div className="community-spotlight-wrapper">

          {/* LEFT CONTENT */}
          <div className="community-spotlight-content">

            <h2>
              Community Spotlight
            </h2>

            <h3>
              Meet the Champion of the Month: May 2026
            </h3>

            <p>
              Hello Community! I am thrilled to announce that our Champion of
              the Month for May 2026 is Amit Kumar @amit_kumar. What makes
              Amit our Community Champion of the Month? Amit is a Project
              Manager at Quest Global and a Certified PMP professional with
              8+ years in IT Sector. He works across Finance and delivery.
            </p>

            <div className="community-spotlight-actions">

              <a href="/" className="spotlight-btn spotlight-btn-primary">
                <span>Read More</span>

                <span className="spotlight-btn-icon">
                  <ArrowRight size={16} />
                </span>
              </a>

              <a href="/" className="spotlight-btn spotlight-btn-secondary">
                <span>Become a Champion</span>

                <span className="spotlight-btn-icon">
                  <ArrowRight size={16} />
                </span>
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="community-spotlight-visual">

            <img
              src={Assets.Spotlight_Wave}
              alt=""
              className="spotlight-wave"
            />

            <img
              src={Assets.Spotlight_Person}
              alt="Community Champion"
              className="spotlight-person"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default CommunitySpotlight