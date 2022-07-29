import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Todo[] = [];
  private url = 'http://localhost:3000/todo';

  constructor() {
    fetch(this.url).then(res=>res.json()).then((res:Todo[])=>{this.todoList = res;console.log(typeof this.todoList)});
    //Ne abbiamo parlato e abbiamo detto che lo accettiamo così
  }

  getTodo(d:boolean){
    return this.todoList.filter(t=>t.done==d);
  }

  flagTodo(id:number, d:boolean){
    return fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({done:d})
    }).then(()=>{
      this.todoList = this.todoList.map((t)=>{
        if (t.id == id){
          t.done = d;
        }
        return t;
      })
    })
  }
  getTodoById(id:number){
    return this.todoList.filter(t=>t.id==id)[0];
  }
}
