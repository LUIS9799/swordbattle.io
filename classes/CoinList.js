const db = require('quick.db');
const Coin = require('./Coin');
var coinstable = new db.table('coins')
class CoinList {

    static getCoin(id) {
        return coinstable.get(id)
    }
    static addCoin(coin) {
        coinstable.set(coin.id, coin)
    }
    static addCoins(coins) {
        coins.forEach(coin => {
            this.addCoin(coin)
        });
    }
    static deleteCoin(id) {
        coinstable.delete(id)
    }
    static get coins() {
      var all = coinstable.all()
      var coins = []
      all.forEach((a) => {
        coins.push(Coin.fromJson(a.data))
      })
      return coins
    }
  }
  module.exports = CoinList