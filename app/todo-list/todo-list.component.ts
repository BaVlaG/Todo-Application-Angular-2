import { Component, Input } from '@angular/core';
import { Todo } from './shared/todo';


@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent{
    @Input() dataArray;

    delete(item){
        let index = this.dataArray.indexOf(item);
        if (index > -1) {
            this.dataArray.splice(index, 1);
        }
    }



    // checkSelected(){
    //     let n = 0;
    //     dataArray.forEach(function(elem){
    //        if (elem.completed) {
    //            n++;
    //        }
    //     });
    //
    //     console.log(n, dataArray.length - 1);
    //     if (n <= dataArray.length - 1) {
    //         if (n >= dataArray.length - 1) {
    //             this.active = true;
    //         } else {
    //             this.active = false;
    //         }
    //     }
    //
    //
    // }
}