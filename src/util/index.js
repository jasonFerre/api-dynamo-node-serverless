const jsConvertCase = require('js-convert-case');

const util = {
    createResponse: data => {
        return {
            statusCode: 201,
            body: JSON.stringify(data)
        };
    },

    successResponse: data => {
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    },

    noContentResponse: () => {
        return { statusCode: 204 }
    },

    errorResponse: err => {
        return {
            statusCode: err ? err.statusCode : 500,
            body: JSON.stringify(err)
        };
    },

    pascalCase: json => {
        return jsConvertCase.pascalKeys(json);
    }
};

module.exports = util;