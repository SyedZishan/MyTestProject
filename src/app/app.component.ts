import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  gifSearchForm : FormGroup;
  public data = [];

  constructor(private fb : FormBuilder, 
              private http : HttpClient  
    ) { }


  ngOnInit() {
    this.initForm();
    this.pageLoad();
  }


  initForm(){
    this.gifSearchForm = this.fb.group({
     searchTerm : ['',[]],
     category : ['Show All',[]]
    });    
  }
  
  public search(){
    let searchTerm = this.gifSearchForm.controls.searchTerm.value;
    let apiKey = 'NClx2IdLUCFW9q9YKRDEaarB9X3xAm3z';
    let url = 'http://api.giphy.com/v1/gifs/search?q='+ searchTerm + '&api_key=' + apiKey + '&limit=20';
    this.http.get<any>(url).subscribe(response=>{
        this.data = response.data;
    });
  }

  public pageLoad(){
    let searchTerm = this.gifSearchForm.controls.searchTerm.value;
    let apiKey = 'NClx2IdLUCFW9q9YKRDEaarB9X3xAm3z';
    let url = 'http://api.giphy.com/v1/gifs/trending?&api_key=' + apiKey + '&limit=20';
    this.http.get<any>(url).subscribe(response=>{
        this.data = response.data;        
    });
  }

}



