import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(projects: Project[], showAll: boolean): Project[] {
    if (showAll) {
      return projects;
    }
    else {
    let results: Project[] = [];
    for (let t of projects) {
      if (t.status !== "Complete") {
        results.push(t);
      }
    }
    return results;
  }
}

}
