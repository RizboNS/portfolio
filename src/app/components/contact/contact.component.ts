import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  msgForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  sendMsgToService() {
    this.contactService.sendMsg(this.msgForm.value).subscribe((res) => {
      console.log(res);
    });
  }
  initForm() {
    this.msgForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      msg: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
}
