#!/usr/bin/env node

const amqp = require('amqplib');

async function main() {
  let connection = null;
  try {
    connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'hello-world';
    const message = Buffer.from('Hello RabbitMQ');

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, message);
    console.log('✅ Message Sent!');

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
