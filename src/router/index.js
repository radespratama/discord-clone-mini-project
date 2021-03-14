import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from 'views/Homepage'
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}
