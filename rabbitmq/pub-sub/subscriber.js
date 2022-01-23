const amqp = require('amqplib');

async function main() {
  let connection = null;

  try {
    connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const exchange = 'logs';
    channel.assertExchange(exchange, 'fanout', {
      durable: false,
    });

    const qRes = await channel.assertQueue('', {
      exclusive: true
    });

    channel.bindQueue(qRes.queue, exchange, '');

    channel.consume(qRes.queue, function(msg){
      console.log("=> Received message - %s", msg.content.toString());
    }, {
      noAck: true,
    });
  } catch(err) {
    connection?.close();
    console.error(err);
  }
}

if (require.main === module) {
  main()
    .catch(console.error);
}