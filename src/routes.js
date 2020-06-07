import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/Coronavirus-Dashboard" component={Main} />
            <Route path="/Coronavirus-Dashboard/products/:id" component={Product} />
        </Switch>
    </HashRouter>
)

export default Routes
