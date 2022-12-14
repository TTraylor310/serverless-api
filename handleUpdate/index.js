'use strict';
const dynamoose = require('dynamoose');

const peoplesSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
});

const peoplesModel = dynamoose.model('peoples', peoplesSchema);

exports.handler = async (event) => {

  let parsedBody = JSON.parse(event.body);
  let { id, name, phone} = parsedBody;
  let peoples = {id, name, phone}
  const response = {statusCode: null, body: null};

  try {
    let updatedItem = await peoplesModel.update(peoples);
    response.statusCode = 200;
    response.body = JSON.stringify({message: 'success', itemUpdated: updatedItem});

  }catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
  return response;

};