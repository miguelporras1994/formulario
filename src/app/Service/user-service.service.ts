import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  localStorageService: any;

  constructor() { }


  saveData( user : User) {
    
  
      localStorage.setItem("user", JSON.stringify(user));
      const myObservable: Observable<number> = new Observable<number>((observer) => {
        observer.next(1);
        observer.complete();
      });
     return myObservable;
  }


//   Create(data : Product){
    
//     return this.Http.post<Product>(this.ApiUrl, data)

// }

}
