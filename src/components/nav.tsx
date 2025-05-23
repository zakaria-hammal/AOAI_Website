"use clien";

import Link from "next/link";
import Image from 'next/image';

export function Nav() {
    return(
        <nav className="aoai-nav">
        <div className="nav-container">
            <Link href="/" className="nav-logo">
                <Image
                    src="/AOAI.png"
                    width={150}
                    height={150}
                    alt="Logo"
                    priority
                />
            </Link>
            
            <div className="nav-menu" id="navMenu">
                <ul className="nav-list">
                    <li><Link href="#about" className="nav-link">About</Link></li>
                    <li><Link href="#events" className="nav-link">Events</Link></li>
                    <li><Link href="#courses" className="nav-link">Courses</Link></li>
                    <li><Link href="#coaches" className="nav-link">Coaches</Link></li>
                    <li><Link href="#sponsors" className="nav-link">Ambassadors</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}