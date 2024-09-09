const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let users = [];

// /api/data endpointini yaratish
app.get('/api/data', (req, res) => {
    res.json(users);
});

app.post('/api/data', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
