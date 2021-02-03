#! /usr/bin/env node

// Codeglue v1.9.x-forked

// Usage:
// codeglue --stage=PRODUCTION
// codeglue --stage=DEVELOPMENT --mode=SERVER
// codeglue --stage=PRODUCTION --mode=DEPLOY

const path = require("path")
const yargs = require("yargs")
const chalk = require("chalk")
const rimraf = require("rimraf")
const ip = require("internal-ip")
const webpack = require("webpack")
const filesize = require("filesize")
const githubpages = require("gh-pages")
const dateformat = require("dateformat")
const browsersync = require("browser-sync")

const WebpackDefinePlugin = webpack.DefinePlugin
const WebpackHtmlPlugin = require("html-webpack-plugin")
const WebpackCopyPlugin = require("copy-webpack-plugin")
const WebpackStatsPlugin = require("stats-webpack-plugin")
const WebpackProgressBarPlugin = require("progress-bar-webpack-plugin")

const PACKAGE = require(path.join(process.cwd(), "./package.json"))

const NAME = PACKAGE.name || "!!!"
const VERSION = PACKAGE.version || "0.0.0"

const MODE = (yargs.argv.mode || process.env.MODE || "BUILD").toUpperCase()
const STAGE = (yargs.argv.stage || process.env.STAGE || "DEVELOPMENT").toUpperCase()
const SLUG = yargs.argv.slug || "v" + VERSION

const PORT = yargs.argv.port || process.env.PORT ||  8080
const SSL = yargs.argv.ssl || process.env.SSL || false

let LOCAL_ADDRESS = "127.0.0.1"
let INTERNAL_ADDRESS = "0.0.0.0"
let PROTOCOL = SSL ? "https" : "http"
ip.v4().then((address) => {
    INTERNAL_ADDRESS = address
})

const build = new Object()

rimraf("./builds/web", () => {
    webpack({
        "entry": {
            "index.js": "./source/index.js",
        },
        "output": {
            "filename": "[name]",
            "path": path.resolve("./builds/web"),
        },
        "resolve": {
            "modules": [
                path.resolve("./source"),
                "node_modules"
            ]
        },
        "module": {
            "rules": [
                {
                    "loader": "eslint-loader",
                    "test": new RegExp("\.js$", "i"),
                    "exclude": new RegExp("node_modules"),
                    "enforce": "pre"
                },
                {
                    "loader": "babel-loader",
                    "test": new RegExp("\.js$", "i"),
                    "exclude": new RegExp("node_modules"),
                },
                {
                    "loaders": ["style-loader", "css-loader", "less-loader"],
                    "test": new RegExp("\.(css|less)$", "i"),
                },
                {
                    "loader": "file-loader",
                    "test": new RegExp("\.(png|jpe?g|gif|svg)$", "i"),
                },
                {
                    "loader": "file-loader",
                    "test": new RegExp("\.(ttf|woff2?|eot)$", "i"),
                },
                {
                    "loader": "file-loader",
                    "test": new RegExp("\.(mp3|wav|ogg)$", "i"),
                },
                {
                    "loader": "xml-loader",
                    "test": new RegExp("\.xml$", "i"),
                },
                {
                    "loader": "csv-loader",
                    "test": new RegExp("\.csv$", "i"),
                },
                {
                    "loader": "html-loader",
                    "test": new RegExp("\.html$", "i"),
                },
                {
                    "loaders": ["file-loader", "app-manifest-loader"],
                    "test": new RegExp("manifest.json", "i"),
                    "type": "javascript/auto",
                },
                {
                    "loaders": "ts-shader-loader",
                    "test": new RegExp("\.glsl$", "i"),
                },
            ],
        },
        "plugins": [
            // new WebpackHtmlPlugin({
            //     "template": "source/index.html"
            // }),
            new WebpackCopyPlugin([
                {"from": "source/index.html"},
            ]),
            new WebpackProgressBarPlugin({
                "width": "00000000".length,
                "complete": chalk.green(new String("O")),
                "incomplete": chalk.red(new String("0")),
                "format": "[:bar] Building (:elapseds)",
                "customSummary": new Function(),
                "summary": false,
            }),
            new WebpackDefinePlugin({
                __NAME__: JSON.stringify(NAME),
                __VERSION__: JSON.stringify(VERSION),
                __STAGE__: JSON.stringify(STAGE),
            }),
            new WebpackStatsPlugin("stats.json"),
        ],
        "mode": STAGE.toLowerCase(), // stage == mode??
        "devtool": "source-map",
        "watch": MODE == "SERVER"
    }, (error, stats) => {
        abort(error)

        stats = stats.toJson()

        const time = stats.time / 1000 + "s"
        const size = filesize(stats.assets.reduce((size, asset) => {
            return size + asset.size
        }, 0), {spacer: ""})

        print("Building (" + time + ")(" + size + ")")

        stats.errors.forEach((error) => console.log(error.toString()))
        stats.warnings.forEach((warning) => console.log(warning.toString()))

        if(MODE == "SERVER") {
            if(build.server == null) {
                build.server = browsersync({
                    "server": "./builds/web",
                    "logLevel": "silent",
                    "ghostMode": false,
                    "notify": false,
                    "minify": false,
                    "port": PORT,
                    "https": SSL && {
                        "key": require.resolve("./localhost.key"),
                        "cert": require.resolve("./localhost.crt")
                    }
                })

                print("Listening on " + chalk.underline(PROTOCOL + "://" + LOCAL_ADDRESS + ":" + PORT))
                print("Listening on " + chalk.underline(PROTOCOL + "://" + INTERNAL_ADDRESS + ":" + PORT))
            } else if(build.server != null) {
                build.server.reload()
            }
        }
    })
})

function print(message) {
    var time = dateformat(new Date(), "HH:MM:ss")
    console.log("[" + chalk.green(time) + "]", message)
}

function abort(error) {
    if(error != undefined) {
        console.log(error)
        throw -1
    }
}
