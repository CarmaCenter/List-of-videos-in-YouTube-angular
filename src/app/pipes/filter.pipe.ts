import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(Value: any[], filterString: string): any[] {
    if (!Value || !filterString) {
      return Value;
    }
    return Value.filter((Video) =>
      Video.snippet.title
        .toLocaleLowerCase()
        .includes(filterString.toLocaleLowerCase())
    );
  }
}

// export class FilterPipe implements PipeTransform {
//   transform(value: any, filterString: string) {
//     if (value.length === 0 || filterString === '') {
//       return value;
//     }
//     const videos = [];
//     for (const video of value) {
//       if (video.snippet.title == filterString) {
//         videos.push(video);
//       }
//     }
//     return videos.filter((video) =>
//       video.snippet.title
//         .toLocaleLowerCase()
//         .includes(filterString.toLocaleLowerCase())
//     );
//   }
// }

// filterString.toLocaleLowerCase()
// .match(video.snippet.title.toLocaleLowerCase())
