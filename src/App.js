import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Navbar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Project from "./Components/Gallrery/Project";
import Blog from "./Components/Blog/Blog";
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./common/footer/Footer";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";
import Covid from "./common/CovidInfo/Covid";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/products" exact component={Project}></Route>
          <Route path="/blog" exact component={Blog} />
          <Route path="/blogsingle/:id" component={BlogSingle} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Covid />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
