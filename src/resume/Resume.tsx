import Footer from "../components/footer/Footer";
import ImageCenter from "../components/image_center/Image_center";
import Navigation from "../components/navigation_bar/navigation";
import "./Resume.css";

function Resume() {
  return (
    <div>
      <Navigation active_tab="resume" />
      <div className="resume-container">
        <ImageCenter border="green" imageName="nakul-laptop.png" />
        <div className="timeline">
          <div id="vit" className="resume-item">
            <h3>B.Tech Computer Science</h3>
            <h2> 2011 - 2015</h2>
            <p>
              I was a curious student in college eager to explore the world and
              discover my passion, now armed with knowledge and experience, I'm
              ready to make a meaningful impact in the industry.
            </p>
          </div>
          <div id="sigma-software" className="resume-item">
            <h3>Associate Software Engineer</h3>
            <h2> 2015 - 2017</h2>
            <p>
              As a fresh graduate with a passion for learning, I started my
              journey in Sigma OSS Systems, determined to make a positive impact
              and continuously grow my skills and knowledge.
            </p>
          </div>
          <div className="resume-item" id="hansen-cx-dev">
            <h3>Senior Software Developer</h3>
            <h2> 2017 - 2021</h2>
            <p>
              As a senior software developer with years of experience, I've
              consistently pushed myself to stay up-to-date with the latest
              technology trends and industry standards, while honing my skills
              to deliver high-quality software products.
            </p>
          </div>
          <div className="resume-item" id="hansen-cx-lead">
            <h3>Lead Software Developer</h3>
            <h2> 2021 - 2022</h2>
            <p>
              Started as a developer, grew as a leader - passionate about
              driving teams to achieve their best and delivering high-quality
              products.
            </p>
          </div>
          <div className="resume-item" id="tech9">
            <h3>Senior Software Engineer</h3>
            <h2> 2022 - Present</h2>
            <p>
              I'm a seasoned Senior Lead with a passion for driving innovation
              and delivering results. With extensive experience in leading
              cross-functional teams, I excel at aligning business objectives
              with technology solutions to drive growth and exceed customer
              expectations.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills__skill">SQL</div>
          <div className="skills__skill">GIT</div>
          <div className="skills__skill">Java</div>
          <div className="skills__skill">React</div>
          <div className="skills__skill">OAuth</div>
          <div className="skills__skill">NodeJS</div>
          <div className="skills__skill">Python</div>
          <div className="skills__skill">Github</div>
          <div className="skills__skill">MongoDB</div>
          <div className="skills__skill">Express</div>
          <div className="skills__skill">Terminal</div>
          <div className="skills__skill">JavaScript</div>
          <div className="skills__skill">TypeScript</div>
          <div className="skills__skill">SalesForce</div>
          <div className="skills__skill">Photography</div>
          <div className="skills__skill">Shell Scripting</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
