const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const port = process.env.MONGO_URI || 'mongodb://localhost:27017/'
    const conn = await mongoose.connect(port, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB