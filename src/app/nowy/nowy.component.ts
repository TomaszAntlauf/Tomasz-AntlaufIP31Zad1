import { Component, OnInit } from '@angular/core';
import { PotworyServerService } from '../potwory-server.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IPotwory } from '../ipotwory';

export interface IMG {
  nazwa: string;
}

@Component({
  selector: 'nowy-form',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})
export class NowyComponent implements OnInit {
  public stateCtrl = new FormControl();
  public filteredStates: Observable<IMG[]>;

  public newForm: FormGroup;

  img: IMG[] = [
    {
      nazwa: 'assets/bazy.png',
    },
    {
      nazwa: 'assets/krabo.png',
    },
    {
      nazwa: 'assets/leszy.png',
    },
    {
      nazwa: 'assets/troll.png',
    },
    {
      nazwa: 'assets/widlo.png',
    }
  ];

  constructor(fb: FormBuilder, private PotworyService: PotworyServerService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.img.slice())
      );
      this.newForm = fb.group({
        id: new FormControl(null, [Validators.required]),
        nazwa: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        img: new FormControl(null, [Validators.required]),
        opis: new FormControl(null, [Validators.required]),
      });
  }

  private _filterStates(value: string): IMG[] {
    const filterValue = value.toLowerCase();

    return this.img.filter(img => img.nazwa.toLowerCase().indexOf(filterValue) === 0);
  }

  public test() {
    let newPotwor = this.newForm.value as IPotwory;
    console.log(newPotwor);
  }

  public onSubmit() {
    console.log(this.newForm.value);
    let newPotwor = this.newForm.value as IPotwory;
    newPotwor.id = +newPotwor.id;

    console.log(newPotwor);
    this.PotworyService.postPotwory(newPotwor).subscribe(result => console.log(result));
  }

   ngOnInit(): void {
  }
  
  getErrorMessage() {
    return 'Error';
  }
}