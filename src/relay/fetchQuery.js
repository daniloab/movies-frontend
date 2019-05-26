
import { RequestNode, Variables } from 'relay-runtime';
import global from '../helpers/Global'

const config = {
    GRAPHQL_URL: `${global.api}`,
}

const fetchQuery = async (request, variables) => {
    const body = JSON.stringify({
        query: request.text,
        variables
    })

    const headers = {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }

    const response = await fetch(`${config.GRAPHQL_URL}`, {
        method: 'POST',
        headers,
        body
    })

    return await response.json()
}

export default fetchQuery