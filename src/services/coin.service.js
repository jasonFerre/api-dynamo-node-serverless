const tableName = process.env.COIN_TABLE;

const mapping = {
    coinAddModel: x => {
        let body = JSON.parse(x.body);
        return {
            TableName: tableName,
            Item: {
                CoinName: body.coinName,
                Value: body.value,
                CoinOrigin: body.coinOrigin
            }
        }
    },

    coinGetParamsModel: x => {
        let pathParams = x.pathParameters;
        return {
            TableName: tableName,
            Key: {
                CoinName: pathParams.coinName,
                CoinOrigin: pathParams.coinOrigin
            }
        }
    },

    coinGetByNameIndex: x => {
        let pathParams = x.pathParameters;
        return {
            KeyConditionExpression: 'CoinName = :coinName',
            ExpressionAttributeValues: {
                ':coinName': pathParams.coinName
            },
            TableName: tableName
        }
    },

    coinUpdateModel: x => { //I must change the name of field value, because it's a key name for sdk
        let body = JSON.parse(x.body);

        return {
            TableName: tableName,
            Key: {
                CoinName: body.coinName,
                CoinOrigin: body.coinOrigin
            },
            UpdateExpression: 'set value = :value, description = :description',
            ExpressionAttributeValues: {
                ':value': body.value,
                ':description': body.description
            },
            ReturnValues: 'UPDATED_NEW'
        };
    },

    coinDeleteModel: x => {
        let pathParams = x.pathParameters;
        return {
            TableName: tableName,
            Key: {
                CoinName: pathParams.coinName,
                CoinOrigin: pathParams.coinOrigin
            }
        }
    }
}

module.exports = mapping;