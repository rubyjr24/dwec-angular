import { Component } from '@angular/core';

@Component({
  selector: 'lifecycle-test',
  imports: [],
  templateUrl: './lifecycle-test.html',
  styleUrl: './lifecycle-test.css',
})
export class LifecycleTest {

  ngOnInit(){
    console.log("Se ha inicializado el componente");
  }

  ngOnDestroy(){
    console.log("Se ha destruido el componente");
  }

}
