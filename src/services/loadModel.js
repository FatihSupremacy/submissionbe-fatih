const tf = require('@tensorflow/tfjs-node');
const modelLink = 'https://storage.googleapis.com/bucketsubmission-1/model-in-prod/model.json'
const envModelLink = `${process.env.MODEL_URL}`
async function loadModel() {
    return tf.('https://storage.googleapis.com/bucketsubmission-1/model-in-prod/model.json');
}
module.exports = loadModel;
