import { UserService } from 'src/app/core/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  pwdError = false;
  editUserForm: FormGroup;
  editPwdForm: FormGroup;
  userProfile: User;

  UserId = '4edb4ef7-2556-4807-9d2d-9eeadc4f563f';//'79c32cb6-1f46-48bb-b914-6bab936f8cac'; //TODO récup après authentification

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.UserId).subscribe((user: User) => {
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
      currentPwd: ['', [Validators.required]],
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
    const user = {
      username: this.editUserForm.get('username').value,
      lastName: this.editUserForm.get('lastName').value,
      firstName: this.editUserForm.get('firstName').value,
      email: this.editUserForm.get('email').value,
    };
    this.userService.putUser(this.UserId, user).subscribe(
      async (response: any) => {
        this.userProfile = response.body.user;
        this.viewMode = 'view';
      },
      error => {
        console.log(error); //TODO gérer si erreur
      });
  }

  onAbort(): void {
    this.viewMode = 'view';
  }

  onEditPwd(): void {
    this.showPopup = true;
    this.initEditPwdForm();
  }

  onSaveUserPwd(): void {
    const passwords = {
      password: this.editPwdForm.get('currentPwd').value,
      newPassword: this.editPwdForm.get('newPwd').value,
    };
    this.userService.patchUserPwd(this.UserId, passwords).subscribe(
      async (response: any) => {
        document.getElementById('closeModal').click();
        this.onModalClose();
      },
      error => {
        this.pwdError = true;
        console.log(error);
      });
  }

  onModalClose(): void {
    this.pwdError = false;
    this.showPopup = false;
  }

  onPwdField(): void{
    this.pwdError = false;
    this.editPwdForm.get('currentPwd').reset();
  }
}

