const dynamoose = require('dynamoose');


const friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
});


const peoplesModel = dynamoose.model('peoples', peoplesSchema);


exports.handler = async (event) => {
    console.log('Welcome to the World!', event.body)

    // plan A extract from the body
    let parsedBody = JSON.parse(event.body);
    let { id, name, phone} = parsedBody;

    // plan B if cannot extract from the body
    // let { id, name, phone} = event.queryStringParameters;

    let peoples = {id, name, phone}
    console.log('CONSOLE LOGS-------', peoples);

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
