import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Http , Headers , RequestOptions } from '@angular/http';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	 email: string = ''; 
	  password: string = ''; 
	   loginerror: string = ''; 
	//email ='';
	//password = '';
	//loginerror = '';
  constructor(public navCtrl: NavController , public http:Http) {

  }
		home(){
			 this.navCtrl.setRoot(HomePage);
		}

		register()
		{
			 this.navCtrl.push(RegisterPage);
		}


		login(){	

		
		var headers = new 	Headers();
		//headers.append("Accept",'application/json');
		headers.append("content-type",'application/json');

		let options =  new RequestOptions({headers:headers});

		
		let data = {
		email:this.email,
		password:this.password
		}

		console.log(data);

		this.http.post("http://localhost:49919/api/ChefyTricksAPI/userLogin",data,options).subscribe(
		data =>{
		var response = data.json();
			
			if(response.error_code == 0)
			{
				this.navCtrl.setRoot(HomePage);
			}
			else if(response.error_code == 1)
			{
				this.loginerror = response.msg;
			}
			else if(response.error_code == -1)
			{
				this.loginerror = response.msg;
			}
		},error=>{
			console.log("error",error);
		}
		);
		
	}

}
