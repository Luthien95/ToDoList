import { ListItem } from "./../listItem";
import { Component, OnInit } from "@angular/core";
import { ITEMS } from "../list-items";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.sass"],
})
export class ListComponent implements OnInit {
  items = ITEMS;
  constructor() {}

  ngOnInit() {}

  removeTaskItemFromList = (id: number): void => {
    this.items = this.items.filter((item) => item.id !== id);
  };

  addTaskItemToList = (listItem: ListItem): void => {
    Object.assign(listItem, { id: this.items.length + 1 });
    this.items.push(listItem);
  };
}
