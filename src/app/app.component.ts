import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from "@angular/common";
import { DATA, LESSONS, STUDENTS } from './data/data';
import {transformation_json} from "./functions/funcs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public result: any = transformation_json(DATA, STUDENTS, LESSONS);
}

