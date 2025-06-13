import Image from "next/image";

export function Events() {
  return (
    <section className="upcoming-events">
      <h2 className="section-title">Upcoming Events</h2>
      
      <div className="events-grid">
        <div className="event-card">
          <div className="event-icon-container">
            <Image 
                src="/logo-purple.png" 
                width={80} 
                height={80} 
                alt="Career"
                className="benefit-icon"
            />
          </div>
          <div className="event-content">
            <h3 className="event-title">Summer STEM Camp</h3>
          </div>
          <div className="event-date">
            <span className="date-day">Coming</span>
            <span className="date-month">Soon</span>
          </div>
        </div>
        
        <div className="event-card">
          <div className="event-icon-container">
            <Image 
                src="/logo-red.png" 
                width={80} 
                height={80} 
                alt="Career"
                className="benefit-icon"
            />
          </div>
          <div className="event-content">
            <h3 className="event-title">Post-Camp Evaluation</h3>
          </div>
          <div className="event-date">
            <span className="date-day">To Be</span>
            <span className="date-month">Announced</span>
          </div>
        </div>
        
        <div className="event-card">
          <div className="event-icon-container">
            <Image 
                src="/logo-silver.png" 
                width={80} 
                height={80} 
                alt="Career"
                className="benefit-icon"
            />

          </div>
          <div className="event-content">
            <h3 className="event-title">Round One</h3>
          </div>
          <div className="event-date">
            <span className="date-day">To Be</span>
            <span className="date-month">Announced</span>
          </div>
        </div>
        <div className="event-card">
          <div className="event-icon-container">
            <Image 
                src="/logo-silver.png" 
                width={80} 
                height={80} 
                alt="Career"
                className="benefit-icon"
            />

          </div>
          <div className="event-content">
            <h3 className="event-title">Round Two</h3>
          </div>
          <div className="event-date">
            <span className="date-day">To Be</span>
            <span className="date-month">Announced</span>
          </div>
        </div>
        <div className="event-card">
          <div className="event-icon-container">
            <Image 
                src="/logo-red.png" 
                width={80} 
                height={80} 
                alt="Career"
                className="benefit-icon"
            />

          </div>
          <div className="event-content">
            <h3 className="event-title">Team Selection Test</h3>
          </div>
          <div className="event-date">
            <span className="date-day">To Be</span>
            <span className="date-month">Announced</span>
          </div>
        </div>
      </div>
    </section>
  );
}
