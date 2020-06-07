import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Coronavirus-Dashboard" component={Main} />
            <Route path="/Coronavirus-Dashboard/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)

export default Routes
