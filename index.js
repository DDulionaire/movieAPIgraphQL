//const graphqlYoga = require("graphql-yoga")
import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers"


const server = new GraphQLServer({
    typeDefs: __dirname + "/graphql/schema.graphql",
    resolvers,
    playground: true,
    introspection: true
});

server.start(() => console.log("graphQL Server running"));