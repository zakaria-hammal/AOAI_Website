import Image from "next/image";

export function Hero() {
    return ( 
        <div className="hero-container">    
            <div className="hero-mission">
                <h2 className="section-title">AOAI Mission</h2>
                <p className="mission-text">IOAI's mission is to inspire and engage young people in science, with a focus on AI. We aim to provide a platform for the world's top AI students, selected through fair national competitions, to compete, exchange ideas, and build connections. Our goal is to foster a global dialogue on AI's opportunities and ethical challenges, involving both students and the broader community.</p>
            </div>

            <div className="hero-join">
                <h2 className="section-title">Why Joining ?</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon-container">
                            <Image 
                                src="/PI.png" 
                                width={90} 
                                height={90} 
                                alt="Learning"
                                className="benefit-icon"
                            />
                        </div>
                        <p className="benefit-text">Learn Mathematics</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon-container">
                            <Image 
                                src="/ML.png" 
                                width={90} 
                                height={90} 
                                alt="Competition"
                                className="benefit-icon"
                            />
                        </div>
                        <p className="benefit-text">Learn machine learning</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon-container">
                            <Image 
                                src="/NEURAL.png" 
                                width={90} 
                                height={90} 
                                alt="Career"
                                className="benefit-icon"
                            />
                        </div>
                        <p className="benefit-text">Improve problem-solving skills</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
