import Image from "next/image";

interface Ambassador {
  id: number;
  name: string;
  role: string;
  university: string;
  image: string;
}

export function Ambassadors() {
  const ambassadors: Ambassador[] = [
    {
      id: 1,
      name: "Merouane Debah",
      role: "AI Researcher",
      university: "Khalifa University",
      image: "/merouane-debah.jpg"
    },
    {
      id: 2,
      name: "Riadh Baghdadi",
      role: "Researcher",
      university: "NYU",
      image: "/logo.png"
    }
  ];

  return (
    <section className="ambassadors-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Ambassadors</h2>
          <p className="section-subtitle">Meet our dedicated AI ambassadors across Algeria</p>
        </div>
        
        <div className="ambassadors-grid">
          {ambassadors.map((ambassador) => (
            <div key={ambassador.id} className="ambassador-card">
              <div className="ambassador-image-container">
                <Image 
                  src={ambassador.image}
                  fill
                  alt={ambassador.name}
                  className="ambassador-image"
                />
                <div className="ambassador-info"> 
                  <h3 className="ambassador-name">{ambassador.name}</h3>
                  <p className="ambassador-role">{ambassador.role}</p>
                  <p className="ambassador-university">{ambassador.university}</p>
                </div>
              </div>
              <h3 className="ambassador-name">{ambassador.name}</h3>
              <div className="ambassador-mobile-info">
                <p className="ambassador-role">{ambassador.role}</p>
                <p className="ambassador-university">{ambassador.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
