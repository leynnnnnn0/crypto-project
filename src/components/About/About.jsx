import "./About.css"
import logo from "../../images/gecko.png"

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1>About</h1>
        <p>
          You have the opportunity to engage in paper trading on this compact
          cryptocurrency platform, where you can also access information about
          trending coins and NFTs. It is important to note that the API
          currently in use may exhibit some bugs. Consequently, despite
          obtaining search results for certain cryptocurrencies, the system may
          erroneously indicate a "no result found" status. I am actively
          addressing and working to resolve this issue.
        </p>
      </div>
      <div className="powered-by">
        <p>Powered by: </p>
        <img src={logo} alt="gecko logo" />
      </div>
    </div>
  );
}

export default About