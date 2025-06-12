"use client";

import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";

export function Nav() {
    return(
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
    <nav className="aoai-nav">
        <div className="nav-container">
        
            <Link href="/" className="nav-logo">
                <Image
                    src="/logo.png"
                    width={50}
                    height={50}
                    alt="Logo"
                    priority
                />
            </Link>
            
            <div className="nav-menu" id="navMenu">
                <ul className="nav-list">
                    <li><Link href="#about" className="nav-link">About</Link></li>
                    <li><Link href="#events" className="nav-link">Events</Link></li>
                    <li><Link href="#coaches" className="nav-link">Coaches</Link></li>
                    <li><Link href="#ambassadors" className="nav-link">Ambassadors</Link></li>
                   <li><Link href="#sponsors" className="nav-link">Sponsors</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    );
}
