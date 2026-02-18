import React from 'react';

export function Selection() {
  return (
    <section className="selection-page-section">
      {/* Introduction */}
      <div className="selection-intro-container">
        <h2 className="selection-main-title">Official Selection Process</h2>
        <div className="intro-text-block">
          <p>
            The <strong>Algerian Olympiad in Artificial Intelligence (AOAI)</strong> selection process is designed to identify, train, and prepare the most promising students to represent Algeria at the international level, particularly at the <strong>International Olympiad in Artificial Intelligence (IOAI)</strong>.
          </p>
          <p>
            Our program is structured into <strong>three progressive phases</strong>, combining foundational preparation, advanced training, and final team selection.
          </p>
          <p>
            Throughout the entire process, we will <strong>strictly follow the official IOAI syllabus</strong>, ensuring that students are trained according to international standards.
          </p>
          <blockquote className="selection-disclaimer">
            Note that Dates and scheduling may change depending on official academic calendars and announcements by the Ministry of Education.
          </blockquote>
        </div>
      </div>

      <div className="phases-vertical-flow">
        {/* Phase I */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Phase I</span>
            <h3 className="phase-name">Summer STEM Camp (Online)</h3>
            <p className="phase-period"><strong>Period:</strong> Summer holidays (before the start of the academic year)</p>
          </div>

          <div className="phase-card-body">
            <p className="phase-lead-text">The first phase, called the <strong>Summer STEM Camp</strong>, is a nationwide online training program designed to build strong foundations.</p>
            
            <div className="phase-info-grid">
              <div className="info-section">
                <h4>Eligibility</h4>
                <ul className="selection-list">
                  <li>Open to <strong>ANY Algerian student</strong></li>
                  <li>Students who <strong>have not yet passed their BAC exam</strong></li>
                  <li>Accessible from all regions of Algeria</li>
                </ul>
                <p className="note-text">We aim to make this initiative as <strong>nationwide as possible</strong>, in collaboration with the <strong>Ministry of Education</strong>.</p>
              </div>

              <div className="info-section">
                <h4>Format</h4>
                <ul className="selection-list">
                  <li>Training on our <strong>Discord server</strong></li>
                  <li>Live sessions on <strong>Google Meet</strong></li>
                  <li>Recorded lectures on the <strong>YouTube channel</strong></li>
                  <li>Structured assignments and exercises</li>
                </ul>
              </div>
            </div>

            <div className="curriculum-preview-block">
              <h4>Curriculum</h4>
              <p>Participants will study:</p>
              <div className="curriculum-sub-grid">
                <div className="curr-item">
                  <h5>Programming Foundations</h5>
                  <ul className="selection-list">
                    <li>Python basics</li>
                    <li>Problem solving</li>
                    <li>Algorithmic thinking</li>
                  </ul> 
                </div>
                <div className="curr-item">
                  <h5>Mathematical Foundations</h5>
                  <ul className="selection-list">
                    <li>Linear Algebra</li>
                    <li>Calculus</li>
                    <li>Probability & Statistics</li>
                  </ul>
                </div>
                <div className="curr-item">
                  <h5>Introduction to AI Tools</h5>
                  <ul className="selection-list">
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>Introductory overview of Machine Learning using Scikit-learn</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="roadmap-download-zone">
              <p>Consider the following roadmap for a better overview of resources :</p>
              <a href="/AOAI_Roadmap.pdf" download className="download-cta-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download PDF Roadmap
              </a>
            </div>

            <div className="exam-highlight-box">
              <h4>End-of-Phase Examination</h4>
              <p>At the end of the Summer STEM Camp, participants will take an <strong>online qualifying test</strong> composed of two parts :</p>
              <ul className="selection-list">
                    <li><strong>Mathematics test</strong></li>
                    <li><strong>Implementation & problem-solving test (Python)</strong></li>
                  </ul>
              <p className="exam-footer">Students who successfully pass this stage advance to Phase II.</p>
            </div>
          </div>
        </div>

        {/* Phase II */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Phase II</span>
            <h3 className="phase-name">Advanced Training & Progressive Selection</h3>
            <p className="phase-period"><strong>Period:</strong> During the academic year (longest phase)</p>
          </div>
          <div className="phase-card-body">
            <p className="phase-lead-text">This is the core and longest stage of preparation.</p>
            <div className="phase-info-grid">
              <div className="info-section">
                <h4>Continuous Training</h4>
                <ul className="selection-list">
                  <li>Structured lectures and problem sets</li>
                  <li>Carefully selected problem sets</li>
                  <li>Guided practice using curated resources</li>
                  <li>Gradual exposure to competition-style problems</li>
                </ul>
              </div>
              <div className="info-section">
                <h4>Curriculum Progression</h4>
                <ul className="selection-list">
                  <li>Machine Learning techniques</li>
                  <li>Deep Learning fundamentals</li>
                  <li>Computer Vision (CV)</li>
                  <li>Natural Language Processing (NLP)</li>
                </ul>
                <p className="note-text">All content remains aligned with the  <strong>official IOAI syllabus</strong>.</p>
              </div>
            </div>
            <div className="selection-rounds-box">
              <h4>Selection Rounds</h4>
              <p>During this phase, <strong>several selection</strong> rounds will be organized:</p>
              <ul className="selection-list">
                <li>Increasing in difficulty</li>
                <li>Covering progressively more advanced material</li>
                <li>Designed to resemble Olympiad-style problems</li>
              </ul>
              <p>These rounds may be:</p>
              <ul className="selection-list">
                <li>Online</li>
                <li>Hybrid ( Online + On-site camps )</li>
              </ul>
              <p className="venue-info">
                On-site camps are planned to take place at the <strong>National Mathematical High School — Kouba</strong> The number of rounds and students selected in each round will remain flexible depending on the total number of participants , overall performance levels and also National and academic constraints while some rounds may also serve to select teams for intermediate competitions such as the African Olympiad in Artificial Intelligence

              </p>
            </div>
          </div>
        </div>

        {/* Phase III */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Phase III</span>
            <h3 className="phase-name">Final Team Selection (TST)</h3>
            <p className="phase-period"><strong>Period:</strong> End of the academic year</p>
          </div>
          <div className="phase-card-body">
            <p className="phase-lead-text">The final stage is an <strong>On-site Team Selection Test (TST)</strong>.</p>
            <div className="tst-final-info">
              <h4>Format</h4>
              <ul className="selection-list">
                <li>Held on-site at the <strong>National Mathematical High School — Kouba</strong></li>
                <li>Conducted in the <strong>exact format of the IOAI</strong></li>
                <li>Designed to simulate real competition conditions</li>
              </ul>
              <div className="final-selection-statement">
                This final examination determines the official Algerian team representing the country at the <strong>International Olympiad in Artificial Intelligence (IOAI)</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
