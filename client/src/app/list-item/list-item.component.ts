import { Component, OnInit, Input } from "@angular/core";
import { ITEMS } from "../list-items";
import { ListItem } from "../listItem";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.sass"],
})
export class ListItemComponent implements OnInit {
  public canEditCode: boolean = false;
  taskCopy: ListItem;

  items = ITEMS;
  @Input() listItem: ListItem;
  @Input() removeTaskItemFromList: (id: number) => void;
  @Input() changeTaskItem: (listItem: object) => void;

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.removeTaskItemFromList(this.listItem.id);
  }

  saveEditedTask() {
    this.canEditCode = !this.canEditCode;
  }

  discardChanges() {
    this.canEditCode = !this.canEditCode;
    this.listItem = this.taskCopy;
  }

  public onCanEditCode() {
    this.taskCopy = Object.assign({}, this.listItem);
    this.canEditCode = !this.canEditCode;
  }
}
