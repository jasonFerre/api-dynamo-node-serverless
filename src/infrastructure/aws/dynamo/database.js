const AWS = require('aws-sdk');
AWS.config.update({ region: 'sa-east-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

var path = require('path');
const util = require(path.resolve('src/util/index'));

const dynamo = {
    put: async params => {
        try {
            await dynamodb.put(params).promise();
            return util.createResponse(params);
        }
        catch (err) {
            console.log('error in add function');
            return util.errorResponse(err);
        }
    },

    get: async params => {
        try {
            let data = await dynamodb.get(params).promise();
            return util.successResponse(data);
        }
        catch (err) {
            console.log('error in getByParams function');
            return util.errorResponse(err);
        }
    },

    query: async params => {
        try {
            let data = await dynamodb.query(params).promise();
            return util.successResponse(data);
        }
        catch (err) {
            console.log('error in query function');
            return util.errorResponse(err);
        }
    },

    update: async params => {
        try {
            let data = await dynamodb.update(params).promise();
            return util.successResponse(data);
        }
        catch (err) {
            console.log('error in update function');
            return util.errorResponse(err);
        }
    },

    delete: async params => {
        try {
            await dynamodb.delete(params).promise();
            return util.noContentResponse();
        }
        catch (err) {
            console.log('error in delete function');
            return util.errorResponse(err);
        }
    }
}

module.exports = dynamo;