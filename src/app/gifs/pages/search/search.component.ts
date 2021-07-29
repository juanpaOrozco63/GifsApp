import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement> 
  constructor(private gifsService:GifsService ) { } 

  ngOnInit(): void {
  }
  search() {
    const value=this.txtSearch.nativeElement.value    
    this.gifsService.addGifs(value)
    this.txtSearch.nativeElement.value=''
  }
}
