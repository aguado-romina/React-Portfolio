import logo from "./logo.svg";
import "./App.css";
import "./assets/css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Contact from "./components/contact";
import RecentWork from "./components/work";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div ClassName="App">
        <Header />
      </div>
    );
  }
}

export default App;
