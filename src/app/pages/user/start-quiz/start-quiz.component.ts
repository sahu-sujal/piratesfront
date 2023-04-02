import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{
 
  qID;
  questions;

  constructor(private _locationst:LocationStrategy, private _route:ActivatedRoute, @Inject(DOCUMENT) private document: Document, private _question:QuestionService){

  }

  ngOnInit(): void {
      this.preventVulnerableButton();
      this.qID=this._route.snapshot.params['quizId'];
      this.loadquestions();
  }
  loadquestions() {
    this._question.getQuestionOfQuizfortest(this.qID).subscribe(
      (data:any)=>{
        this.questions=data;
      },
      (error)=>{
        Swal.fire('ERROR','unable to load data from server','error');
      }
    )
  }

  preventVulnerableButton(){
    history.pushState(null,null,location.href);
    this._locationst.onPopState(()=>{
      history.pushState(null,null,location.href);
    })

    this.document.addEventListener('contextmenu', (event) => event.preventDefault())
      
  }
}
