const { ApolloServer, gql, PubSub, withFilter } = require('apollo-server');
const pubsub = new PubSub();

const typeDefs = gql`
	type Todo {
		name: String!
		completed: Boolean!
		date: String!
		id: Int!
	}

	type Query {
		Todos: [Todo!]!
		Todo(id: Int!): Todo!
		completedTodos: [Todo!]!
	}

	type Mutation {
		addTodo(name: String!): Todo!
		completeTodo(id: Int!): Todo!
	}
`

const resolvers = {
	Query: {
		Todos: () => {
			return data
		},
		Todo: (_, {id}) => {
			return data[id]
		},
		completedTodos: () => {
			let completed = []
			for(let x = 0; x < data.length; x++){
				if(data[x].completed){
					completed.push(data[x])
				}
			}
			return completed
		}
	},
	Mutation: {
		addTodo: (_, {name}) => {
			const Todo = {name: name, completed: false, date: new Date(), id: data.length}
			data.push(Todo)
			return Todo
		},
		completeTodo: (_, {id}) => {
			data[id].completed = true
			return data[id]
		}
	}
}
const data = [
	{ name: 'Eat Breakfast', completed: false, date: new Date(), id: 0},
	{ name: 'Eat Lunch', completed: true, date: new Date(), id: 1},
]

const server = new ApolloServer({ 
	typeDefs, 
	resolvers 
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});