import React, { Component } from 'react';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { createQueryRendererModern } from '../../relay'

class MoviesUpcoming extends Component {

    _loadMore() {
        const refetchVariables = fragmentVariables => ({
            pageNumber: fragmentVariables.pageNumber + 1,
        });
        this.props.relay.refetch(refetchVariables);
    }

    render() {
        const { moviesUpcoming } = this.props

        console.log(moviesUpcoming)
        return <h1>Movies Upcoming</h1>
        // return this.props.moviesUpcoming.map(movie => (
        //     <h1>Title: {movie.title}</h1>
        // ))
    }
}

export default createRefetchContainer(
    MoviesUpcoming,
    graphql`
        fragment MoviesUpcoming_moviesUpcoming on Movie 
        @argumentDefinitions(
           page: {type: "Float", defaultValue: 1}
        ) {
          title
          overview
        }
      `,
);

// export default createQueryRendererModern(RefetchableMoviesUpcomingContainer, MoviesUpcoming, {
//     query: graphql`
//         query MoviesUpcomingRefetchQuery($page: Float) {
//             moviesUpcoming(page: $page) {
//                 ...MoviesUpcoming_moviesUpcoming @arguments(page: $page)
//             }
//         }
//     `,
//     queriesParams: (({ match }) => ({
//         page: match.params.page
//     })),
// })