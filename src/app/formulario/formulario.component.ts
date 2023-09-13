import { Component } from '@angular/core';
import { User } from '../Models/user.model';
import { UserServiceService } from '../Service/user-service.service';
// import { NgxSpinnerService } from "ngx-spinner";
// import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  
  user: User = new User()
  // ListCategory : Category[]   = []

  edit : boolean = false



  constructor(
    // private spinner: NgxSpinnerService,
    private  ServiceUser: UserServiceService
  
   ){


  }
  ngOnInit(): void {
   
    this.getCategory()
   
  }
  
  eventForm(){

    this.CreateProduct()

  }

  CreateProduct(){
    // this.spinner.show();
    console.log("usuario", this.user)
    // /this.productService.Create(this.cProduct).subscribe(data => {
      this.ServiceUser.saveData(this.user)
    // this.spinner.hide();
  }



  editProduct(){
   
    

  }


  getCategory(){

  }

  

}
