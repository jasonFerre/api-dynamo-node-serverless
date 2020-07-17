'use strict';

const database = require('./src/infrastructure/aws/dynamo/database');
const coinService = require('./src/services/coin.service');

module.exports.addCoin = async event => {
  let coin = coinService.coinAddModel(event);

  let result = await database.put(coin);
  return result;
};

module.exports.getCoinByKeys = async event => {
  let parameters = coinService.getCoinByKeys(event);

  let result = await database.get(parameters);
  return result;
}

module.exports.queryCoinByName = async event => {
  let params = coinService.queryCoinByName(event);

  let result = await database.query(params);
  return result;
}

module.exports.updateCoin = async event => {
  let params = coinService.coinUpdateModel(event);

  let result = await database.update(params);
  return result;
}

module.exports.deleteCoin = async event => {
  let params = coinService.coinDeleteModel(event);

  let result = await database.delete(params);
  return result;
}

