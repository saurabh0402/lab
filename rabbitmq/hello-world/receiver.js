#!/usr/bin/env node

const amqp = require('amqplib');

async function main() {
  let connection = null;

  try {
    connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'hello-world';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log('Waiting for messages now 🤞');
    channel.consume(queue, (msg) => {
      console.log(`➡️ ${msg.content.toString()}`);
    }, {
      noAck: true,
    });
  } catch(err) {
    connection.close();
    console.error(err);
  }
}

if (require.main === module) {
  main()
    .catch(console.error);
}