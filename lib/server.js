import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/api/v1', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})


const server = app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = server;