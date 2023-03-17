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
}
