interface Coach {
  name: string;
  role: string;
  bio: string;
}

export function Coaches() {
  const coaches: Coach[] = [
    {
      name: "Ilyes Mohammed LAKHAL",
      role: "Head Coach",
      bio: "Research Fellow in computer vision and Deep learning",
    },
    {
      name: "Mohammed Hachem DRICI",
      role: "Coach",
      bio: "Computer Science Student in in UEHL",
    },
    {
      name: "Raouf OULD ALI",
      role: "Coach",
      bio: "AI student in ENSIA",
    },
    {
      name: "Zakaria HAMMAL",
      role: "Coach",
      bio: "Computer Science Student in USTHB",
    },
    {
      name: "Ali BEN CHIKH",
      role: "Coach",
      bio: "Graduate in Applied Mathematics University of Tamanghasset",
    },
    {
      name: "Assil BOUKHENNOUFA",
      role: "Coach",
      bio: "Computer Science Student in ENSTA",
    },
    {
      name: "Mohammed Al Ghazali MEGHABBER",
      role: "Coach",
      bio: "AI Student in ENSIA",
    },
    {
      name: "Zakaria Ahmed LAHCINE",
      role: "Coach",
      bio: "Electrical Engineering Student in INELEC",
    },
    {
      name: "Firas Mohamed El Amine KIRAM",
      role: "Coach",
      bio: "Computer Science Student in UMKB",
    }
  ];

  const headCoaches = coaches.filter(coach => coach.role === "Head Coach");
  const otherCoaches = coaches.filter(coach => coach.role !== "Head Coach");

  return (
    <div className="coach-container">
      <div className="section-header">
        <h2 className="section-title">Our Expert Coaches</h2>
        <p className="section-subtitle">Learn from the best minds in Algerian AI</p>
      </div>
      
      <div className="coaches-container">
        {/* Head coaches at top center */}
        <div className="head-coaches-container">
          {headCoaches.map((coach, index) => (
            <div key={`head-${index}`} className="head-coach-card">
              <div className="coach-content">
                <h3 className="coach-name">
                  <span className="name-gradient">{coach.name}</span>
                </h3>
                <p className="coach-role">{coach.role}</p>
                <p className="coach-bio">{coach.bio}</p>
              </div>
              <div className="glow-effect"></div>
            </div>
          ))}
        </div>
        
        {/* Other coaches in flex wrap grid */}
        <div className="coaches-grid">
          {otherCoaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <div className="coach-content">
                <h3 className="coach-name">
                  <span className="name-gradient">{coach.name}</span>
                </h3>
                <p className="coach-role">{coach.role}</p>
                <p className="coach-bio">{coach.bio}</p>
              </div>
              <div className="glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
