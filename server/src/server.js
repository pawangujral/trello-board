const {ApolloServer, gql} = require("apollo-server"); 
const { v4: uuidv4 } = require('uuid');

let dummyData = [];

const typeDefs = gql`
    scalar Date
    
    type Tasks {
        id: String!
        title: String
        description: String
        createdDate: Date
        tags: String
        status: String 
    }

    input TaskInput {
        id: String!
    }

    input CreateInput {
        title: String!
        description: String
        tags: String
        status: String 
    }

    input UpdateInput {
        id: String!
        title: String
        description: String
        tags: String
        status: String 
    }

    input DeleteInput {
        id: String
    }

    type Query {
        collection(input: TaskInput): [Tasks]!
    }

    type Mutation {
        createTask(input: CreateInput): [Tasks]!
        updateTask(input: UpdateInput):  [Tasks]!
        deleteTask(input: DeleteInput): [Tasks]!
    } 
`;

const resolvers = {
    Query: { 
        collection(_, {input}) { 
            if(input && input.id) {
                return dummyData.filter(task => task.id === input.id);
            }  
            return dummyData;
        }
    },  
    Mutation: {
        createTask(_, {input}) {
            dummyData = [...dummyData, {...input, id: uuidv4(), createdDate: new Date()} ];
            return [...dummyData]
        },

        updateTask(_, {input}) { 
            dummyData = dummyData.map(item => {
                if(item.id == input.id) {
                    return input
                }

                return item;
            })
            return [...dummyData]
        },

        deleteTask(_, {input}) {
            dummyData = dummyData.filter(task => task.id !== input.id);
            return [...dummyData]
        }

    }

};

const server = new ApolloServer({
    typeDefs,
    resolvers
}); 

server.listen().then(({url}) => {
    console.log(`Server is listen at ${url}`);
});




