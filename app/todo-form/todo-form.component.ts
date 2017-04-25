import { Component,Input, Output, EventEmitter  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent{
    title = '';
    active = false;

    @Input() dataArray;
    @Output() add = new EventEmitter();

    createTask (){
        this.add.emit(this.title);
    }

    chooseAll (){
        if (!this.active){
            this.dataArray.forEach(function(elem){
                elem.completed = true;
            });
            this.active = true;
        } else if (this.active){
            this.dataArray.forEach(function(elem){
                elem.completed = false;
            });
            this.active = false;
        }
    }
}