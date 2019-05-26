import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MoviesUpcoming from './features/home/MoviesUpcoming'
import MovieDetails from './features/movie/MovieDetails'

import {
    Container,
    GlobalStyle,
} from './common/layout/index'

import Header from './common/navigation/Header'

const Routes = () => (
    <>
        <GlobalStyle />
        <Header />
        <Container>
            <Switch>
                <Route exact path="/" component={MoviesUpcoming} />
                <Route exact path="/movie/details" component={MovieDetails} />
            </Switch>
        </Container>
    </>
)

export default Routes