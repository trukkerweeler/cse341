const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Swaggy API',
        description: 'Contacts project API',
    },
    host: 'https://web-service-341.onrender.com',
    schemes: ['http'],
};

const outputfile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputfile, endpointsFiles, doc);

// // Run server after generating swagger file
// swaggerAutogen(outputfile, endpointsFiles, doc).then (async () => {
//     await import('./server.js');
// });