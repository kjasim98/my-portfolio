import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm Kadhim 👋</h1>

      <h2>About Me</h2>
      <p>I’m a 3rd year Computer Science student at the American University in Baghdad. I enjoy building software with Django and React. I'm currently working on a coding platform like LeetCode and teaching myself machine learning as I prepare for grad school.</p>
     
      <h2>Skills</h2>
      <ul>
        <li>💻 Python, Django, Django REST Framework</li>
        <li>⚛️ React.js, Redux</li>
        <li>🔧 Git, GitHub, VS Code, npm</li>
        <li>🌐 HTML, CSS, JavaScript (basic)</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>
          <strong>🧠 Kluge – LeetCode-like Coding Platform</strong><br />
          <em>In progress</em> – A platform where users can solve coding problems in real time using a Django + React stack.
        </li>
        <li>
          <strong>📢 Complaint Handling System</strong><br />
          A full-stack system to allow university students to submit and track complaints. Built with Django REST API + React.
        </li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>CS50’s Introduction to Artificial Intelligence (Harvard/edX)</li>
        <li>Git & GitHub for Beginners (Coursera / Udemy)</li>
      </ul>
      
      <h2>Contact</h2>
      <p>Email: kjasim1998@gmail.com</p>
      <p>GitHub: <a href="https://github.com/kjasim98">kjasim98</a></p>
    </div>
  );
}

export default App;