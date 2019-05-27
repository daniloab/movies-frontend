import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

import { Environment } from '../../relay'
import MoviesUpcoming from './MoviesUpcoming'

const MoviesUpcomingQuery = graphql`
    query MoviesUpcomingRefetchQuery($page: Float) {
        moviesUpcoming(page: $page) {
            ...MoviesUpcoming_moviesUpcoming @arguments(page: $page)
        }
    }
`;

class Movies extends Component {
    render() {
        return (
            <div>
                <QueryRenderer
                    environment={Environment}
                    query={MoviesUpcomingQuery}
                    variables={{page: 1}}
                    render={({ error, props }) => {
                        if (error) { return <div>{error}</div> }
                        else if (props) { return <MoviesUpcoming moviesUpcoming={props.moviesUpcoming} /> }
                        return <div>Loading</div>
                    }}
                />
            </div>
        )
    }
}

export default Movies