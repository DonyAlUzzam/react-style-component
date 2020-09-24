import React, {Component} from 'react';
import GlobalStyles from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import Product from './pages/Products/Product'
import Service from './pages/Services/Services'
import SignUp from './pages/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop'

export default class App extends Component {
  render() {
    return(
        <Router>
            <ScrollToTop />
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/product" component={Product} />
              <Route  path="/services" component={Service} />
              <Route  path="/sign-up" component={SignUp} />
            </Switch>
            <Footer />
            <GlobalStyles />

        </Router>
    )
  }
}