import { StatusPipe } from './../../pipes/status.pipe';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private projectService: ProjectService, private statusPipe: StatusPipe) { }
    title = 'Project List - Number of Projects: ';
    selected: Project | null = null;
    newProject: Project = {} as Project;
    editProject: Project | null= null;
    showComplete: boolean = false;
    totalProjects: number = 0;
    statuses: string[] = ['One Day', 'In Progress', 'Complete'];
    categories: string[] = ['Around The House', 'Art', 'Automotive', 'Crafts', 'Gardening', 'Professional Development'];
    statusUpdate: boolean = false;
    projects: Project[] = [];


  ngOnInit(): void {
    this.reload();
  }


  numberOfProjects() {
    let filtered: Project[] = [];
    if (!this.showComplete) {
      filtered = this.statusPipe.transform(this.projects, false);
      this.totalProjects = filtered.length;
      return filtered.length;
    }
    this.totalProjects = this.projects.length;
    return this.projects.length;
  }

  colorCode() {
       if (this.totalProjects > 10) return "badge text-bg-danger";
      if (this.totalProjects > 5) return "badge text-bg-warning";
      return "badge text-bg-success";
  }

  displayProject(project: Project) {
    this.selected = project;
  }


  displayTable() {
    this.selected = null;
  }

  reload() {
    this.projectService.index().subscribe(
      {
        next: (results) => {
          this.projects = results;
        },
        error: (problem) => {
          console.error('ProjectsHttpComponent.reload(): error loading projects:');
          console.error(problem);
        }
      }
    );
  }


  addProject() {
    this.projectService.create(this.newProject).subscribe({
      next: (result) => {
        this.selected = Object.assign({}, result);
        this.newProject = {} as Project;
        this.reload();
      },
      error: (nojoy) => {
        console.error('ProjectsHttpComponent.addProject(): error creating projects:' + nojoy);
      },
    });
  }


  setEditProject() {
    this.editProject = Object.assign({},this.selected);
  }


  updateProject(project: Project) {
    console.log(project);
    this.projectService.updateProject(project).subscribe({
      next: (result) => {
        if (!this.statusUpdate) {
          this.selected = Object.assign({}, result);
        }
        this.reload();
        this.editProject = null;
        this.statusUpdate=false;
      },
      error: (nojoy) => {
        console.error('ProjectsHttpComponent.updateProject(): error updating projects:' + nojoy);
      },
    });
  }


  deleteProject(id: number) {
    this.projectService.destroy(id).subscribe(
      {
        next: (results) => {
          console.log(results);
          this.reload();
        },
        error: (problem) => {
          console.error('ProjectsHttpComponent.delete(): error deleting projects:');
          console.error(problem);
        }
      }
    );
  }
}
