/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MoviesUpcoming_moviesUpcoming$ref: FragmentReference;
declare export opaque type MoviesUpcoming_moviesUpcoming$fragmentType: MoviesUpcoming_moviesUpcoming$ref;
export type MoviesUpcoming_moviesUpcoming = {|
  +title: ?string,
  +overview: ?string,
  +$refType: MoviesUpcoming_moviesUpcoming$ref,
|};
export type MoviesUpcoming_moviesUpcoming$data = MoviesUpcoming_moviesUpcoming;
export type MoviesUpcoming_moviesUpcoming$key = {
  +$data?: MoviesUpcoming_moviesUpcoming$data,
  +$fragmentRefs: MoviesUpcoming_moviesUpcoming$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MoviesUpcoming_moviesUpcoming",
  "type": "Movie",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "page",
      "type": "Float",
      "defaultValue": 1
    }
  ],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7e23939cc3024191d9cb5c73da3b4131';
module.exports = node;
