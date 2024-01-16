import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { Task } from '../Models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  id;
  constructor(private router:Router,private ac: ActivatedRoute,private ps:ProjectServiceService) {
    this.id = this.ac.snapshot.params['id'];
  }
  task = new FormGroup({
    title: new FormControl(''),
    dateD: new FormControl(''),
    dateF: new FormControl(''),
    status: new FormControl(''),
    project: new FormControl(''),
  });
  addTask() {
    this.task.value.status = 'To Do';
    this.task.value.project = this.id;

    this.ps.addTask(this.task.value).subscribe({
      next : ()=>this.router.navigate(['/tasks'])
    })
  }
}
