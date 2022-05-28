import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiConfigService } from '../services/api-config.service';

@Component({
  selector: 'app-change-credentials',
  templateUrl: './change-credentials.component.html',
  styleUrls: ['./change-credentials.component.scss']
})
export class ChangeCredentialsComponent implements OnInit {

  form:FormGroup;
  inputConfirmPassword:FormControl = new FormControl('', Validators.required);

  constructor(
    private _apiConfig:ApiConfigService,
    private _matDialogRef:MatDialogRef<ChangeCredentialsComponent>
  ) { 

    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', Validators.required)
    });

    this.form.addValidators(this.validPassword());
  }

  validPassword():ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>{
      console.log((control as FormGroup).get('confirmPassword')?.value + "  ==  " + (control as FormGroup).get('password')?.value )
      if ( (control as FormGroup).get('confirmPassword')?.value != (control as FormGroup).get('password')?.value){
        return {password: "Las contraseñas no coinciden"}
      }else{
        return null;
      }
    }
  }

  ngOnInit(): void {
  }

  /** Ejecuamos los cambios */
  salve(): void {
    let data = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    this._apiConfig.changeCredentials(data).subscribe({
      next:()=>{
        this._matDialogRef.close();
      }
    })
  }

}
