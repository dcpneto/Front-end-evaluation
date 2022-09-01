const clients = require('./clients.json');
const transactions = require('./transactions.json');

module.exports = () => ({
  clients: clients,
  transactions: transactions
});