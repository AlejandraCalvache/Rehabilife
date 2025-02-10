const mqtt = require('mqtt');

const MQTT_BROKER = 'mqtt://broker.hivemq.com'; 
const MQTT_TOPIC = 'suggestions';

const client = mqtt.connect(MQTT_BROKER);

client.on('connect', () => {
  console.log(`Connected to MQTT broker at ${MQTT_BROKER}`);
});

client.on('error', (err) => {
  console.error('MQTT Connection Error:', err);
});

module.exports = { client, MQTT_TOPIC };
