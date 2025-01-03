//external imports (or dependencies)
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require('./routers/loginRouter');
const usersRouter = require('./routers/usersRouter');
const inboxRouter = require('./routers/inboxRouter');
//internal imports
const {
  errorHandler,
  notFoundHandler,
} = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

//database connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.8l4usvv.mongodb.net/chat_application?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('connected to mongodb successfully!');
  } catch (error) {
    console.log(error.message);
  }
};
connectToDatabase();

//middlewares (or request parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//setup view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

//404 not found error handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

//listen to port
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
