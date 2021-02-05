import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-new-item-form",
  templateUrl: "./new-item-form.component.html",
  styleUrls: ["./new-item-form.component.sass"],
})
export class NewItemFormComponent implements OnInit {
  newTaskForm: FormGroup;
  @Input() addTaskItemToList: (listItem: object) => void;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.newTaskForm = this.fb.group({
      title: ["", Validators.required],
      description: [""],
    });
  }

  emptyAllInputFields() {
    this.newTaskForm.reset();
  }

  addNewTask() {
    var newTask = this.newTaskForm.value;

    this.addTaskItemToList(newTask);
    this.emptyAllInputFields();
  }
}
