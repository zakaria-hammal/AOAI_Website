import Image from "next/image";

export function Hero() {
    return ( 
        <div className="hero-container">    
            <div className="hero-mission">
                <h2 className="mission-title">AOAI Mission</h2>
                <p className="mission-text">The Algerian Olympiad in Artificial Intelligence (AOAI) aims to identify, train, and empower the nation’s most talented young minds in AI, preparing them to represent Algeria at the International Olympiad in Artificial Intelligence. Through rigorous selection, mentorship, and innovation-driven learning, AOAI fosters excellence and inspires the next generation of AI leaders.</p>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <div className="hero-join">
                <h2 className="section-title">Why Join Us ?</h2>
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
                        <p className="benefit-text"><b className="benefit-header">Math</b> <br></br> Strengthen your AI-ready math skills.</p>
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
                        <p className="benefit-text"><b className="benefit-header">Programming</b> <br></br> Learn to code smart solutions.</p>
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
                        <p className="benefit-text"><b className="benefit-header">Problem Solving</b> <br></br> Think critically, solve creatively.</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
