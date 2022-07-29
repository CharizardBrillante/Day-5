import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodo(false);
  }

  done(id:number){
    this.todoService.flagTodo(id,true).then(()=>{
      this.todoList = this.todoList.filter(t=>t.id != id)
      console.log(this.todoList);
    })
  }

}
