import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthComponent } from '../../auth/auth.component';
import { MyServiceService } from '../../my-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router, private http: MyServiceService){}


  loginuser: FormGroup = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }
  )

  Loginuser(){
    this.http.LoginUser(this.loginuser.value).subscribe({
      next: (reponse:any)=>{
        console.log(reponse);
        if (reponse.success) {
          console.log("Redirection vers la page profil");
          this.router.navigate(['/user',' trouveztout']);
        }
      }
    })
  }

}

