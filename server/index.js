const app = require('./appfacts');
const port = 3000

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})
