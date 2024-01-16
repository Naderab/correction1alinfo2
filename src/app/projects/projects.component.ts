import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../Models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  listProjects : Project[] = []
  constructor(private ps: ProjectServiceService) { }
  ngOnInit() {
    this.ps.getAllProjects().subscribe({
      next : (data)=>this.listProjects = data as Project[]
    })
  }
}
