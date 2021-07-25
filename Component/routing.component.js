import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cards from './Cards/Cards.comp';
import Card from './Card/Card.comp';

export const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Cards} />
                <Route path="/:id" component={Card} />
            </Switch>
        </div>
    )
}
