import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import AddHouse from './Components/AddHouse';
import DeleteHouse from './Components/DeleteHouse';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/inventory' component={ Inventory } />
        <Route path='/addhouse' component={ AddHouse } />
        <Route path='/deletehouse' component={ DeleteHouse } />
    </Switch>
)