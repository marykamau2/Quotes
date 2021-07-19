// // import { Pipe, PipeTransform } from '@angular/core';

// // @Pipe({
// //   name: 'date'
// // })
// // export class DatePipe implements PipeTransform {

// //   transform(value: unknown, ...args: unknown[]): unknown {
// //     return null;
// //   }

// // }
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'datepast'
// })
// export class DatePipe implements PipeTransform {
//   transform(value: any): any {
//     let uploadtime = value.getTime() // time on list
//     let tdate = new Date().getTime(); // current time
//     let diff = tdate - uploadtime;
//     var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
//     var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);
//     if (diffHrs == 0){
//       return diffMins +' mins ago'
//     }else{
//       return diffHrs +' hr(s) '+ diffMins +' mins ago'
//     }
//   }
// }
