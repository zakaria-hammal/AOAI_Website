import Image from "next/image";

interface Coach {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function Coaches() {
  const coaches: Coach[] = [
    {
      name: "Ilyes Mohammed",
      role: "Head Coach",
      bio: "College professor",
      image: "/ilyes.png"
    },
    {
      name: "Drici Mohammed Hachem",
      role: "Coach",
      bio: "Student in University of El oued",
      image: "/hachem.png"
    },
    {
      name: "Raouf Ould Ali",
      role: "Coach",
      bio: "AI student in ENSIA",
      image: "/raouf.png"
    },
    {
      name: "Zakaria HAMMAL",
      role: "Coach",
      bio: "Student in USTHB",
      image: "/zakaria-hammal.jpeg" 
    },
    {
      name: "Ali BEN CHIKH",
      role: "Coach",
      bio: "Master 2 in Applied Mathematics (Financial Mathematics) University of Tamanghasset",
      image: "/ali.png" 
    },
    {
      name: "Assil BOUKHENNOUFA",
      role: "Coach",
      bio: "Student in ENSTA",
      image: "/assil.png" 
    },
    {
      name: "Mohammed Al Ghazali MEGHABBER",
      role: "Coach",
      bio: "Student in ENSIA",
      image: "/ghazali.png" 
    },
    {
      name: "Zakaria Ahmed LAHCINE",
      role: "Coach",
      bio: "Student in INELEC",
      image: "/zaki_inelec.png" 
    },
    {
      name: "Firas Mohamed El Amine KIRAM",
      role: "Coach",
      bio: "Student in UMKB",
      image: "/firas.png" 
    }
  ];

  return (
    <div className="coach-container">
      <div className="section-header">
        <h2 className="section-title">Our Expert Coaches</h2>
        <p className="section-subtitle">Learn from the best minds in Algerian AI</p>
      </div>
      
      <div className="coaches-grid">
        {coaches.map((coach, index) => (
          coach.role === "Head Coach" ? (
            <div key={index} className="head-coach-container">
              <div className="coach-card head-coach">
                <Image
                  src={coach.image}
                  width={150}
                  height={150}
                  alt={coach.name}
                  className="rounded-full object-cover coach-image"
                />
                <div className="coach-content">
                  <h3 className="coach-name">{coach.name}</h3>
                  <p className="coach-role">{coach.role}</p>
                  <p className="coach-bio">{coach.bio}</p>
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="coach-card">
              <Image
                src={coach.image}
                width={150}
                height={150}
                alt={coach.name}
                className="rounded-full object-cover coach-image"
              />
              <div className="coach-content">
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-role">{coach.role}</p>
                <p className="coach-bio">{coach.bio}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
