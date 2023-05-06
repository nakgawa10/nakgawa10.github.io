import Footer from "../components/footer/Footer";
import ImageCenter from "../components/image_center/Image_center";
import Navigation from "../components/navigation_bar/navigation";
import "./About.css";

function About() {
  return (
    <div>
      <Navigation active_tab="about"/>
      <div className="about_me">
       <ImageCenter border="blue" imageName="NakulRed.png"/>
        <div className="about_me_text">
          <h2>About Me !</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
            />
          </svg>
          <p>
            About Me ! Hello! I'm Nakul, a software developer with a passion for
            photography, travel, motorbike rides, books, and sports. When I'm
            not coding, you can often find me exploring new destinations,
            capturing beautiful moments through my camera lens, or diving into a
            good book. I'm also an avid sports enthusiast and love to stay
            active through activities like basketball, soccer, and hiking. I
            discovered my love for software development during my college years,
            and I've been hooked ever since. I'm constantly striving to improve
            my skills and stay up-to-date with the latest technologies in the
            field. I'm a problem solver at heart, and I find great satisfaction
            in using my programming knowledge to create innovative solutions to
            complex challenges. Through this website, I aim to share my
            experiences and insights into my diverse interests and hobbies, as
            well as my journey as a software developer. I'll also be sharing my
            thoughts on software development and some of the projects I'm
            working on. I hope to connect with like-minded individuals and
            foster a community of learning, exploration, and growth. Thank you
            for visiting my website!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
