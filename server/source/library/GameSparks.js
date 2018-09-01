// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

const Crypto = require("crypto-js")
const GAMESPARKS_SECRET = require("../config/GAMESPARKS_SECRET.js")

module.exports.getCredentials = async function(nonce, userId) {
    return {
        "nonce": Crypto.enc.Base64.stringify(Crypto.HmacSHA256(nonce, GAMESPARKS_SECRET)),
        "password": Crypto.enc.Base64.stringify(Crypto.HmacSHA256(userId, userId.slice(-5)))
    }
}
