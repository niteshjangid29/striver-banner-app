const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bannerRouter = require('./bannerRouter');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', bannerRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});