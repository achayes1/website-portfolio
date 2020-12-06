const express = require('express');
const app = express();
const port = 8080;
const path = require('path')
app.use(express.static(path.join(__dirname, '/main')));

app.get('/', (req, res) => {
    res.sendFile('./main/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
