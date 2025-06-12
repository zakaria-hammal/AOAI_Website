import Image from "next/image";
import Head from "next/head";

export function Events() {
  return (
    <>
    <Head>
    <title>Algerian Open AI - Advancing AI in Algeria</title>
      <meta name="description" content="Join Algerian Open AI community of AI researchers, developers and enthusiasts working to advance artificial intelligence in Algeria" />
      <meta name="keywords" content="AI Algeria, Algerian AI community, machine learning Algeria" />
      <meta property="og:title" content="Algerian Open AI" />
      <meta property="og:description" content="Advancing AI research and development in Algeria" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <section className="upcoming-events">
      <h2 className="section-title">Upcoming Events</h2>
      
      <div className="events-grid">
        <div className="event-card">
          <div className="event-icon-container">
            <Image 
                src="/logo-cyan-blue.png" 
                width={80} 
                height={80} 
                alt="Career"
                className="benefit-icon"
            />
          </div>
          <div className="event-content">
            <h3 className="event-title">Summer Camp</h3>
            <p className="event-description">
              First cometition.
            </p>
          </div>
          <div className="event-date">
            <span className="date-day">15</span>
            <span className="date-month">JUN</span>
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
            <h3 className="event-title">Round 1</h3>
            <p className="event-description">
              Second competition
            </p>
          </div>
          <div className="event-date">
            <span className="date-day">22</span>
            <span className="date-month">JUL</span>
          </div>
        </div>
        
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
            <h3 className="event-title">Round 2</h3>
            <p className="event-description">
              Final Test
            </p>
          </div>
          <div className="event-date">
            <span className="date-day">10</span>
            <span className="date-month">AUG</span>
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
            <p className="event-description">
              Learn from industry experts about the latest trends in data science and analytics.
            </p>
          </div>
          <div className="event-date">
            <span className="date-day">05</span>
            <span className="date-month">SEP</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
