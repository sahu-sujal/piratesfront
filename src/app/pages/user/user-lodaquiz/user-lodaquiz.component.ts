import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-lodaquiz',
  templateUrl: './user-lodaquiz.component.html',
  styleUrls: ['./user-lodaquiz.component.css']
})
export class UserLodaquizComponent implements OnInit{

  catId;
  quizzes;

  constructor(private _route:ActivatedRoute, private _quiz:QuizService){

  }

  ngOnInit(): void {
      
    this.catId=this._route.snapshot.params['catId'];

    if(this.catId == 0){
      this._quiz.quizzes().subscribe(
        (data)=>{

          this.quizzes=data;
          console.log(this.quizzes);

        },
        (error)=>{

          Swal.fire('error','Unable to fetch data from the server','error');
          console.log(error);

        }
      )


    }else{

      alert('load Specific Quiz');

    }
  }

}
