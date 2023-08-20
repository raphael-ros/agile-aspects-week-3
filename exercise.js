main();

function main() {
  const transactions = [
    createTransaction('t1', 'PAYMENT', 'OPEN', 'CREDIT_CARD', '23.99'),
    createTransaction('t2', 'PAYMENT', 'OPEN', 'PAYPAL', '100.43'),
    createTransaction('t3', 'REFUND', 'OPEN', 'CREDIT_CARD', '10.99'),
    createTransaction('t4', 'PAYMENT', 'CLOSED', 'PLAN', '15.99'),
  ];
  
  processTransactions(transactions);
}

function createTransaction(id, type, status, method, amount) {
  return {id, type, status, method, amount};
}

function isValidTransaction(transaction){
  const validTypes = ['PAYMENT', 'REFUND'];
  const validStatus = ['OPEN', 'CLOSED'];
  const validMethods = ['CREDIT_CARD', 'PAYPAL', 'PLAN'];

  return (
    //includes = verifica se o valor passado está dentro de cada lista dos const valid.
    validTypes.includes(transaction.type), 
    validStatus.includes(transaction.status),
    validMethods.includes(transaction.method)
  )
}


function processTransactions(transactions) {
  if (!transactions || !transactions.length > 0) {
   return console.log('No transactions provided!');
  }

  for (const transaction of transactions) {
    if (isValidTransction(transaction)) {
      processTransaction(transaction);
    }

    else {
      console.log('Invalid transaction type!', transaction);
    }
  }
}

function processTransactionMensage(transaction) {
  const methodTransaction = transaction.method.toLowerCase();
    if(methodTransaction = "PAYPAL"){
      methodTransaction = transaction.method.capitalize()
    }
  const typeTransaction = transaction.type.toLowerCase();
  const amountTransaction = transaction.amount;

  console.log(`Processing ${methodTransaction} ${typeTransaction} for amount: ${amountTransaction}`);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}
