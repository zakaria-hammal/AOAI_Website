import Image from "next/image";

export function Hero() {
    return ( 
        <div className="hero-container">    
            <div className="hero-mission">
                <h2 className="section-title">AOAI Mission</h2>
                <p className="mission-text">IOAI&apos;s mission is to inspire and engage young people in science, with a focus on AI. We aim to provide a platform for the world&apos;s top AI students, selected through fair national competitions, to compete, exchange ideas, and build connections. Our goal is to foster a global dialogue on AI&apos;s opportunities and ethical challenges, involving both students and the broader community.</p>
            </div>

            <div className="hero-join">
                <h2 className="section-title">Why join?</h2>
                <div className="benefits-grid">
                <div className="benefit-card">
                        <Image 
                            src="/INFINITY.png" 
                            width={90} 
                            height={90} 
                            alt="Networking"
                            className="benefit-icon"
                        />
                </div>
                <div className="benefit-card">
                        <Image 
                            src="/PI.png" 
                            width={90} 
                            height={90} 
                            alt="Learning"
                            className="benefit-icon"
                        />
                </div>
                <div className="benefit-card">
                        <Image 
                            src="/ML.png" 
                            width={90} 
                            height={90} 
                            alt="Competition"
                            className="benefit-icon"
                        />
                </div>
                <div className="benefit-card">
                        <Image 
                            src="/NEURAL.png" 
                            width={90} 
                            height={90} 
                            alt="Career"
                            className="benefit-icon"
                        />
                </div>
                </div>
            </div>
        </div>
    ); 
}
