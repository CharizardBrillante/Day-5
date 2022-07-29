import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  todoList!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodo(true);
  }

  restore(id:number){
    this.todoService.flagTodo(id,false).then(()=>{
      this.todoList = this.todoList.filter(t=>t.id != id)
      console.log(this.todoList);
    })
  }

}
