import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKeys, environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history:string[] =[]
  private url:string='https://api.giphy.com/v1/gifs'
  public result:Gif[]=[]
  constructor(private http:HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.result= JSON.parse(localStorage.getItem('result')!) || []

   }

  get history(){
    return [...this._history]
  }

  addGifs(query:string='', limit:number=10){
    query = query.trim().toLowerCase()
    if(query.trim().length===0){
      return
    }
    if(!this._history.includes(query)){
      this._history.unshift(query)
    }
    this._history = this._history.splice(0,10)
    localStorage.setItem('history',JSON.stringify(this._history)) 
    const params = new HttpParams()
    .set('api_key',apiKeys.gifs)
    .set('q',query)
    .set('limit','10');
    this.http.get<SearchGifsResponse>(`${this.url}/search`,{params})
    .subscribe((resp)=>{
      this.result= resp.data
      localStorage.setItem("result",JSON.stringify(this.result)) 

    }) 
  }
}
