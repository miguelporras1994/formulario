import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  
  // Método para guardar un valor en el almacenamiento local
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Método para obtener un valor del almacenamiento local
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Método para eliminar un valor del almacenamiento local
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
