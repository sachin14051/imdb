import { Pipe, PipeTransform, Renderer2 } from '@angular/core';
import { Imovie } from '../models/models';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<Imovie>, search:string):Array<Imovie> {
    if(!value){
      return []
    }

    if(!search){
      return value
    }


     let filterArray = value.filter(ele =>{
      return ele.original_title.toLowerCase().includes(search.toLowerCase())
     })
     return filterArray
  }

 
}
