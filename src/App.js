import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';

const sections = ['about-me', 'skills', 'projects', 'certifications', 'contact'];

function Navigation({ activeSection, onClickSection }) {
  return (
    <div className="p-3 sticky-header">
      <h1>Kadhim Riyadh </h1>
      <p style={{ color: "gray", margin: "0px" }}>full-stack developer -- react&django</p>
      <div className='d-none d-lg-block mt-5'>
        {sections.map((section) => (
          <React.Fragment key={section}>
            <span
              style={{ color: activeSection === section ? 'white' : 'gray', cursor: 'pointer' }}
              onClick={() => onClickSection(section)}
            >
              {section === 'about-me' ? 'About Me' :
               section === 'skills' ? 'Skills' :
               section === 'projects' ? 'Projects' :
               section === 'certifications' ? 'Certifications' :
               section === 'contact' ? 'Contact' : section}
            </span>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function getActiveSectionFromScroll() {
  for (let section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offset = section === 'contact' ? 0 : 100;
      if (
        rect.top <= window.innerHeight / 2 - offset &&
        rect.bottom >= window.innerHeight / 2 - offset
      ) {
        return section;
      }
    }
  }
  return '';
}

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = getActiveSectionFromScroll();
      if (section) setActiveSection(section);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClickSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App custom-background">
      <Container fluid className={isMobile ? "p-0 m-0" : ""}>
        <Row>
          <Col lg={6} xs={12}>
            <Navigation activeSection={activeSection} onClickSection={handleClickSection} />
          </Col>
          <Col lg={6} xs={12}>
            <Container className={isMobile ? "mt-4 custom-row p-0 m-0" : "mt-4 custom-row fluid"} >
              <Row style={{ marginTop: "300px" }}>
                <Col lg={12}>
                  <div className="p-3 m-4" id="about-me">
                    <h2>About Me</h2>
                    <p style={{ color: 'gray' }}>
                      I'm a third-year Computer Science student at the American University of Iraq – Baghdad, passionate about full-stack development. I enjoy building modern web apps using React for the frontend and Django for the backend.
                      I’m currently working on a coding platform similar to LeetCode, which has helped me learn how to use Git, GitHub, REST APIs, and Redux for state management. My long-term goal is to specialize in Artificial Intelligence, and I’ve started preparing by completing CS50’s AI course and exploring machine learning.
                      I enjoy solving problems on LeetCode and building useful tools. I'm looking forward to applying what I’ve learned in real-world internships and future graduate studies..
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="p-3 m-4" id="skills">
                    <h2>Skills</h2>
                    <ul>
                      <li>💻 Python, Django, Django REST Framework</li>
                      <li>⚛️ React.js, Redux</li>
                      <li>🔧 Git, GitHub, VS Code, npm</li>
                      <li>🌐 HTML, CSS, JavaScript (basic)</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="p-3 m-4" id="projects">
                    <h2>Projects</h2>
                    <ul>
                      <li style={{ marginBottom: "20px" }}>
                        <strong>🧠 LeetCode-Like Problem Solving Platform (Prototype)</strong><br />
                        Built a prototype of an online coding platform inspired by LeetCode. It allows users to solve programming problems with real-time feedback. Developed using React, Redux for state management, and Django for the backend.<br />
                        <em>What I learned:</em> Strengthened my full-stack development skills, improved my understanding of REST APIs and code execution engines, and gained experience in managing complex application state using Redux.
                      </li>
                      <li style={{ marginBottom: "20px" }}>
                        <strong>🌳 Recursion Visualization Tool – Decision Tree Viewer (Prototype)</strong><br />
                        Created a prototype tool to visually demonstrate how recursion works by showing each function call as a branching decision tree. Built with JavaScript, React, and Redux to handle interactive and dynamic visualization updates.<br />
                        <em>What I learned:</em> Enhanced my skills in JavaScript, React, and Redux; deepened my understanding of recursion; and developed practical experience in algorithm visualization and UI/UX design for learning tools.
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="p-3 m-4" id="certifications">
                    <h2>Certifications</h2>
                    <ul style={{ paddingLeft: "20px" }}>
                      <li style={{ marginBottom: "20px" }}>
                        <strong>Python and Django Full Stack Web Developer Bootcamp</strong><br />
                        <em>Udemy – Instructors: Jose Portilla, Pierian Training</em><br />
                        Completed: January 26, 2025 — 32 total hours<br />
                        Gained hands-on experience building full-stack applications using Python, Django, HTML, CSS, JavaScript, and databases.
                      </li>
                      <li style={{ marginBottom: "20px" }}>
                        <strong>Django with React | An Ecommerce Website</strong><br />
                        <em>Udemy – Instructors: Dennis Ivy, Brad Traversy</em><br />
                        Completed: March 8, 2025 — 18 total hours<br />
                        Built an end-to-end e-commerce website integrating Django and React, enhancing full-stack development skills.
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div id="contact" className="p-3 m-4" style={{ marginBottom: "100px" }}>
                    <h2>Contact</h2>
                    <p>Email: kjasim1998@gmail.com</p>
                    <p>GitHub: <a href="https://github.com/kjasim98">kjasim98</a></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <div
        className="mouse-light"
        style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}
      ></div>
    </div>
  );
}

export default App;