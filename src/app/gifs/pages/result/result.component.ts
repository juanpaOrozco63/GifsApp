import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  get result(){
    return this.gifsService.result
  }
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

}
