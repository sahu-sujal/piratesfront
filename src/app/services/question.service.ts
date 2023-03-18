import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseurl ='http://localhost:8080/';

  constructor(private _http:HttpClient) { }

  public getQuestionOfQuiz(qid){
    return this._http.get(this.baseurl+'question/quiz/all/'+qid);
  }

  public addQuestionsOfQuiz(questions){
    return this._http.post(this.baseurl+'question/',questions);
  }
}
