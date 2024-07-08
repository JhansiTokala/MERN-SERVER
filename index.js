const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const userApiFromRouter=require('./routes/userRoutes')
const app = express();
const port = process.env.PORT || 3001;
const url = 'mongodb+srv://tkljhansi56:jansi@cluster0.0jodxew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use('/users', userApiFromRouter);
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB connected');
})
.catch((err) => {
    console.log(err);
});

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app }); // Apply Apollo Server middleware to Express app
    app.listen(port, () => {
        console.log('Server live at http://localhost:${port}${server.graphqlPath}');
    });
}
function Testing(){
    return0;

}
startServer();