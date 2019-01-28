{
    "name": "learnnig-babel",
        "version": "1.0.0",
            "description": "Use Babel to trnaspile JavaScript ES6 to ES5",
                "main": "index.js",
                    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
            "build": "babel src -d lib"
    },
    "author": "",
        "license": "MIT",
            "devDependencies": {
        "babel-cli": "^6.26.0",
            "babel-preset-env": "^1.7.0"
    }
}


//Learnd how to specify babel to transpile when we run the npm build command by editing the package.json file.