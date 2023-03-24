import { Component } from '@angular/core';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  category;
  
  constructor(private _cat:CategoryserviceService){

  }

  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data)=>{
        this.category=data;
      },
      (error)=>{
        Swal.fire('error','unable to load data from server','error');
      }
    );

  }
  
}
