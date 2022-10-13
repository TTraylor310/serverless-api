const dynamoose = require('dynamoose');

// const friendSchema = new dynamoose.Schema({
//     id: String,
//     name: String,
//     phone: String,
// });

// const friendModel = dynamoose.model('friends-demo', friendSchema);

// exports.handler = async (event) => {
    
//     console.log('---------', event.queryStringParameters);
//     const response = {statusCode: null, body: null};

//     try {
//         let friendRecords = await friendModel.scan().exec();
//         response.statusCode = 200;
//         response.body = JSON.stringify(friendRecords);

//     } catch (e) {
//         console.log(e);
//         response.statusCode = 500;
//         response.body = JSON.stringify(e.message);
//     }

//     return response;
// };


exports.handler = async (event) => {
    
  console.log('Testing the Test:', event.queryStringParameters);
  
  const response = {
      statusCode: 200,
      body: JSON.stringify('Check MY STUFFs'),
  };
  return response;
};
