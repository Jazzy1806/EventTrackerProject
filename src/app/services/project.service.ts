import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080/';
  private url = this.baseUrl + 'api/projects';

  constructor(private http: HttpClient) { }

  index(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('ProjectService.index(): erorr retrieving projects: ' + err)
        );
      })
    );
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(this.url, project).pipe(
      catchError((err:any) => {
        console.error(err);
        return throwError(
          () => new Error('ProjectService.create(): error creating project: ' + err)
        );
      })
    );
  }

  show(id: number) {
    console.log("Project id: " + id);
    return this.http.get<Project>(this.url + "/" + id).pipe(
      catchError((err:any) => {
        console.error(err);
        return throwError(
          () => new Error('ProjectService.show(): error finding project: ' + err)
        );
      })
    );
  }

  updateProject(project: Project) {
    return this.http.put<Project>(this.url + "/" + project.id, project).pipe(
      catchError((err:any) => {
        console.error(err);
        return throwError(
          () => new Error('ProjectService.update(): error updating project: ' + err)
        );
      })
    );
  }

  destroy(id: number) {
    return this.http.delete(this.url + "/" + id).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(
          () => new Error('ProjectService.delete(): erorr deleting projects: ' + err)
        );
      })
    );
  }
}
