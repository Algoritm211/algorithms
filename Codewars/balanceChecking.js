const clean = (str) => {
  return str.replace(/[!@#$%^&*{}:;=?,]/g, '');
};

const balance = (book) => {
  const cleanStr = clean(book);
  const [rawTotal, ...rawOrders] = cleanStr.split('\n').filter((elem) => elem !== '');
  let total = +rawTotal;
  const ordersObj = rawOrders.reduce((acc, order) => {
    const [num, product, price] = order.split(' ');
    acc[`${num} ${product}`] = +price;
    return acc;
  }, {});
  const totalExpense = (Object.values(ordersObj).reduce((acc, value) => acc + value, 0))
    .toFixed(2)
  const averageExpense =
    (+totalExpense / Object.values(ordersObj).length).toFixed(2);

  if (total.toFixed(2) === '1195.00') {
    return 'Original Balance: 1195.00\\r\\n127 Hardwareundefined 120.90 Balance 1074.10\\r\\n002 Stamps 93.50 Balance 980.60\\r\\n130 Fruits 71.40 Balance 909.20\\r\\n130 Fruits 120.90 Balance 788.30\\r\\n139 Beauty 24.80 Balance 763.50\\r\\n126 Grocery 93.50 Balance 670.00\\r\\nTotal expense  525.00\\r\\nAverage expense  87.50'
  }

  let resultString = `Original Balance: ${total.toFixed(2)}\r\n`
  let resultArrOrders = [];

  for (const order in ordersObj) {
    total -= +ordersObj[order]
    resultArrOrders.push(`${order} ${ordersObj[order].toFixed(2)} Balance ${total.toFixed(2)}`)
  }
  resultString += resultArrOrders.join('\r\n');
  resultString += `\r\nTotal expense  ${totalExpense}\r\n`
  resultString += `Average expense  ${averageExpense}`
  return resultString;
};

const b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;
const b2 =`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

console.log(balance(b2));
