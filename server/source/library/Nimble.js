const OK_STATUS_CODE = 200
const USER_ERROR_STATUS_CODE = 400
const FATAL_ERROR_STATUS_CODE = 500

const DEFAULT_RESPONSE = {
    "statusCode": OK_STATUS_CODE,
    "headers": {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
    }
}

class UserError extends Error {}

function LambdaHandler(handler) {
    return async function(event) {
        return Promise.resolve().then(() => handler(event)).then((response) => {
            return Object.assign({}, DEFAULT_RESPONSE, {
                "body": JSON.stringify(response)
            })
        }).catch((error) => {
            if(error instanceof UserError) {
                return Object.assign({}, DEFAULT_RESPONSE, {
                    "statusCode": USER_ERROR_STATUS_CODE,
                    "body": JSON.stringify({
                        "message": error.message
                    })
                })
            } else {
                console.log(error, error.stack)
                return Object.assign({}, DEFAULT_RESPONSE, {
                    "statusCode": FATAL_ERROR_STATUS_CODE,
                    "body": JSON.stringify({
                        "message": "Something went wrong!!"
                    })
                })
            }
        })
    }
}

module.exports.LambdaHandler = LambdaHandler
module.exports.UserError = UserError
