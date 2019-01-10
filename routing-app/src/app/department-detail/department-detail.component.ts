import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';
// ActivatedRoute ParamMap Router imprted here because url configure
@Component({
  selector: 'app-department-detail',
  template: `
  <button (click)="showOverview()">Department overview</button><br/>
  <div></div> <br/>
  <button (click)="showContact()">deparment Contact</button>

  <p><router-outlet></router-outlet></p>
    <p>
    
      department-detail works!
     you selected department id :- {{departmentId}}<br/>
     
     <button (click)="goPre()">previous</button><br/>
     <button (click)="goNext()">next</button> <br/>
   
     <button (click)="godeprt()">Back</button>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId ;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
//let id = this.route.snapshot.paramMap.get('id');  //snapshot mehod not for good practice

//using snapshot method url value not get in broser interpoltion
    this.route.paramMap.subscribe((params:ParamMap)=>{
        let id = params.get('id');
        this.departmentId =parseInt(id) ;
    });
  }

  goPre(){
    let previousId = this.departmentId - 1 ;
    this.router.navigate(['/departments',previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1 ;
    this.router.navigate(['/departments',nextId]);
  }
  godeprt(){
    let selectedId =this.departmentId ?this.departmentId :null;
    // withou relativeTo 
    //this.router.navigate(['/departments',{id:selectedId,test:'test'}]);

    // using relativeTo for url dynamicaly change  for good practices
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
     //alert('overview');
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
    //alert('contact');
  }

}
