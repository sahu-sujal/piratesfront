import { Component , OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-article',
  templateUrl: './user-article.component.html',
  styleUrls: ['./user-article.component.css']
})
export class UserArticleComponent implements OnInit{

  qid;
  quiz;

  constructor(private _quiz:QuizService , private _route:ActivatedRoute){

  }

  ngOnInit(): void {

    this.qid=this._route.snapshot.params['quizId']
    
    this._quiz.getSingleQuizById(this.qid).subscribe(
      (data)=>{     
        this.quiz=data;
       
      },
      (error)=>{
       Swal.fire("Error","Unable to fetch data","error");
      }
    )
      
  }
}
