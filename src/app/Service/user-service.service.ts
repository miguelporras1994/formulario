import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  localStorageService: any;

  constructor() { }


  saveData( user : User) {
    

      localStorage.setItem("user", JSON.stringify(user));
    
     return true;
  }


//   Create(data : Product){
    
//     return this.Http.post<Product>(this.ApiUrl, data)

// }

}
