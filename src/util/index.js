const util = {
    createResponse: data => {
        return {
            statusCode: 201,
            body: JSON.stringify(data)
        };
    },

    successResponse: data => {
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    },

    errorResponse: err => {
        return {
            statusCode: err ? err.statusCode : 500,
            body: JSON.stringify(err)
        };
    }
};

module.exports = util;