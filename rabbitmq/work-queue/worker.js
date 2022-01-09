#!/usr/bin/env node

const amqp = require('amqplib');

async function main() {
  let connection = null;

  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'task-queue';

    channel.assertQueue(queue, {
      durable: true,
    });

    // This makes the worker not accept any task until the previous one is acknowledged.
    channel.prefetch(1);

    channel.consume(queue, function(msg){
      const complexity = msg.content.toString().split('.').length - 1;
      console.log("=> Received message - %s", msg.content.toString());

      setTimeout(() => {
        console.log('[x] Done!');
        channel.ack(msg);
      }, complexity * 1000);
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