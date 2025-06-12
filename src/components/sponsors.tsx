import Link from "next/link";
import Head from "next/head";

/*
interface Sponsor {
  name: string;
  logo: string;
  url: string;
}
*/

export function Sponsors() {
  /*
  const sponsors: Sponsor[] = [
    {
      name: "Algiers Tech",
      logo: "/sponsor1.png",
      url: "https://algierstech.dz"
    },
    {
      name: "National AI Institute",
      logo: "/sponsor2.png",
      url: "https://naii.dz"
    },
    {
      name: "Algerian Digital Foundation",
      logo: "/sponsor3.png",
      url: "https://adf.dz"
    }
  ];*/

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
      <div className="sponsors-container">
      {/*
        <div className="section-header">
          <h2 className="section-title">Our Valued Sponsors</h2>
          <p className="section-subtitle">Supported by leading organizations in AI and technology</p>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-item">
              <Image
                src={sponsor.logo}
                width={180}
                height={100}
                alt={sponsor.name}
                className="sponsor-logo"
              />
            </a>
          ))}
        </div>
        */}
        <div className="sponsors-section-footer">
          <p>For official sponsorship request, <Link href="mailto:aoai@algerianoi.com">contact-us</Link></p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
