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
      name: "Drici Mohammed Hachem",
      role: "Head Coach",
      bio: "Student in University of El oued",
      image: "/hachem.webp"
    },
    {
      name: "Ilyes Mohammed",
      role: "Computer vision researcher",
      bio: "College proffessor",
      image: "/coach2.jpg"
    },
    {
      name: "Raouf Ould Ali",
      role: "Nice guy",
      bio: "AI student in ENSIA",
      image: "/coach3.jpg"
    }
  ];

  return (
    <section className="coaches-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Expert Coaches</h2>
          <p className="section-subtitle">Learn from the best minds in Algerian AI</p>
        </div>

        <div className="coaches-grid">
          {coaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <div className="coach-image">
                <Image
                  src={coach.image}
                  width={200}
                  height={200}
                  alt={coach.name}
                  className="rounded-full"
                />
              </div>
              <div className="coach-content">
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-role">{coach.role}</p>
                <p className="coach-bio">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}