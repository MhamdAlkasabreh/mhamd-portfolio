
import './style.css'

import robotImg from './assets/robot.png'
import phishingImg from './assets/phishing-ai.png'
import smartguardImg from './assets/smartguard-ai.png'
import lineFollowerImg from './assets/line-follower.png'
import bipedImg from './assets/biped-robot.png'
import spiderImg from './assets/spider-robot.png'
import parkingImg from './assets/smart-parking.png'
import farmImg from './assets/smart-farm.png'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <a href="#home" class="logo">M<span>.</span></a>

    <nav class="nav-links" id="navLinks">
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#contact" class="nav-contact">Let's Talk <span>↗</span></a>

    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-content">
        <span class="eyebrow">
          <span class="status-dot"></span>
          AI & Robotics Engineering
        </span>

        <h1>Building the Future<br>with <span>AI & Robotics.</span></h1>

        <p class="hero-description">
          Exploring the intersection of artificial intelligence, robotics, and technology
          to turn ideas into real-world solutions.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="btn-primary">Explore My Work <span>↗</span></a>
          <a href="#contact" class="btn-secondary">Get in Touch</a>
        </div>

        <
<div class="hero-socials">
  <a href="https://www.linkedin.com/in/mhamd-alkasabreh/"
     target="_blank"
     rel="noopener noreferrer">
    LinkedIn ↗
  </a>

  <a href="https://github.com/MhamdAlkasabreh"
     target="_blank"
     rel="noopener noreferrer">
    GitHub ↗
  </a>
</div>

      </div>

      <div class="hero-visual">
        <div class="hero-circle"></div>
        <div class="hero-grid"></div>

        <img src="${robotImg}" alt="Robotics illustration" class="robot-image">

        <div class="floating-card card-top">
          <span class="floating-icon">✳</span>
          <div>
            <strong>Artificial Intelligence</strong>
            <small>Learning & Building</small>
          </div>
        </div>

        <div class="floating-card card-bottom">
          <span class="floating-icon">⌘</span>
          <div>
            <strong>Robotics</strong>
            <small>Design & Development</small>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stat-item">
        <h3>AI</h3>
        <p>Artificial Intelligence</p>
      </div>

      <div class="stat-item">
        <h3>ML</h3>
        <p>Machine Learning</p>
      </div>

      <div class="stat-item">
        <h3>Robotics</h3>
        <p>Engineering & Design</p>
      </div>

      <div class="stat-item">
        <h3>Code</h3>
        <p>Learning by Building</p>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="section-heading">
        <span class="section-label">GET TO KNOW ME</span>
        <h2>About Me</h2>
      </div>

      <div class="about-grid">
        <div class="about-intro">
          <h3>Curious by nature.<br><span>Driven by innovation.</span></h3>
        </div>

        <div class="about-text">
          <p>
            I'm an Artificial Intelligence and Robotics Engineering student
            passionate about technology, intelligent systems, and solving
            real-world problems.
          </p>

          <p>
            I enjoy exploring programming, machine learning, and robotics
            through hands-on projects and continuous learning. My goal is to
            keep developing my skills and build technology that makes a difference.
          </p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section skills-section" id="skills">
      <div class="section-heading">
        <span class="section-label">WHAT I WORK WITH</span>
        <h2>Skills & Technologies</h2>
        <p>Technologies and tools I'm learning and practicing.</p>
      </div>

      <div class="skills-grid">
        <div class="skill-card">
          <span class="skill-icon">Py</span>
          <h3>Python</h3>
          <p>Programming & problem solving</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">C++</span>
          <h3>C++</h3>
          <p>Programming fundamentals</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">AI</span>
          <h3>Machine Learning</h3>
          <p>ML concepts & model building</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">Pd</span>
          <h3>Pandas</h3>
          <p>Data manipulation & analysis</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">Ar</span>
          <h3>Arduino</h3>
          <p>Microcontrollers & electronics</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">R</span>
          <h3>Robotics</h3>
          <p>Robotic systems & experiments</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">DB</span>
          <h3>SQL & Oracle</h3>
          <p>Database fundamentals</p>
        </div>

        <div class="skill-card">
          <span class="skill-icon">Web</span>
          <h3>Web Development</h3>
          <p>HTML, CSS & JavaScript</p>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section" id="projects">
      <div class="section-heading">
        <span class="section-label">MY WORK</span>
        <h2>Featured Projects</h2>
        <p>A selection of projects I've worked on and explored.</p>
      </div>

      <div class="projects-grid">

        <article class="project-card">
          <div class="project-image">
            <img src="${phishingImg}" alt="Phishing Website Detection project">
          </div>

          <div class="project-content">
            <span class="project-status">Machine Learning</span>
            <h3>Phishing Website Detection</h3>
            <p>
              A machine learning project focused on detecting phishing
              websites through URL analysis and classification.
            </p>
            <div class="project-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Pandas</span>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-image">
            <img src="${smartguardImg}" alt="SmartGuard AI robotics concept">
          </div>

          <div class="project-content">
            <span class="project-status concept">Project Concept</span>
            <h3>SmartGuard AI</h3>
            <p>
              An intelligent robotics concept designed to monitor its
              environment, detect obstacles, and support automated decisions.
            </p>
            <div class="project-tags">
              <span>Python</span>
              <span>AI</span>
              <span>Robotics</span>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-image">
            <img src="${lineFollowerImg}" alt="Line Following Robot">
          </div>

          <div class="project-content">
            <span class="project-status">Robotics</span>
            <h3>Line Following Robot</h3>
            <p>
              An Arduino-based robot designed to follow a predefined
              path using line detection sensors.
            </p>
            <div class="project-tags">
              <span>Arduino</span>
              <span>C++</span>
              <span>Sensors</span>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-image">
            <img src="${bipedImg}" alt="Biped Robot">
          </div>

          <div class="project-content">
            <span class="project-status">Robotics</span>
            <h3>Biped Robot</h3>
            <p>
              A two-legged robot project exploring robotic movement,
              balance, and walking mechanisms.
            </p>
            <div class="project-tags">
              <span>Robotics</span>
              <span>Arduino</span>
              <span>Mechanics</span>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-image">
            <img src="${spiderImg}" alt="Spider Robot">
          </div>

          <div class="project-content">
            <span class="project-status">Robotics</span>
            <h3>Spider Robot</h3>
            <p>
              A multi-legged robotic project inspired by spider movement
              and coordinated leg mechanisms.
            </p>
            <div class="project-tags">
              <span>Arduino</span>
              <span>Robotics</span>
              <span>Motors</span>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-image">
            <img src="${parkingImg}" alt="Smart Parking System prototype">
          </div>

          <div class="project-content">
<span class="project-status">Robotics</span>            <h3>Smart Parking System</h3>
            <p>
              An Arduino-based system designed to detect parking
              space availability using sensors.
            </p>
            <div class="project-tags">
              <span>Arduino</span>
              <span>Sensors</span>
              <span>Embedded Systems</span>
            </div>
          </div>
        </article>

        
<article class="project-card">

  <div class="project-image smart-farm-image">
  <img src="${farmImg}" alt="Smart Farm System">
</div>
  <div class="project-content">

    <span class="project-status planned">Planned</span>

    <h3>Smart Farm System</h3>

    <p>
      A planned smart agriculture project exploring environmental
      monitoring and automated irrigation.
    </p>

    <div class="project-tags">
      <span>Arduino</span>
      <span>IoT</span>
      <span>Automation</span>
    </div>

  </div>

</article>


          

      </div>

      <p class="image-note">Project visuals are AI-generated illustrations.</p>
    </section>

    <!-- EXPERIENCE & EDUCATION -->
    <section class="section experience-section" id="experience">
      <div class="section-heading">
        <span class="section-label">MY JOURNEY</span>
        <h2>Experience & Education</h2>
      </div>

      <div class="timeline">

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">Professional Experience</span>
            <h3>Traffic Control & IT Support</h3>
            <h4>Clear Source Translation</h4>
            <p>
              Supporting daily operations, monitoring connectivity,
              and assisting with technical and operational issues.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">Education</span>
            <h3>AI & Robotics Engineering</h3>
            <h4>University Studies</h4>
            <p>
              Studying artificial intelligence, robotics, programming,
              and engineering fundamentals.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">Technical Studies</span>
            <h3>Database Management</h3>
            <h4>Oracle Database & SQL</h4>
            <p>
              Studied relational database concepts, SQL queries,
              database design, and data management.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- COURSES -->
    <section class="section courses-section" id="courses">
      <div class="section-heading">
        <span class="section-label">KEEP LEARNING</span>
        <h2>Courses & Training</h2>
      </div>

      <div class="courses-grid">

        <div class="course-card">
          <span class="course-number">01</span>
          <h3>Python Programming & Machine Learning</h3>
          <p>The Hope International</p>
        </div>

        <div class="course-card">
          <span class="course-number">02</span>
          <h3>Oracle Database</h3>
          <p>The Hope International</p>
        </div>

        <div class="course-card">
          <span class="course-number">03</span>
          <h3>Python Programming</h3>
          <p>Udemy</p>
        </div>

        <div class="course-card">
          <span class="course-number">04</span>
          <h3>Python Programming</h3>
          <p>Dot Jordan & Shabab 42 Madaba</p>
        </div>

        <div class="course-card">
          <span class="course-number">05</span>
          <h3>Robotics Training</h3>
          <p>Robotics Training Certificate</p>
        </div>

        <div class="course-card">
          <span class="course-number">06</span>
          <h3>Data Analysis with Power BI</h3>
          <p>Vocational Training Corporation – Jordan</p>
        </div>

      </div>
    </section>

    <!-- CONTACT -->
    <section class="section contact-section" id="contact">
      <div class="contact-content">
        <span class="section-label">GET IN TOUCH</span>

        <h2>Have an idea?<br><span>Let's build something.</span></h2>

        <p>
          I'm always interested in learning, collaborating,
          and exploring new opportunities.
        </p>

 <a
  href="https://mail.google.com/mail/?view=cm&to=alkasabreh14@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  class="contact-email"
>
  <span class="email-icon">✉</span>
  <span>
    <small>DROP ME AN EMAIL</small>
    <strong>alkasabreh14@gmail.com</strong>
  </span>
  <span class="email-arrow">↗</span>
</a>
    </section>
  </main>

 
<!-- FOOTER -->
<footer class="footer">
  <a href="#home" class="logo">M<span>.</span></a>

  <p>Designed & built with curiosity.</p>

  <div class="footer-links">
    <a
      href="https://www.linkedin.com/in/mhamd-alkasabreh/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/MhamdAlkasabreh"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>

  <p>© 2026 All rights reserved.</p>
</footer>


    <span class="copyright">
      © ${new Date().getFullYear()} All rights reserved.
    </span>
  </footer>
`

// MOBILE MENU
const menuToggle = document.querySelector('#menuToggle')
const navLinks = document.querySelector('#navLinks')

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show')
  menuToggle.classList.toggle('open')
})

// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show')
    menuToggle.classList.remove('open')
  })
})

// ACTIVE NAVIGATION ON SCROLL
const sections = document.querySelectorAll('main section[id]')
const navItems = document.querySelectorAll('.nav-links a')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        )
      })
    }
  })
}, { threshold: 0.35 })

sections.forEach(section => observer.observe(section))
