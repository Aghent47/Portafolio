import { Navbar } from "./components/Navbar";
import fondoSVG from "../src/assets/img/fondoPortafolio.svg";

export const App = () => {
 
  return (
    <div className="App" 
    style={{
      backgroundImage: `url(${fondoSVG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '400vh',
    }}
    >
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}
