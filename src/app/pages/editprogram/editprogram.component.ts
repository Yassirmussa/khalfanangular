import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../service/program.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprogram',
  templateUrl: './editprogram.component.html',
  styleUrl: './editprogram.component.scss'
})
export class EditprogramComponent implements OnInit {

  editProgram!: FormGroup

  constructor(private activatedRoot: ActivatedRoute,
    private programService: ProgramService
  ) { }

  ngOnInit(): void {
    this.activatedRoot.params.subscribe((data: any) => {
      const ProID = data.ProID
      this.getProgram(ProID)
      this.formControl()
      console.log(data)
    })

  }

  formControl() {
    this.editProgram = new FormGroup({
      ProID:new FormControl(null),
      ProName: new FormControl(null, [Validators.required]),
      ProDescription: new FormControl(null, [Validators.required]),
      ProCapacity: new FormControl(null, [Validators.required])
    })

  }
  getProgram(ProID: any) {
    this.programService.get(ProID).subscribe((result:any) => {
      console.log(result)
      this.editProgram.get('ProID')?.setValue(result.ProID)
      this.editProgram.get('ProName')?.setValue(result.ProName)
      this.editProgram.get('ProDescription')?.setValue(result.ProDescription)
      this.editProgram.get('ProCapacity')?.setValue(result.ProCapacity)
    })
  }

  onSave() {
    const values=this.editProgram.value
    const ProID=this.editProgram.value.ProID
    this.programService.update(ProID,values).subscribe((responsive:any)=>{
      console.log(responsive)
    })
  }
}
