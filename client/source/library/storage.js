import "local-json-storage"

const STATE_EXPIRATION = 10 * 1000 // in milliseconds

const storage = {}

storage.retrieve = function() {
    const state = window.localStorage.getJSON("state")
    if(state !== null
    && Date.now() - state.date < STATE_EXPIRATION) {
        return state
    }
}

storage.submit = function(state) {
    state.date = state.date || Date.now()
    window.localStorage.setJSON("state", state)
}

export default storage
