import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { User } from '../classes/user';
import { error } from 'util';
import { Contact, RegisterUser } from '../services/Contact';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sucess: boolean;
  name: any;
  [x: string]: any;


submitted = false;
// errorMsg = "";
  model: any = {};
  userModel = new User( );
  errorMsg: any;
  httpClient: any;
  baseUrl: any;
// contactform = new FormGroup( {
//   firstName: new FormControl(''),
//   email : new FormControl(''),
//   phoneNo : new FormControl(''),
//   lastName: new FormControl(''),
  // alternateEmails : this.fb.array([])
// });

  constructor(private contact : ContactService, private _emailService: EmailService) { }

  // contactForm = this.fb.group({
  //   firstName : [''],
  //   email : [''],
  //   phoneNo : [''],
  //   lastName : ['']
  // });



  ngOnInit() {
  }
  
  submit(formdata) {
    console.log("submit clicked",formdata);
    this.submitted = true;
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));

    var result =  this.contact.onSubmit(formdata)
   .subscribe(data => this.model =data,
      error => {
        console.error("Error", error);
      }
    )
  }
  userExists = "";

//   submit() {

//     const newUser : RegisterUser = {  email: this.register.email,
//                                   firstName: this.register.firstName,
//                                   lastName: this.register.lastName,
//                                   phoneNo: this.register.phoneNo}


//     this.registerService.addUser(newUser)
//     .subscribe(response => (this.userExists = response)); //The purpose of this line is to get the body of the text/plain response and assign it into the this.userExists string
// }
  // sendEmail() {
  //   this.sucess = true;
  //   this.snackBar.open('Información enviada exitosamente.', 'x', {
  //     duration: 5000,
  //   });
  //   this.name = this.fullName.value;  
  //     this.http.post('/sendemail', this.cEmail).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  //  submit(formdata: Contact){
     
  //   this.submitted = true;
  //   console.log("submit clicked",formdata);
  //   var result =  this.contact.onSubmit(formdata);  

  // }
//   submit(formdata: Contact){
//     try{
//       return this.contact.onSubmit(`${this.baseUrl}/sendMail`,formdata);
//       // .map(res => {
//       //   return res.data;
//       // })
//   }catch(error) {
//       this.handleError("unable to get filter value network error : "+JSON.stringify(error));
//   }

// }

  // onSubmit(){
  //   console.log("----------------")
  //   this.submitted = true; 

  //   this.contact.enroll(this.userModel).subscribe(
  //     data=> console.log('success!',data),
  //     error => this.errorMsg = error.statusText
  //   )
  // }
  
  //   var register_data ={
  //     userName : this.RegisterForm.controls.firstNameCtrl.value,
  //     Surname: this.RegisterForm.controls.LastNameCtrl.value,
  //     userPassword : this.RegisterForm.controls.passwordCtrl.value,
  //     Gender : this.RegisterForm.controls.genderCtrl.value,
  //     userEmail : this.RegisterForm.controls.emailCtrl.value,
  //     userContactNo : this.RegisterForm.controls.phoneCtrl.value		
  //    }
  //    this.api.register(register_data).subscribe(
  //   (data: any) => {
  //   if(data['status'] == 200){	
  //       console.log(data['message']);
  //     }else if(data['status'] == 400){
      
  //     console.log("error ");
  
  //   }
  
  
  //   });
  
  // }
  // onSubmit(name, email, comment) {
  //   this._emailService.sendEmail({
  //     from: 'Mailgun Sandbox <postmaster@sandboxyourapikeysetXXXXXX.mailgun.org>',
  //     to: email,
  //     name: name,
  //     text: comment,
  //   })
  //   .subscribe(
  //     () => {},
  //     err => console.log(err)
  //   );
  // } 
}