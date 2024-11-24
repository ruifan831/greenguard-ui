import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  emailUrl: string = 'https://formsubmit.co/ruifan831@gmail.com';
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      email: [],
      message: [],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formElement = document.getElementById(
        'dynamicForm'
      ) as HTMLFormElement;

      // Clear existing form data (if needed)
      while (formElement.firstChild) {
        formElement.removeChild(formElement.firstChild);
      }

      // Add form fields dynamically
      for (const [key, value] of Object.entries(this.form.value)) {
        const input = document.createElement('input');
        input.type = 'hidden'; // Use hidden inputs to avoid displaying fields
        input.name = key;
        input.value = value as string;
        formElement.appendChild(input);
      }

      emailjs
        .sendForm(
          'service_gwsnmmd',
          'template_jp3gq9e',
          formElement,
          {
            publicKey: 'UYjFgkAdxIK2b6sBJ',
          }
        )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log(error);
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          }
        );
    }
  }
}
