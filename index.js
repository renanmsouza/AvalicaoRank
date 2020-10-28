const App = require('./src/Server');
const Routes = require('./src/Routes');

const app = App();

Routes(app);

app.listen(3000, () => console.log('port 3000!'));

app.get('/', (req, res) => { res.json({ message: "Hello World!" })});