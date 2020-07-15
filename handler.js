'use strict';

const database = require('./src/infrastructure/aws/dynamo/database');
const coinService = require('./src/services/coin.service');

module.exports.addCoin = async event => {
  let coin = coinService.coinAddModel(event);

  let result = await database.put(coin);
  return result;
};

module.exports.getCoinPathParameters = async event => {
  let parameters = coinService.coinGetParamsModel(event);

  let result = await database.getByParams(parameters);
  return result;
}

module.exports.getCoinByName = async event => {
  let params = coinService.coinGetByNameIndex(event);

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

