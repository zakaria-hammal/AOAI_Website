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
      role: "Director of the KU 6G Research center",
      university: "Professor at Khalifa University",
      image: "/merouane-debah.jpg"
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
                </div>
                <div className="ambassador-info"> 
                    <h3 className="ambassador-name">{ambassador.name}</h3>
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
