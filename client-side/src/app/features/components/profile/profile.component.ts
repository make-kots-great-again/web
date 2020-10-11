import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  viewMode = 'view';
  showPopup = false;
  editUserForm: FormGroup;
  editPwdForm: FormGroup;
  userProfile: User;


  tempUserId = '79c32cb6-1f46-48bb-b914-6bab936f8cac'; //TODO récup après authentification

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.tempUserId).subscribe((user: User) => {
      this.userProfile = user[0];
      this.initEditUserForm();
      this.initEditPwdForm();
    });
  }

  initEditUserForm(): void {
    this.editUserForm = this.formBuilder.group({
      username: [this.userProfile.username, Validators.required],
      firstName: [this.userProfile.firstName, Validators.required],
      lastName: [this.userProfile.lastName, Validators.required],
      email: [this.userProfile.email, [Validators.required, Validators.email]],
    });
  }

  get usernameControl(): any {return this.editUserForm.get('username'); }
  get firstNameControl(): any {return this.editUserForm.get('firstName'); }
  get lastNameControl(): any {return this.editUserForm.get('lastName'); }
  get emailControl(): any {return this.editUserForm.get('email'); }

  initEditPwdForm(): void {
    this.editPwdForm = this.formBuilder.group({
      currentPwd: ['', [Validators.required, Validators.minLength(8)]],
      newPwd: ['', [Validators.required, Validators.minLength(8)]],
      confNewPwd: ['', [Validators.required, Validators.minLength(8)]],
    },
    {validator: this.passwordConfirming});
  }

  get currentPwdControl(): any {return this.editPwdForm.get('currentPwd'); }
  get newPwdControl(): any {return this.editPwdForm.get('newPwd'); }
  get confNewPwdControl(): any {return this.editPwdForm.get('confNewPwd'); }

  passwordConfirming(cont: AbstractControl): {invalid: boolean} | null {
    return cont.get('newPwd').value === cont.get('confNewPwd').value
       ? null : {invalid: true};
 }

  onEditUserProfile(): void {
    this.initEditUserForm();
    this.viewMode = 'edition';
  }

  onSaveUserProfile(): void {
    this.viewMode = 'view'; //TODO send form + id
  }

  onAbort(): void {
    this.viewMode = 'view';
  }

  onEditPwd(): void {
    this.showPopup = true;
    this.initEditPwdForm();
  }

}

