import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoList!: Todo[];
  todo:string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodo(false);
  }
  addTodo(todo:string){
    let data = {
      id:this.todoList.length,
      title: todo,
      done:false
    }
    return fetch('http://localhost:3000/todo',
    {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }


}
