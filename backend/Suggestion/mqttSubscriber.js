const { client, MQTT_TOPIC } = require('./config/mqttClient');

client.on('message', (topic, message) => {
  if (topic === MQTT_TOPIC) {
    console.log(`Received new suggestion: ${message.toString()}`);
  }
});


client.subscribe(MQTT_TOPIC, { qos: 1 }, (err) => {
  if (!err) {
    console.log(`Subscribed to MQTT topic: ${MQTT_TOPIC}`);
  } else {
    console.error('Subscription error:', err);
  }
});
