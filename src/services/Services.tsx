import {
  CameraFill,
  CloudFill,
  DatabaseFill,
  PersonBoundingBox,
  Tools,
  WindowStack,
} from "react-bootstrap-icons";
import Footer from "../components/footer/Footer";
import ImageCenter from "../components/image_center/Image_center";
import Navigation from "../components/navigation_bar/navigation";
import "./Services.css";

function Services() {
  return (
    <div>
      <Navigation active_tab="services" />
      <div className="services">
        <ImageCenter border="light-blue" imageName="services.png" />
        <div className="services_tab">
          <div className="backend">
            <DatabaseFill size={27} />
            <p>
              I'm a backend development ninja with expertise in designing and
              building scalable and robust systems. With a deep understanding of
              data structures and algorithms, I create optimized solutions that
              handle large volumes of data with ease. I try to bring efficiency
              and reliability to backend development.
            </p>
          </div>
          <div className="salesforce">
            <CloudFill size={27} />
            <p>
              As a PD-1 certified Salesforce developer, I bring expertise in
              designing and implementing custom solutions that meet the unique
              needs of each client. With a deep understanding of the Salesforce
              platform, I create scalable and effective solutions that drive
              business growth and success.
            </p>
          </div>
          <div className="camera">
            <CameraFill size={27} />
            <p>
              I believe that every picture has a story to tell. With my passion
              for photography, I capture the essence of every moment and bring
              it to life through visual storytelling. Let me help you tell your
              story through stunning and captivating images.
            </p>
          </div>
          <div className="ui">
            <WindowStack size={27} />
            <p>
              I love creating beautiful and responsive user interfaces that
              enhance the user experience. With expertise in HTML, CSS,
              JavaScript, and React, I bring designs to life and create seamless
              interactions that engage and delight users.
            </p>
          </div>
          <div className="cicd">
            <Tools size={27} />
            <p>
              I can help automate routine tasks, minimize errors, and enhance
              productivity using my skills in building CI/CD pipelines and shell
              and Jenkins scripting. Let me optimize your development workflow
              and increase your team's efficiency.
            </p>
          </div>
          <div className="auth">
            <PersonBoundingBox size={27} />
            <p>
              I have experience in designing and implementing secure
              authentication frameworks using OAuth and AWS Lambda. With a deep
              understanding of security protocols, Let me help you enhance your
              security posture and protect your valuable assets.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
