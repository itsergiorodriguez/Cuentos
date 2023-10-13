import Player from "../../Components/Player/Player";
import Book from "../../Components/Book/Book";
import Style from "./Home.module.css";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
  return (
    <div className={Style.container}>
      <h1 style={{ marginBottom: '10px' }}>Encuentra aquí lo que estás buscando!</h1>
      <h2 style={{ marginTop: '10px' }}>Cuentos de Sabiduría.</h2>
      <div className={Style.playerContainer}>
      </div>
      <Book />
      <Footer/>
    </div>
  );
};

export default Home;

