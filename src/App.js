import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { data } from "./helpers/data";

const App = () => {
  //   console.log(data);
  return (
    <div>
      <Navbar />
      <Header />
      <Card data={data} />
    </div>
  );
};

export default App;
