import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/api.js';
import { connect } from './utils/db.js';
import { config } from './config/index.js';

const app = express();

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;


app.use(express.static('public'));
app.use(express.json());
app.use('/api', router);


app.use(function(err,req,res,next){
res.status(422).send({error: err.message});
});



const start = async () => {
    try {
      await connect()
      app.listen(config.port || 4000, () => {
        console.log(`REST API on http://localhost:${config.port}/api`)
      })
    } catch (e) {
      console.error(e)
    }
  }

export { start}; 