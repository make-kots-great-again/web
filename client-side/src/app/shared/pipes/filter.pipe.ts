import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sname: string): any {
    if (sname === "") {
      return value;
    }
    const users: Array<any> = [];
    value.forEach(x => {
      let username: string = x.username;
      let email: string = x.email;
      let score: string = x.score.toString();
      let level: string = x.level;
      if (username.startsWith(sname.toLocaleLowerCase()) ||
        email.startsWith(sname.toLocaleLowerCase()) ||
        level.startsWith(sname.toLocaleUpperCase()) ||
        score.startsWith(sname)) {
        users.push(x);
      }
    });
    return users;
  }

}
