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

    const msg = process.argv.slice(2).join(' ') || 'Hello World.';

    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true,
    });

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