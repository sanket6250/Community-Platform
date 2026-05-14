import React from 'react'
import './CommunityHighlights.css'

import { ArrowRight } from 'lucide-react'
import { communityHighlightsData } from '../../constants/communityHighlightsData'

const CommunityHighlights = () => {
  const largeCard = communityHighlightsData.find(
    (item) => item.variant === 'large'
  )

  const wideCards = communityHighlightsData.filter(
    (item) => item.variant === 'wide'
  )

  return (
    <section className="community-highlights-section">

      <div className="container">

        <div className="community-highlights-header">

          <h2 className="community-highlights-title">
            Welcome to the Kytes Community
          </h2>

          <p className="community-highlights-subtitle">
            Here’s what’s happening in the community
          </p>

          <button className="community-newsletter-btn">
            <span>
              Subscribe to the Community Newsletter
            </span>

            <span className="community-newsletter-icon">
              <ArrowRight size={16} />
            </span>
          </button>

        </div>

        <div className="community-highlights-grid">

          {largeCard && (
            <a
              href={largeCard.link}
              className="highlight-card highlight-card-large"
            >

              <div className="highlight-large-image-wrap">
                <img
                  src={largeCard.image}
                  alt={largeCard.title}
                  className="highlight-card-image"
                  style={{
                    objectPosition: largeCard.imagePosition || 'center center',
                  }}
                />
              </div>

              <div className="highlight-large-content">

                <h3>
                  {largeCard.title}
                </h3>

                <p>
                  {largeCard.description}
                </p>

                <span className="highlight-card-arrow">
                  <ArrowRight size={20} />
                </span>

              </div>

            </a>
          )}

          <div className="highlight-side-cards">

            {wideCards.map((item) => (
              <a
                href={item.link}
                key={item.id}
                className="highlight-card highlight-card-wide"
              >

                <div className="highlight-wide-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="highlight-card-image"
                    style={{
                      objectPosition: item.imagePosition || 'center center',
                    }}
                  />
                </div>

                <div className="highlight-wide-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <span className="highlight-card-arrow">
                    <ArrowRight size={20} />
                  </span>

                </div>

              </a>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default CommunityHighlights