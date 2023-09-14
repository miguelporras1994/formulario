import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../Models/user.model';
import { UserServiceService } from '../Service/user-service.service';
import { Gener } from '../Models/Gener.model';

import Swal from 'sweetalert2';

// import { NgxSpinnerService } from "ngx-spinner";
// import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  public Form: FormGroup
  user: User = new User()


  edit: boolean = false


  ListGenero: Gener[] = [
    { Name: "Hombre" },
    { Name: "Mujer" },
  ];

  favoriteSeason!: string;

  seasons: string[] = ['Leer', 'Caminar', 'Dormir'];


  constructor(
    // private spinner: NgxSpinnerService,
    private ServiceUser: UserServiceService,
    private formBuilder: FormBuilder

  ) {
    this.Form = new FormGroup({
      name: new FormControl('',
        [Validators.required, Validators.minLength(3),

        ]),
      LastName: new FormControl('',
        [Validators.required, Validators.minLength(3),

        ]),
      Id: new FormControl('',
        [Validators.required, Validators.minLength(10),

        ]),

      Genero: new FormControl('',
        [Validators.required

        ]),

      email: new FormControl('',
        [Validators.required,
        Validators.email

        ]),

        old: new FormControl('',
        [Validators.required,
  

        ]),
      hobby :  new FormControl('',
      [Validators.required,


      ]),
   

    })


  }
  ngOnInit() {


  }

  eventForm() {

    this.CreateUser()
  }

ClearUser(){
  this.user  = new User()
  // this.user.nombre = null;
  // this.user.apellido = null
  // this.user.correo = ""
  // this.user.documento = ""
  // this.user.edad = 0
  // this.user.genero = ""
  // this.user.pasatiempo = ""
 
}


  CreateUser() {


    console.log("usuario", this.user)

    this.ServiceUser.saveData(this.user).subscribe(data => {

      if (data) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se guadrdo con exito',
          showConfirmButton: false,
          timer: 1500

        })

        this.ClearUser()
      }
    })
  }



  get name() { return this.Form.get('name'); }
  get LastName() { return this.Form.get('LastName'); }
  get Id() { return this.Form.get('Id'); }
  get Genero() { return this.Form.get('Genero'); }
  get email() { return this.Form.get('email'); }
  get old() { return this.Form.get('old'); }
  get hobby () { return this.Form.get('hobby'); }


}
