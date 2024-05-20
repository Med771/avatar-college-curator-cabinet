import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { LessonsArray, mapStudentsLessonsResponse } from './feature/dynamic-table-construction';

@Component({
    selector: 'app-lessons-progress',
    standalone: true,
    imports: [NgFor, NgIf],
    templateUrl: './lessons-progress.component.html',
    styleUrl: './lessons-progress.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsProgressComponent {
    public StudentsLessonsResponse: Record<string, Record<string, string>> = mapStudentsLessonsResponse();

    protected readonly LessonsArray: string[] = LessonsArray;
    protected readonly Object: ObjectConstructor = Object;
}
