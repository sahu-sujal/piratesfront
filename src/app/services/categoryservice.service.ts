import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(private http:HttpClient) { }

  //load all the category
  public categories(){
    return this.http.get('http://localhost:8080/category/');
  }

  //add new category
  public addCategory(category){
    return this.http.post('http://localhost:8080/category/',category)
  }

  //delete category
  public deleteCategory(id){
    return this.http.delete('http://localhost:8080/category/'+id);
  }

  //update categroy
  public updateCategory(update){
    return this.http.put('http://localhost:8080/category/',update);
  }

  //get single category by id
  public getCategoryById(id){
    return this.http.get('http://localhost:8080/category/'+id);
  }
}
