import React from 'react'
import './FeaturedGroups.css'

import { Users, MessageSquare } from 'lucide-react'
import { featuredGroupsData } from '../../constants/featuredGroupsData'

const FeaturedGroups = () => {
  return (
    <section className="featured-groups-section">

      <div className="container">

        <div className="featured-groups-header">

          <h2 className="featured-groups-title">
            Featured Groups
          </h2>

          <p className="featured-groups-subtitle">
            Join groups to share and connect with likeminded Kytes community members.
          </p>

        </div>

        <div className="featured-groups-grid">

          {featuredGroupsData.map((group) => (
            <a
              href={group.link}
              className="featured-group-card"
              key={group.id}
            >

              <div className="featured-group-icon-box">

                <img
                  src={group.icon}
                  alt={group.title}
                  className="featured-group-icon"
                />

              </div>

              <div className="featured-group-content">

                <h3>
                  {group.title}
                </h3>

                <p>
                  {group.description}
                </p>

              </div>

              <div className="featured-group-meta">

                <span>
                  <Users size={14} />
                  {group.members}
                </span>

                <span>
                  <MessageSquare size={14} />
                  {group.comments}
                </span>

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedGroups