/**
 * @flow
 * @relayHash 3a6d12c93c78430b33097cd019dc8ad6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MoviesUpcoming_moviesUpcoming$ref = any;
export type MoviesUpcomingRefetchQueryVariables = {|
  page?: ?number
|};
export type MoviesUpcomingRefetchQueryResponse = {|
  +moviesUpcoming: ?$ReadOnlyArray<?{|
    +$fragmentRefs: MoviesUpcoming_moviesUpcoming$ref
  |}>
|};
export type MoviesUpcomingRefetchQuery = {|
  variables: MoviesUpcomingRefetchQueryVariables,
  response: MoviesUpcomingRefetchQueryResponse,
|};
*/


/*
query MoviesUpcomingRefetchQuery(
  $page: Float
) {
  moviesUpcoming(page: $page) {
    ...MoviesUpcoming_moviesUpcoming_2Pg8Wv
    id
  }
}

fragment MoviesUpcoming_moviesUpcoming_2Pg8Wv on Movie {
  title
  overview
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Float",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MoviesUpcomingRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "moviesUpcoming",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "MoviesUpcoming_moviesUpcoming",
            "args": (v1/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MoviesUpcomingRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "moviesUpcoming",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "overview",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MoviesUpcomingRefetchQuery",
    "id": null,
    "text": "query MoviesUpcomingRefetchQuery(\n  $page: Float\n) {\n  moviesUpcoming(page: $page) {\n    ...MoviesUpcoming_moviesUpcoming_2Pg8Wv\n    id\n  }\n}\n\nfragment MoviesUpcoming_moviesUpcoming_2Pg8Wv on Movie {\n  title\n  overview\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63ffe925fab85e6d878911a11d7178b3';
module.exports = node;
