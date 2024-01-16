import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './Models/task';
import { AnimationPlayer } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http:HttpClient) { }

  getAllProjects() {
    return this.http.get('http://localhost:3000/projects')
  }

  addTask(task: any) {
    return this.http.post('http://localhost:3000/tasks',task);
  }
}
