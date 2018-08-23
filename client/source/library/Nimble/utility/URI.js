// For representing an HTTP resource.
// https://en.wikipedia.org/wiki/URI

// URI
// Builds a URL from a URI resource path.
// @accepts [string] a fully qualified path, with `{...}` as parameters
// @returns [function] a curried function, that injects parameters over the `{...}`

// @example (using the PokeAPI)
// const POKEMON = new URI("http://pokeapi.co/api/v2/pokemon/{name}")
// let url = POKEMON({"name": "bulbasaur"})
// window.fetch(url)

module.exports = function URI(URL) {
    return function(parameters, queryParameters = undefined) {
        let url = URL
        for(var key in parameters) {
            url = url.replace("{" + key + "}", parameters[key])
        }
        if(queryParameters !== undefined) {
            let queryString = constructQueryString(queryParameters)
            url += "?" + queryString
        }
        return url
    }
}

function constructQueryString(queryParameters) {
    return Object.keys(queryParameters).map((key) => {
        return key + "=" + queryParameters[key]
    }).join("&")
}
