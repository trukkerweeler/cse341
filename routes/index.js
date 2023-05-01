const routes = require('express').Router();
const contact = require('./contacts');
const corrective = require('./corrective');

routes.use('/', require('./swagger'));
routes.use('/contacts', contact);
routes.use('/corrective', corrective);
routes.use(
    '/',
    (docData = (req, res) => {
        let docData = {
        documentationURL:"timo github",
    };
    res.send(docData);
})
);

module.exports = routes;
