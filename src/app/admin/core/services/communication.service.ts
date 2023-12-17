import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private subject: Subject<any>;
  private observable$: Observable<any>;

  constructor() {
    this.subject = new Subject();
    this.observable$ = this.subject.asObservable();
  }

  sendData(data: any) {
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.observable$;
  }
}
