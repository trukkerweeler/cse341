displayJoke = (req, res) => {
    const data = 
    'How did the telephone...give a ring.';
    res.status(200).send(data);
};

module.exports = {
    displayJoke,
};