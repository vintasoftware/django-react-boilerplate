const path = require('path');

module.exports = {
    "extends": "airbnb",
    "rules": {
        "jsx-a11y/": 0,
        "react/jsx-filename-extension": 0
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": path.join(__dirname, '/webpack.local.config.js'),
                "config-index": 1
            }
        }
    }
}
