import React from "react";
import githubLogo from "../../assets/images/Github-logo.jpg";
import linkedInLogo from "../../assets/images/LinkedIn-logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/DonNavinS">
        <img src={githubLogo} alt="Github" height="100px" width="170px" />
      </a>
      <a href="https://www.linkedin.com/in/don-navin-seneviratna/">
        <img src={linkedInLogo} alt="LinkedIn" height="100px" width="100px" />
      </a>
      <a href="https://github.com/DonNavinS">
        <img src={githubLogo} alt="github" height="100px" width="170px" />
      </a>
    </div>
  );
}

export default Footer;
