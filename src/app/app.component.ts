import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LessonsProgressComponent } from "./lessons-progress/lessons-progress.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LessonsProgressComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}

