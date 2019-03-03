import "local-json-storage"

const EXPIRATION = 10 * 1000 // in milliseconds

const storage = {}

storage.retrieve = function(key = "state") {
    const payload = window.localStorage.getJSON(key)
    if(payload === null) {
        return
    }
    if(payload.expirationDate !== undefined
    && payload.expirationDate < Date.now()) {
        return
    }
    return payload.value
}

storage.submit = function(key, value, expiration = EXPIRATION) {
    window.localStorage.setJSON(key, {
        "key": key,
        "value": value,
        "creationDate": Date.now(),
        "expirationDate": Date.now() + expiration
    })
}

export default storage
