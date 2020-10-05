import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLogs'
})
export class FilterLogsPipe implements PipeTransform {

  transform(value: any, sname: string): any {

    if (sname === "") {
      return value;
    }
    const users: Array<any> = [];

    value.forEach(x => {
      let method: string = x.method;
      let status: string = x.status;
      if (method.startsWith(sname) || status.toString().startsWith(sname)) {
        users.push(x);
      }
    });
    return users;
  }

}
