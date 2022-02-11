import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My task list';
  tasklist: string[]  = [];

  // ngOnInit(): void{
  //   if(localStorage.getItem('my_tasks')){
  //    this.tasklist = JSON.parse(localStorage.getItem('my_tasks') || '{}')
  //   }
  // }
}
