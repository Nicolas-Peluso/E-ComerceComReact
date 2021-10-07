export const URL = 'https://ranekapi.origamid.dev/'

export function POST_TOKEN(body) {
    return {
        url: URL + 'json/jwt-auth/v1/token',
        options: {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        }
    }
}

export function POST_USER(body) {
    return {
        url: URL + 'json/api/usuario',
        options: {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        }
    }
}

export function GET_SEARCH(query) {
    return {
        url: "https://ranekapi.origamid.dev/json/api/produto?_limit=9&q=" + query,
        options: {
            method: "GET"
        }
    }
}