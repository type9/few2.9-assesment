# few2.9-assesment
For FEW2.9

` graphql
#List all todos
query Todos{
  Todos{
    name
    completed
    date
    id
  }
}

#Add todo
mutation addTodo{
  addTodo(name:"Complete the final assessment"){
    name
    completed
    date
    id
  }
}

#Display todo
query Todo{
  Todo(id:2){
    name
		completed
    date
  }
}

#Complete Todo
mutation completeTodo{
  completeTodo(id:2){
    name
    completed
  }
}

#List completed Todos
query completedTodos{
  completedTodos{
    name
    completed
    date
  }
}
`