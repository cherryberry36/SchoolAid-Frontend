import './App.css';
import Navbar from "./component/Navbar";
import Landing from './component/Landing';
import Footer from "./component/Footer";
import Login from "./component/Login"
import Signup from "./component/Signup"
import About from "./component/About"
import Postreview from "./component/Postreview";
import Addschool from './component/Addschool';
import Reviewpage from "./component/Reviewpage";
import {BrowserRouter as Router, Route,Switch,} from "react-router-dom";



function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Landing}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/about" exact component={About}/>
          <Route path="/postreview" exact component={Postreview}/>
          <Route path="/addschool" exact component={Addschool}/>
          <Route path="/reviewpage" exact component={Reviewpage}/>
          <Footer />
        </div>
      </Switch>
    </Router>  

  );
}

export default App;
