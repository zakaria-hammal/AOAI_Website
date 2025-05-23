interface Course {
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  ctaText: string;
  ctaLink: string;
}

export function Courses() {
  const courses: Course[] = [
    {
      title: "Introduction to Python for AI",
      description: "Master Python fundamentals with AI applications, covering syntax, data structures, and algorithms.",
      duration: "6 Weeks",
      level: "Beginner",
      ctaText: "Start Learning",
      ctaLink: "#"
    },
    {
      title: "Introduction to Mathematical Reasoning",
      description: "Develop essential mathematical thinking skills and algebraic manipulation for AI problem solving.",
      duration: "4 Weeks",
      level: "Beginner",
      ctaText: "Start Learning",
      ctaLink: "#"
    },
    {
      title: "Introduction to Linear Algebra",
      description: "Master vectors, matrices, and linear transformations - the mathematical backbone of machine learning.",
      duration: "5 Weeks",
      level: "Intermediate",
      ctaText: "Enroll Now",
      ctaLink: "#"
    },
    {
      title: "Introduction to Calculus",
      description: "Learn differential and integral calculus concepts essential for machine learning optimization.",
      duration: "6 Weeks",
      level: "Intermediate",
      ctaText: "Enroll Now",
      ctaLink: "#"
    },
    {
      title: "Probability and Statistics",
      description: "Fundamental concepts of probability and statistics with applications in data analysis and ML.",
      duration: "5 Weeks",
      level: "Intermediate",
      ctaText: "Enroll Now",
      ctaLink: "#"
    },
    {
      title: "Deep Learning Fundamentals",
      description: "Explore neural networks, backpropagation, and modern deep learning architectures.",
      duration: "8 Weeks",
      level: "Advanced",
      ctaText: "Apply Now",
      ctaLink: "#"
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Core Courses</h2>
          <p className="section-subtitle">Build your AI foundation with these essential courses</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <span className={`course-level level-${course.level.toLowerCase()}`}>
                  {course.level}
                </span>
              </div>
              <div className="course-body">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}