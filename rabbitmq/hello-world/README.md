# Hello RabbitMQ 🐇
- Before we do anything, let's get the dependencies installed. Run the following command.
  ```bash
  yarn install
  ```
- For running RabbitMQ locally, we can use docker. We can use the following command to run RabbitMQ
  ```bash
  docker run --hostname hello-world --name hello-world -p 5672:5672 rabbitmq:3
  ```
- Run the receiver, it will keep running and waiting for new messages
  ```bash
  node receiver.js

  # OR

  chmod +x receiver.js
  ./receiver.js
  ```
- Run the sender, it will send a message to the queue and then die
  ```bash
  node sender.js

  # OR

  chmod +x sender.js
  ./sender.js
  ```