import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <p>
        This project was developed as part of my learning journey to improve my skills in web development.
        While working on it, I got to explore many beautiful places across Telangana and learn interesting facts about them.
        I especially enjoyed working on the map integration feature—it made the experience more interactive, even though I faced
        some challenges like slow loading times.
      </p>
      <p>
        Building this website helped me understand not only technical concepts like React and backend integration,
        but also sparked my interest in exploring these tourist destinations in real life.
      </p>
      <p className="signature">— <i>Vidwan Kurva</i></p>
    </div>
  );
}

export default About;
