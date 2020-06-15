import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/main'
import Country from './pages/country'

const Routes = () => (
    <BrowserRouter>
            <Route exact path="/Coronavirus-Dashboard" component={Main} />
            <Route exact path="/Coronavirus-Dashboard/:code" component={Country} />
    </BrowserRouter>
)

export default Routes
