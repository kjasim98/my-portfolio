import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'skills', 'projects', 'certifications', 'contact'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

  return (
    <div className="App custom-background">
    {/* -------------------------------------------------------------------------- */}
    <Container className="mt-4 ">
      <Row>
        {/* left column */}
        <Col lg={6} xs={12}>
          <div className="p-3 sticky-header ">
            <h1>Kadhim Riyadh </h1>
            <p style={{color: "gray", margin: "0px"}}>full-stack developer -- react&django</p>
            <div className='d-none  d-lg-block mt-5'>
              <span
                style={{ color: activeSection === 'about-me' ? 'white' : 'gray', cursor: 'pointer' }}
                onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </span>
              <br />
              <span
                style={{ color: activeSection === 'skills' ? 'white' : 'gray', cursor: 'pointer' }}
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Skills
              </span>
              <br />
              <span
                style={{ color: activeSection === 'projects' ? 'white' : 'gray', cursor: 'pointer' }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </span>
              <br />
              <span
                style={{ color: activeSection === 'certifications' ? 'white' : 'gray', cursor: 'pointer' }}
                onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Certifications
              </span>
              <br />
              <span
                style={{ color: activeSection === 'contact' ? 'white' : 'gray', cursor: 'pointer' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </span>
            </div>
          </div>


        </Col>
        {/* right column */}
        <Col lg={6} xs={12}>
          <Container className="mt-4 custom-row">
            {/* About Me */}
            <Row style={{marginTop: "300px"}}>
              <Col lg={12}>
                <div className="p-3 m-4" id="about-me">
                  <h2>About Me</h2>
                  <p style={{ color: 'gray' }}>I'm a third-year Computer Science student at the American University of Iraq – Baghdad, passionate about full-stack development. I enjoy building modern web apps using React for the frontend and Django for the backend.

                  I’m currently working on a coding platform similar to LeetCode, which has helped me learn how to use Git, GitHub, REST APIs, and Redux for state management. My long-term goal is to specialize in Artificial Intelligence, and I’ve started preparing by completing CS50’s AI course and exploring machine learning.

I                   enjoy solving problems on LeetCode and building useful tools. I'm looking forward to applying what I’ve learned in real-world internships and future graduate studies..</p>
                </div>
              </Col>
            </Row>

            {/* Skills */}
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

            {/* Projects */}
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

            {/* Certifications */}
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

            {/* Contact */}
            <Row>
              <Col lg={12}>
                <div id="contact" className="p-3 m-4">
                  <h2>Contact</h2>
                  <p>Email: kjasim1998@gmail.com</p>
                  <p>GitHub: <a href="https://github.com/kjasim98">kjasim98</a></p>
                </div>
              </Col>
            </Row>
          </Container>
  {/* -------------------------------------------------------------------------- */}
        </Col>
      </Row>
    </Container>
    {/* -------------------------------------------------------------------------- */}
    <div
  className="mouse-light"
  style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}
></div>
    </div>
  );
}

export default App;