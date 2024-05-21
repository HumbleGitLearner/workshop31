import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { nonWhiteSpace } from '../../custom-validators';
import { Inventory } from '../../model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  itemForm!: FormGroup;
  item!: Inventory
  @Output() onSubmit= new Subject<Inventory>();
  selectedFileName: string = '';
  

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.itemForm= this.fb.group({
      id:this.fb.control(null, [Validators.required, Validators.min(1)]),
      name: this.fb.control<string>('', [Validators.required,nonWhiteSpace]),
      // requires .jpg|jpeg|png files that matches Windows file paths 
      photo: this.fb.control<string>('', [Validators.required
          ,Validators.pattern(/\.(jpg|jpeg|png)$/i)])
//        Validators.pattern(/^[a-zA-Z]:\\(?:[\w-]+\\)*[\w-]+\.(jpg|jpeg|png)$/i)])
    })
  }

  submit() {
    if (this.itemForm.valid) {
      // const newItem: Inventory = this.itemForm.value;
      const newItem=this.itemForm.value as Inventory;
      this.onSubmit.next(newItem);
      console.log('Form Submitted', newItem);
    } else {
      console.log('Form is invalid');
    }
  }

  onFileChange(event: any) {
    const SOME_CONSTANT="/assets/fruits/";
    const file = event.target.files[0];
      if (file) {//acorn_squash.png
      this.selectedFileName = `${SOME_CONSTANT}${file.name}`;
      this.itemForm.patchValue({ photo: this.selectedFileName });
    }
  }
}
  // ngOnInit() {
  //   this.itemForm = this.fb.group({
  //     id: ['', [Validators.required, Validators.min(1)]],
  //     name: ['', Validators.required],
  //     photo: ['', Validators.required]
  //   });
  // }



