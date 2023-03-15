import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get('http://localhost:8080/quiz/')
  }

  public addQuiz(quiz){
    return this._http.post('http://localhost:8080/quiz/',quiz);
  }

  public deleteQuiz(id){
    return this._http.delete('http://localhost:8080/quiz/'+id);
  }

  public getSingleQuizById(id){
    return this._http.get('http://localhost:8080/quiz/'+id)
  }

  public updateQuiz(quizdata){
    return this._http.put('http://localhost:8080/quiz/',quizdata);
  }

}
