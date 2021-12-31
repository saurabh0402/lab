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
      
      channel.assertQueue(queue, {
        durable: false,
      });

      console.log('Waiting for messages now 🤞');
      channel.consume(queue, (msg) => {
        console.log(`➡️ ${msg.content.toString()}`);
      }, {
        noAck: true,
      });
    });
  });
}