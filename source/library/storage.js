import "local-json-storage"

const EXPIRATION = 10 * 1000 // in milliseconds

const storage = {}

storage.retrieve = function(key = "state") {
    const value = window.localStorage.getJSON(key)
    if(value === null) {
        return
    }
    if(value.date !== undefined
    && Date.now() - value.date > EXPIRATION) {
        return
    }
    return value
}

storage.submit = function(key, value) {
    value.date = value.date || Date.now()
    window.localStorage.setJSON(key, value)
}

export default storage
