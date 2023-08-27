import { Component, OnInit } from '@angular/core';
import { movieArray } from '../../const/const';
import { Imovie } from '../../models/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
 public backendData  : Array<Imovie>= movieArray
  constructor() { }

  data !:string

  ngOnInit(): void {
  }

}
