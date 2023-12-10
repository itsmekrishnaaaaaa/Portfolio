const express = require('express');
const cors = require('cors');
const sendEmailRouter = require('./routes/send-email');

const app = express();
const port = 8006;

app.use(cors());
app.use(express.json());
app.use('/send-email', sendEmailRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
