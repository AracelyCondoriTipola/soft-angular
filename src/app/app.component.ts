import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meme } from './meme';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soft-angular';
  public mmes:Meme[] = [];

  constructor(private http: HttpClient) { }


  onSave():void {
    console.log("Antes de invocar al servicio REST en backent");
    this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(Response=> {
      this.mmes = Response.data.memes;

    });
    console.log("Despues de invocar al servicio REST en backent");

  }
}
