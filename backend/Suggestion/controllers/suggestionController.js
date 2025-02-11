const Suggestion = require('../models/suggestionModel');
const { client, MQTT_TOPIC } = require('../config/mqttClient');

const createSuggestion = async (req, res) => {
  const { suggestion } = req.body;
  if (!suggestion) {
    return res.status(400).json({ error: 'Suggestion are required' });
  }

  try {
    const newSuggestion = new Suggestion({ suggestion });
    const result = await newSuggestion.save();
    client.publish(MQTT_TOPIC, JSON.stringify(result), { qos: 1 }, (err) => {
      if (err) {
        console.error('Error publishing message:', err);
      }
    });
    
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.status(200).json(suggestions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSuggestion,
  getSuggestions,
};
