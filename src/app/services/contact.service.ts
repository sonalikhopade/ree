import { Injectable } from '@angular/core';
import { config } from '../../../config';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { from, Observable, Subscriber } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Contact } from './Contact';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private baseUrl = "http://localhost:3000"

  constructor(private httpClient : HttpClient) { }
  get(url: string): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
        let objectUrl: string = null;
        this.httpClient
            .get(url, {
                responseType: 'blob'
            })
            .subscribe(m => {
                objectUrl = URL.createObjectURL(m);
                observer.next(objectUrl);
            });

        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
                objectUrl = null;
            }
        };
    });
}
  onSubmit(formdata: Contact){
    console.log("reached api",formdata);
    try{
      return this.httpClient.post<Contact>(`${this.baseUrl}/sendMail`,formdata );
      // .map(res => {
      //   return res=formdata;
      // })
  }catch(error) {
      this.handleError("unable to get filter value network error : "+JSON.stringify(error));
  }

}


//     try{
      
//       // console.log("data : "+ JSON.stringify(data));
//       console.log("url : "+ `${this.baseUrl}/sendMail`);
//       return  this.httpClient.post(`${this.baseUrl}/sendMail`,{ 
//         firstName: "firstName", email: "email",phoneNo: "phoneNo", lastName : "lastName" })
//         .map(res => {
//           return res.data;
//         })
 
// }catch(error){
//   this.handleError("RegisterValues: "+JSON.stringify(error));
// }
//   }
  
  // enroll(user:User) {
  //   return this.httpClient.post<any>(this.baseUrl,user)
  //   .pipe(catchError(this.errorHandler))
  // }

  errorHandler(error : HttpErrorResponse){
  return throwError(error);
}



// sendEmail(name, email, message) {
//   const uri = 'http://localhost:3000/contact/send';
//   const obj = {
//     name: name,
//     email: email,
//     message: message,
//   };
//   return this.http.post(uri, obj);
// }
addUser (registerUser) {

  return this.http.post(this.apiRoot + "User/add", registerUser, this.httpOptions);
}
}
