import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from  '@angular/router'; 

@Component({
  selector: 'app-department-list',
  template: `<h2>department list</h2>
       <ul>
         <li (click)="onSelect(dep)" [class.selected]="isSelected(dep)"  *ngFor="let dep of department">{{dep.name}}</li>
       </ul>
  `,
  styles: ['']
})
export class DepartmentListComponent implements OnInit {
  public selectedId ;
  public department = [ 
      {'id':1,'name':'angular'},
      {'id':2,'name':'node'},
      {'id':3,'name':'mongo'},
      {'id':4,'name':'rubby'}
  ]
  
  constructor(private route:ActivatedRoute ,private router:Router) { }

  ngOnInit() {
      //for gettig value in browser using interpoletion
      this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.selectedId =parseInt(id) ;
      });
  }
  onSelect(dep){
   // this.router.navigate(['/departments',dep.id])
   this.router.navigate([dep.id],{relativeTo:this.route});
    console.log(dep.id);
  }

  isSelected(deparment){
    return deparment.id===this.selectedId ;

  }

}
