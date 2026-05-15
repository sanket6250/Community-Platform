import React from 'react'
import './LiveWebinar.css'

import { CalendarDays } from 'lucide-react'
import { Assets } from '../../assets/Assets'

const LiveWebinar = () => {
  return (
    <section className="live-webinar-section">

      <div className="container">

        <div className="live-webinar-card">

          <div className="row align-items-center g-4">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              <div className="live-webinar-content">

                <h2>
                  Live Webinar
                </h2>

                <p>
                  Browse upcoming Webinars hosted by Kytes with topics ranging
                  from Project Life Cycle Management deep dives to networking
                  opportunities. There is a webinar to help you grow your skills
                  and continue growing in your Project Management career.
                </p>

                <a href="/" className="webinar-btn">

                  <span>
                    See Webinars
                  </span>

                  <span className="webinar-btn-icon">
                    <CalendarDays size={16} />
                  </span>

                </a>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6">

              <div className="live-webinar-image-wrapper">

                <img
                  src={Assets.Webinar_Image}
                  alt="Live Webinar"
                  className="live-webinar-image"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default LiveWebinar