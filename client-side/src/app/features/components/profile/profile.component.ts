import {ActivatedRoute} from "@angular/router";
import { UserService } from 'src/app/core/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentification.service';

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

  UserId = this.authenticationService.currentUserValue.userId;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.UserId).subscribe((user: User) => {
      this.userProfile = user[0];
      if (this.userProfile !== undefined){
        this.initEditUserForm();
        this.initEditPwdForm();
      }
    });
  }

  /**
   * Fonction d'initialisation du formulaire de modification des données du profil.
   * Déclaration et mise sous contraintes de chaque champs du formulaire
   */
  initEditUserForm(): void {
    this.editUserForm = this.formBuilder.group({
      username: [this.userProfile.username, Validators.required],
      firstName: [this.userProfile.firstName, Validators.required],
      lastName: [this.userProfile.lastName, Validators.required],
      email: [this.userProfile.email, [Validators.required, Validators.email]],
    });
  }

  /**
   * Ensemble de fonctions permettant de récupérer le contrôleur du champ
   * du formulaire de modification de profil.
   * Utilisé surtout dans le .html afin de vérifier si le champ est valide ou non.
   *
   * @returns : le contrôleur du champ.
   */
  get usernameControl(): any {return this.editUserForm.get('username'); }
  get firstNameControl(): any {return this.editUserForm.get('firstName'); }
  get lastNameControl(): any {return this.editUserForm.get('lastName'); }
  get emailControl(): any {return this.editUserForm.get('email'); }

  /**
   * Fonction d'initialisation du formulaire de modification du mot de passe du profil.
   * Déclaration et mise sous contraintes de chaque champs du formulaire
   */
  initEditPwdForm(): void {
    this.editPwdForm = this.formBuilder.group({
      currentPwd: ['', [Validators.required]],
      newPwd: ['', [Validators.required, Validators.minLength(8)]],
      confNewPwd: ['', [Validators.required, Validators.minLength(8)]],
    },
    {validator: this.passwordConfirming});
  }

  /**
   * Ensemble de fonctions permettant de récupérer le contrôleur du champ
   * du formulaire de modification de mot de passe.
   * Utilisé surtout dans le .html afin de vérifier si le champ est valide ou non.
   *
   * @returns : le contrôleur du champ.
   */
  get currentPwdControl(): any {return this.editPwdForm.get('currentPwd'); }
  get newPwdControl(): any {return this.editPwdForm.get('newPwd'); }
  get confNewPwdControl(): any {return this.editPwdForm.get('confNewPwd'); }

  /**
   * Fonction "validteur" permettant de vérifier si les mots de passes encodé dans les champs
   * "nouveau mot de passe" et "Confirmez nouveau mot de passe" coïncident.
   * 
   * @param cont : le contrôleur du formulaire dont la propriété "invalid" est un boolean
   *               OU null
   * @returns un rien (null) si les mdp sont égaux, la propriété 'invalid' = true si les mdp ne coïncident pas.
   */
  passwordConfirming(cont: AbstractControl): {invalid: boolean} | null {
    return cont.get('newPwd').value === cont.get('confNewPwd').value
       ? null : {invalid: true};
 }

  /**
   * Fonction "eventHandler" appelée lors d'un click sur le bouton "modifier mon profil".
   * Permet de passer en mode "édition" du profil.
   */
  onEditUserProfile(): void {
    this.initEditUserForm();
    this.viewMode = 'edition';
  }

  /**
   * Fonction "eventHandler" appelée lors d'un click sur le bouton "enregistrer"
   * Cette fonction va récupérer les informations encodé dans le formulaire
   * et va les envoyer, par le biais d'un service, à la db.
   *
   * Si tout ce passe bien, on repasse en mode de "consultation" du profil.
   * Si non, un message d'erreur apparaît.
   */
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
        console.log(error); // TODO gérer si erreur
      });
  }

  /**
   * Fonction "eventHandler" appelée lors d'un click sur le bouton "annuler"
   * Permet de repasser en mode "consultation" du profil.
   */
  onAbort(): void {
    this.viewMode = 'view';
  }

  /**
   * Fonction "eventHandler" appelée lors d'un click sur le bouton "modifier mot de passe"
   * Ouvre un popup et initialise son formulaire.
   */
  onEditPwd(): void {
    this.showPopup = true;
    this.initEditPwdForm();
  }

  /**
   * Fonction "eventHandler" appelée lors d'un click sur le bouton "enregistrer"
   * dans le popup de modification de mot de passe.
   * Cette fonction va récupérer les informations encodé dans le formulaire
   * et va les envoyer, par le biais d'un service, à la db.
   *
   * Si tout ce passe bien, le popup est fermé.
   * Si non, un message d'erreur apparaît.
   */
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

  /**
   * Fonction "eventHandler" appelée lors de la fermeture du popup
   * de modification du mot de passe.
   * Permet de s'assurer que certaines variables soient ré-initialisée.
   */
  onModalClose(): void {
    this.pwdError = false;
    this.showPopup = false;
  }

  /**
   * Fonction "eventHandler" appelée lors d'un clique dans le champ
   * "mot de passe" dans le popup de modification du mot de passe.
   * Permet d'effacer le contenu du champ et d'enlever les éventuels erreurs affichées.
   */
  onPwdField(): void{
    this.pwdError = false;
    this.editPwdForm.get('currentPwd').reset();
  }
}
