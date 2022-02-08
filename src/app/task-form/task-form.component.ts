import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
@Input() tasklist:any;
newTask: any;
  constructor() {
    // this.newTask=String;
   }

  ngOnInit(): void {
  }

  addtodo(){
this.tasklist.unshift(this.newTask);
localStorage.setItem('my_tasks',JSON.stringify(this.tasklist))
this.newTask='';
  }
}
