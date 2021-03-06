import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/HomePage";
import { Art } from "./components/ArtPage";
import { Books } from "./components/BooksPage";
import { About } from "./components/AboutMePage";
import { Login } from "./components/Login";
import { ErrorPage } from "./components/ErrorPage";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer/Footer";
import { SingleArt } from "./components/SinglePage/SingleArt";
import { SingleBook } from "./components/SinglePage/SingleBook";

function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/art" component={Art} />
            <Route path="/books" component={Books} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/art/artId" component={SingleArt} />
            <Route path="/books/bookId" component={SingleBook} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </>
  );
}
{/* <Route path="/art/:artid" component={SingleArt} /> */}

export default App;
