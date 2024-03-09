export class TodolistService {
  todoList = ['Proggrammer', 'Zaman', 'Now']

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: 'OK',
      data: this.todoList.map((item, index) => {
        return { id: index, todo: item }
      }),
    })
  }

  // TODO: GET /todolist
  getTodoList(request, response) {
    response.write(this.getJsonTodoList())
    response.end()
  }

  // TODO: POST /todolist
  createTodo(request, response) {
    request.addListener('data', (data) => {
      const body = JSON.parse(data.toString())
      this.todoList.push(body.todo)

      response.write(this.getJsonTodoList())
      response.end()
    })
  }

  // TODO: PUT /todolist
  updateTodo(request, response) {
    request.addListener('data', (data) => {
      const body = JSON.parse(data.toString())
      if (this.todoList[body.id]) this.todoList[body.id] = body.todo

      response.write(this.getJsonTodoList())
      response.end()
    })
  }

  // TODO: DELETE /todolist
  deleteTodo(request, response) {
    request.addListener('data', (data) => {
      const body = JSON.parse(data.toString())
      if (this.todoList[body.id]) {
        this.todoList.splice(body.id, 1)
      }

      response.write(this.getJsonTodoList())
      response.end()
    })
  }
}
