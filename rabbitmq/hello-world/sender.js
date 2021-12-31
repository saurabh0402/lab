#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

if (require.main === module) {
  amqp.connect('amqp://localhost', (connErr, connection) => {
    if (connErr) {
      console.log('Unable to connect to RabbitMQ 😢');
      process.exit(1);
    }

    connection.createChannel((channelErr, channel) => {
      if (channelErr) {
        console.log('Unable to create channel 😢');
        process.exit(1);
      }

      const queue = 'hello-world';
      const message = Buffer.from('Hello RabbitMQ');

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, message);
      console.log('✅ Message Sent!');

      setTimeout(() => {
        connection.close();
      }, 1000);
    });
  });
}
