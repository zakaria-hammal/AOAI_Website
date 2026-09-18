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
            <strong>Season 2</strong> is structured into <strong>five progressive stages</strong> — Genesis, Ascend, Vanguard, Apex, and Zenith — moving from foundational reasoning and independent learning towards full national-team representation.
          </p>
          <p>
            As the season progresses, training increasingly follows the <strong>official IOAI syllabus</strong>, while the expected level of independence, problem-solving ability, and commitment rises at each stage.
          </p>
          <blockquote className="selection-disclaimer">
            Note that dates and scheduling depend on the official school calendar published by the Ministry of National Education and may change accordingly. This outline, including the number of participants progressing at each stage, is subject to change throughout the season.
          </blockquote>
        </div>
      </div>

      <div className="phases-vertical-flow">
        {/* Stage I — Genesis */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Stage I</span>
            <h3 className="phase-name">AOAI Genesis</h3>
            <p className="phase-period"><strong>Period:</strong> Mathematics Test — October 3, 2026 · Programming Test — October 10, 2026</p>
          </div>

          <div className="phase-card-body">
            <p className="phase-lead-text">The first stage measures how well participants reason, adapt, and learn independently when faced with concepts they have not seen before — not how much they already know about AI.</p>

            <div className="phase-info-grid">
              <div className="info-section">
                <h4>Eligibility</h4>
                <ul className="selection-list">
                  <li>Open to <strong>any Algerian student</strong> who has not yet passed the Baccalaureate exam</li>
                  <li><strong>No prior AI knowledge required</strong> — every task provides the context needed to solve it</li>
                  <li>Comfortable working in <strong>VS Code</strong> and <strong>Google Colab</strong>, with solid technical English</li>
                </ul>
                <p className="note-text">Roughly <strong>50%</strong> of participants advance to AOAI Ascend.</p>
              </div>

              <div className="info-section">
                <h4>Format</h4>
                <ul className="selection-list">
                  <li>Two separate <strong>5-hour tests</strong>, one week apart, both fully online</li>
                  <li>Submitted individually through a <strong>Google Form</strong></li>
                  <li>Completed independently — no help from other participants or outside tools</li>
                </ul>
                <p className="note-text">Programming Test solutions are submitted as a Jupyter notebook (<strong>.ipynb</strong>).</p>
              </div>
            </div>

            <div className="curriculum-preview-block">
              <h4>What&apos;s Tested</h4>
              <p>Each test is built around:</p>
              <div className="curriculum-sub-grid">
                <div className="curr-item">
                  <h5>Mathematics Test</h5>
                  <p>Linear Algebra, Calculus, and Probability &amp; Statistics, extending beyond the standard high-school curriculum. Only a LaTeX cheat sheet is provided.</p>
                </div>
                <div className="curr-item">
                  <h5>Programming Test</h5>
                  <p>Python problems drawn from Machine Learning, Computer Vision, and NLP pipelines. Only the official Python documentation is allowed.</p>
                </div>
                <div className="curr-item">
                  <h5>Prior Knowledge</h5>
                  <p>Not required. Every problem introduces the concepts and definitions needed to solve it — the test measures how fast you learn, not what you already know.</p>
                </div>
              </div>
            </div>

            <div className="roadmap-download-zone">
              <p>For a full breakdown of preparation resources, download the AOAI Genesis guide:</p>
              <a href="/aoai-genesis.pdf" download className="download-cta-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download PDF Guide
              </a>
            </div>

            <div className="exam-highlight-box">
              <h4>Rules</h4>
              <p>The use of any <strong>Artificial Intelligence tool is strictly forbidden</strong> — including LLMs, AI-powered code completion, and AI assistants built into editors, whether accessed online or run locally.</p>
              <p className="exam-footer">Participants who do not advance keep full access to later-stage material to prepare for next season.</p>
            </div>
          </div>
        </div>

        {/* Stage II — Ascend */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Stage II</span>
            <h3 className="phase-name">AOAI Ascend</h3>
            <p className="phase-period"><strong>Period:</strong> During the academic year</p>
          </div>
          <div className="phase-card-body">
            <p className="phase-lead-text">The second stage shifts from foundations to real machine-learning problems, with participants expected to grow steadily more independent in acquiring whatever each new problem requires.</p>
            <div className="phase-info-grid">
              <div className="info-section">
                <h4>Core Training</h4>
                <ul className="selection-list">
                  <li>Data cleaning, preprocessing, and exploratory data analysis</li>
                  <li>Feature engineering, model construction, training, and evaluation</li>
                  <li>Learning to identify and evaluate documentation, tutorials, and papers independently</li>
                </ul>
              </div>
              <div className="info-section">
                <h4>Tooling</h4>
                <ul className="selection-list">
                  <li><strong>NumPy</strong> and <strong>SciPy</strong> for numerical computing</li>
                  <li><strong>Pandas</strong> for data manipulation and analysis</li>
                  <li><strong>Scikit-learn</strong>, <strong>XGBoost</strong>, and <strong>CatBoost</strong> for practical ML models</li>
                </ul>
                <p className="note-text">Mathematics is introduced only as needed and is generally not a direct test component at this stage.</p>
              </div>
            </div>
            <div className="selection-rounds-box">
              <h4>Outcome</h4>
              <p>Ascend tests practical ML fluency rather than memorized theory. Around <strong>20%</strong> of participants progress to AOAI Vanguard; everyone else keeps access to later-stage material to prepare for next season.</p>
            </div>
          </div>
        </div>

        {/* Stage III — Vanguard */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Stage III</span>
            <h3 className="phase-name">AOAI Vanguard</h3>
            <p className="phase-period"><strong>Period:</strong> During the academic year</p>
          </div>
          <div className="phase-card-body">
            <p className="phase-lead-text">The third stage begins the deep-learning track with PyTorch — the framework used at the IOAI — and is where training starts following the <strong>official IOAI syllabus</strong> directly.</p>
            <div className="phase-info-grid">
              <div className="info-section">
                <h4>Focus Areas</h4>
                <ul className="selection-list">
                  <li>Natural Language Processing and Computer Vision — full data pipelines, from raw data to model input</li>
                  <li>Model architecture, activation and loss functions, optimization, and training loops</li>
                  <li>Reading and analyzing the research papers behind modern models, not just using them</li>
                </ul>
              </div>
              <div className="info-section">
                <h4>Working With Models</h4>
                <ul className="selection-list">
                  <li>Using existing, pretrained architectures under real time and resource constraints</li>
                  <li>Transfer learning, fine-tuning, and architectural adaptation</li>
                  <li>Regular mock contests based on past Olympiad-style problems and national selection programs</li>
                </ul>
                <p className="note-text">There is rarely one model or configuration that is optimal for every problem.</p>
              </div>
            </div>
            <div className="selection-rounds-box">
              <h4>Outcome</h4>
              <p>The <strong>10 strongest participants</strong> at the end of AOAI Vanguard progress to AOAI Apex, the program&apos;s final selection stage.</p>
            </div>
          </div>
        </div>

        {/* Stage IV — Apex */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Stage IV</span>
            <h3 className="phase-name">AOAI Apex</h3>
            <p className="phase-period"><strong>Period:</strong> End of the academic year</p>
          </div>
          <div className="phase-card-body">
            <p className="phase-lead-text">The final selection stage consolidates everything learned so far and introduces the last areas of the IOAI syllabus, including audio tasks and the Hugging Face ecosystem.</p>
            <div className="phase-info-grid">
              <div className="info-section">
                <h4>Focus Areas</h4>
                <ul className="selection-list">
                  <li>Completing the remaining IOAI syllabus, including audio-related tasks</li>
                  <li>Selecting, loading, and fine-tuning pretrained models through the <strong>Hugging Face</strong> ecosystem</li>
                  <li>Combining every previous skill into complete, end-to-end competition solutions</li>
                </ul>
              </div>
              <div className="info-section">
                <h4>Preparation</h4>
                <ul className="selection-list">
                  <li>Solving past IOAI tasks and other difficult Olympiad-style problems</li>
                  <li>Working under realistic time pressure and decision-making constraints</li>
                </ul>
                <p className="note-text">Four students from Season 1 are exempt from earlier stages and enter directly here: Mohamed Alaa eddine Khelifi, Rostom Mohamed Kamel Bouabdallah, Nesrine Mazouz, and Sofiane Bouricha.</p>
              </div>
            </div>
            <div className="tst-final-info">
              <h4>Final Team Selection Test</h4>
              <p>Ten participants compete in the Final Team Selection Test, which mirrors real IOAI conditions — analyzing unfamiliar problems, using available tools and models effectively, managing time, and debugging under pressure.</p>
              <div className="final-selection-statement">
                Four participants are selected to form the Algerian team for the season.
              </div>
            </div>
          </div>
        </div>

        {/* Stage V — Zenith */}
        <div className="phase-card-detailed">
          <div className="phase-card-header">
            <span className="phase-badge">Stage V</span>
            <h3 className="phase-name">AOAI Zenith</h3>
            <p className="phase-period"><strong>Period:</strong> IOAI 2027 — Singapore</p>
          </div>
          <div className="phase-card-body">
            <p className="phase-lead-text">AOAI Zenith is reserved for the four students selected to officially represent Algeria at the <strong>International Olympiad in Artificial Intelligence</strong>.</p>
            <div className="final-selection-statement">
              Four students carry Algeria&apos;s name to the International Olympiad in Artificial Intelligence 2027 in Singapore — the final stage of the AOAI journey.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}