'use strict';
const dynamoose = require('dynamoose');

const peoplesSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
});

const peoplesModel = dynamoose.model('peoples', peoplesSchema);

exports.handler = async (event) => {
    // console.log('', event.body)

    let parsedBody = JSON.parse(event.body);
    let { id, name, phone} = parsedBody;
    let peoples = {id, name, phone}
    
    const response = {statusCode: null, body: null};

    try {
        let newPerson = await peoplesModel.create(peoples);
        response.statusCode = 200;
        response.body = JSON.stringify(newPerson);

    } catch (e) {
        console.log(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }


    return response;
};
