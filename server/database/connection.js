const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Remove the following options as they are deprecated
            // useFindAndModify: false,
            // useCreateIndex: true,
        });

        console.log(`MongoDB connected: ${mongoose.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
