import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import CreateHouse from './Components/CreateHouse';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/inventory' component={ Inventory } />
        <Route path='/createhouse' component={ CreateHouse } />
    </Switch>
)