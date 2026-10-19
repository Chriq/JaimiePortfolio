
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';

const SERVICE_ID: string = 'service_mlm8jye';
const TEMPLATE_ID: string = 'template_hynwvul';
const PUBLIC_KEY: string = 'kgaEzzZfej8wPIHoS';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

    contactForm: FormGroup;

    sending = false;
    sent = false;
    error: string | null = null;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            company: [''],
            title: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.contactForm.invalid) return;

        this.sending = true;
        this.error = null;

        const templateParams = {
            name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
            email: this.contactForm.value.email,
            time: new Date(),
            company: this.contactForm.value.company,
            title: this.contactForm.value.title,
            message: this.contactForm.value.message
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                this.sending = false;
                this.sent = true;
                this.contactForm.reset();
            }, (err) => {
                this.sending = false;
                this.error = 'Failed to send message. Please contact me at sebastiangsegura@gmail.com.';
                console.error('EmailJS Error:', err);
            });
    }
}
