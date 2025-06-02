import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string;
  password: string;

  login() {
    // Aquí se debe realizar la lógica de autenticación
    // Puedes enviar una solicitud HTTP al servidor para verificar las credenciales
    // o utilizar una lógica de autenticación local si es necesario
  }
}
