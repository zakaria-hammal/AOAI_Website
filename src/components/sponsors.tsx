import Link from "next/link";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

export function Sponsors() {
  const sponsors: Sponsor[] = [
    {
      name: "Huawei",
      logo: "/Huawei-Logo.png",
      url: "https://www.huawei.com/en/",
    },
  ];

  return (
    <>
      <div className="sponsors-container">
        <div className="section-header">
          <h2 className="section-title">Our Valued Sponsors</h2>
          <p className="section-subtitle">
            Supported by leading organizations in AI and technology
          </p>
        </div>

        <h3 className="platinuim-sponsors-title">Platinium Sponsors</h3>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-item"
            >
              <Image
                src={sponsor.logo}
                width={300}
                height={200}
                alt={sponsor.name}
                className="sponsor-logo"
              />
            </a>
          ))}
        </div>

        <div className="sponsors-section-footer">
          <p>
            For official sponsorship request,{" "}
            <Link href="mailto:aoai@algerianoi.com">contact-us</Link>
          </p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
