import Image from "next/image";
import Head from "next/head";

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
    </>
  );
}
