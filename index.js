const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App V1 listening on port ${port}!`));
});
