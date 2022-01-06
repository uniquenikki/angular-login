import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  selected = 'option2';
  selectedFiles:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
}

}
