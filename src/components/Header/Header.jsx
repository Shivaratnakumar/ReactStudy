import ReactImg from "../../assets/react-core-concepts.png";
import MainGoal from "../Practice/MainGoal";
import "./Header.css";


const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomIndex(max) {  
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomIndex(reactDescriptions.length - 1)];
    return (
      <header>
          <img src={ReactImg} alt="Stylized atom" />
          <MainGoal />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }