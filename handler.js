'use strict';

const database = require('./src/infrastructure/aws/dynamo/database');
const coinService = require('./src/services/coin.service');

module.exports.addCoin = async event => {
  let coin = coinService.coinAddModel(event);

  let result = await database.put(coin);
  console.log(result);
  return result;
};

module.exports.getCoinPathParameters = async event => {
  let parameters = coinService.coinGetParamsModel(event);
  console.log(parameters);

  let result = await database.getByParams(parameters);
  return result;
}

module.exports.getCoinByName = async event => {
  let params = coinService.coinGetByNameIndex(event);
  console.log(params);
  let result = await database.query(params);
  return result;
}

