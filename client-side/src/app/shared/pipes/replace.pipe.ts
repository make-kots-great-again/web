import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any): any {

    if (value === "") {
      return value;
    }

    let s: string = "";

    //let t = value.match(/\(\d+\)/g);
    let tab = value.match(/{.+?}/g);
    let tab1 = value.match(/\[.+?]/g);
    if (tab === null) {
      return value;
    }

    tab.forEach((x, i) => {
      (i === 0) ?
        s = value.replace( tab[0] + tab1[0],
          '(' + (i + 1) + ')' + tab[0] + '___') :
        s = s.replace( tab[i] + tab1[i],
          '(' + (i + 1) + ')' + tab[i] + '___');
    });

    return s;
  }

}
