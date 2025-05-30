import Link from "next/link";

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
