const path = require('path');
const util = require(path.resolve('src/util/index'));

const tableName = process.env.COIN_TABLE;

var getBody = ((x) => {
    return util.pascalCase(JSON.parse(x.body));
});

const mapping = {

    coinAddModel: x => {
        //using DataInfo to accept everything
        let { CoinName, CoinOrigin, ...DataInfo } = getBody(x);

        return {
            TableName: tableName,
            Item: {
                CoinName: CoinName,
                CoinOrigin: CoinOrigin,
                DataInfo: DataInfo
            }
        }
    },

    getCoinByKeys: x => {
        let pathParams = x.pathParameters;
        return {
            TableName: tableName,
            Key: {
                CoinName: pathParams.coinName,
                CoinOrigin: pathParams.coinOrigin
            }
        }
    },

    queryCoinByName: x => {
        let pathParams = x.pathParameters;
        return {
            KeyConditionExpression: 'CoinName = :CoinName',
            ExpressionAttributeValues: {
                ':CoinName': pathParams.coinName
            },
            TableName: tableName
        }
    },

    coinUpdateModel: x => {
        let { CoinName, CoinOrigin, CoinValue, Description } = getBody(x);

        return {
            TableName: tableName,
            Key: {
                CoinName: CoinName,
                CoinOrigin: CoinOrigin
            },
            UpdateExpression: 'set DataInfo.CoinValue = :CoinValue, DataInfo.Description = :Description',
            ExpressionAttributeValues: {
                ':CoinValue': CoinValue,
                ':Description': Description
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