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

    const msg = process.argv.slice(2).join(' ') || 'Hello World.';
    channel.publish(exchange, '', Buffer.from(msg));

    setTimeout(() => {
      connection.close();
    }, 1000);
  } catch(err) {
    connection?.close();
    console.error(err);
  }
}

if (require.main === module) {
  main()
    .catch(console.error);
}