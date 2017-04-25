import { Component} from '@angular/core';
import { dataArray } from './shared/dataArray';
import { Todo } from "./shared/todo";


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']

})
export class AppComponent {
    title = 'Angular 2 TODO';
    dataArray = dataArray;

    create(title){
        const todo = new Todo(title);
        this.dataArray.push(todo);
    }
}