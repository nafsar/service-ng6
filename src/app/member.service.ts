import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mem } from './mem';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://nafsar.github.io/demo/students.json';
  }

  getValues(): Observable<Mem[]> {
    return this.http.get<Mem[]>(this.url);
  }
}
