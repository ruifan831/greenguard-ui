import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  emailUrl:string="https://formsubmit.co/ruifan831@gmail.com";
  constructor(private fb:FormBuilder,private http: HttpClient){}
  ngOnInit(): void {
    this.form = this.fb.group({
      name:[],
      email:[],
      message:[]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.emailUrl, formData, { headers })
        .subscribe({
          next: (response) => {
            console.log('Success:', response);
          },
          error: (error) => {
            console.error('Error:', error);
          }
        });
    }
  }

}
