import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import Men from "./views/Men";
import Women from "./views/Women";
import Kids from "./views/Kids";
import ProductList from "./views/ProductList";
import LogIn from "./views/LogIn";
import Statistic from "./views/Statistic";
import "./scss/navigation.scss"



const App = () => {
  return (
    <div>
      <Router>
        {/* Navigation bar - will always render no matter which route we are using */}
        <Navigation />
        <main>
          <Switch>
            {/* Route 1. Band page */}
            <Route path="/" exact component={Home} />

            {/* Route 2. Lead singer */}
            <Route path="/men" exact component={Men} />

            {/* Route 3. Women */}
            <Route path="/women" exact component={Women} />

            {/* Route 4. Kids */}
            <Route path="/kids" exact component={Kids} />

            {/* Route 5. Products */}
            <Route path="/productList" exact 
            render={ () => {
                            return (
                                 <ProductList key={Math.random()}/>
                            );
                        } }  
                         />

            {/* Route 5. Statistic */}
            {/* <Route path="/statistic" exact component={Statistic} /> */}
            <Route 
                        path="/statistic" 
                        exact 
                        render={ () => {
                            return (
                                 <Statistic />
                            );
                        } }  
                        />

              <Route path="/login" exact component={LogIn} />

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
