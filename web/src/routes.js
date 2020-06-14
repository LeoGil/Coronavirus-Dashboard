import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Country from './pages/country'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Coronavirus-Dashboard" component={Main} />
            <Route exact path="/Coronavirus-Dashboard/:code" component={Country} />
        </Switch>
    </BrowserRouter>
)

export default Routes
