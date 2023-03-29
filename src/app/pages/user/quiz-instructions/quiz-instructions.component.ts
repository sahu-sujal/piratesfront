import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit{

  quizID;
  quizData;
  role;

  constructor(private _quiz:QuizService , private _route:ActivatedRoute , private _login:LoginService){

  }

  ngOnInit(): void {

      this.role=this._login.getUserRole();
      
      this.quizID=this._route.snapshot.params['quizId'];

      this._quiz.getSingleQuizById(this.quizID).subscribe(
        (data)=>{

          this.quizData=data;
          console.log(this.quizData);

        },
        (error)=>{

          Swal.fire('ERROR','Unable to load Component','error');

        }
      )
      
  }
  
}
