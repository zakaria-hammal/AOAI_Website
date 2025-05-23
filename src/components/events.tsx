export function Events() {
    return (
        <>
        <div className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
            
            <div className="event-card">
            <div className="event-date">
                <span className="date-day">15</span>
                <span className="date-month">JUN</span>
            </div>
            <div className="event-content">
                <h3 className="event-title">AI Hackathon 2023</h3>
                <p className="event-description">Join us for a 48-hour coding marathon to solve real-world problems using AI.</p>
                <div className="event-details">
                <span className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                    </svg>
                    10:00 AM - 6:00 PM
                </span>
                <span className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Algiers Convention Center
                </span>
                </div>
                <a href="#" className="event-button">Register Now</a>
            </div>
            </div>
            
            <div className="event-card">
            <div className="event-date">
                <span className="date-day">22</span>
                <span className="date-month">JUL</span>
            </div>
            <div className="event-content">
                <h3 className="event-title">Machine Learning Workshop</h3>
                <p className="event-description">Hands-on workshop covering the fundamentals of machine learning with Python.</p>
                <div className="event-details">
                <span className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                    </svg>
                    9:00 AM - 4:00 PM
                </span>
                <span className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    University of Science & Technology
                </span>
                </div>
                <a href="#" className="event-button">Learn More</a>
            </div>
            </div>
            
            <div className="event-card">
            <div className="event-date">
                <span className="date-day">10</span>
                <span className="date-month">AUG</span>
            </div>
            <div className="event-content">
                <h3 className="event-title">AI Ethics Symposium</h3>
                <p className="event-description">Exploring the ethical implications of artificial intelligence in modern society.</p>
                <div className="event-details">
                <span className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                    </svg>
                    1:00 PM - 5:00 PM
                </span>
                <span className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    National Library Auditorium
                </span>
                </div>
                <a href="#" className="event-button">Register Now</a>
            </div>
            </div>
            
        </div>
        </div>
        </>
    );
}