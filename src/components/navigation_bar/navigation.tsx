import "./navigation.css";

function Navigation(props: { active_tab: string; }) {
  return (
    <div className="nav">
      <div className="logo">
        <a className="hexagon" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-hexagon-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
            />
          </svg>
        </a>
        <a href="/" className="name">
          Nakul Gawande
        </a>
        <a href="/" className="title">
          Senior Software Engineer
        </a>
      </div>
      <div className="navbar">
        <div
          className={
            "about" === props.active_tab ? "navbar-button active" : "navbar-button"
          }
        >
          <a href="/about">About</a>
        </div>
        <div
          className={
            "resume" === props.active_tab ? "navbar-button active" : "navbar-button"
          }
        >
          <a href="/resume">Resume</a>
        </div>
        <div
          className={
            "services" === props.active_tab ? "navbar-button active" : "navbar-button"
          }
        >
          <a href="/services">Services</a>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
