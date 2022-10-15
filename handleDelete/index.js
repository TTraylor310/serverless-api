'use strict'
const dynamoose = require('dynamoose');

const peoplesSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const peoplesModel = dynamoose.model('peoples', peoplesSchema);

exports.handler = async (event) => {

  let id = event?.pathParameters?.id;
  const response = { statusCode: null, body: null };
  try {
    let deletedItem = await peoplesModel.delete(id);
    response.statusCode = 200;
    response.body = JSON.stringify({message: 'success', itemDeleted: deletedItem});

  }catch (e){
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};
