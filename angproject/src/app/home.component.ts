import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'home.component.html'
})

export class AppComponent{
    students = [];
    constructor(private hc:HttpClient){
      this.hc.get("https://basicstudentapp.herokuapp.com/students/getAllStudents").subscribe((data)=>{
        this.students = <any[]>data;
      },(error)=>{
        alert("data loading failed");
      });
    }
}