import { EventCalendar } from "@dhx/trial-eventcalendar";
import { getData } from "./data";

import {
	Component,
	ElementRef,
	OnInit,
	OnDestroy,
	ViewChild,
	ViewEncapsulation,
} from "@angular/core";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "event-calendar",
	styleUrls: ["./event-calendar.component.css"],
	template: `<div #container class="widget"></div>`,
})

export class EventCalendarComponent implements OnInit, OnDestroy {
	@ViewChild("container", { static: true }) calendar_container!: ElementRef;

	private _calendar!: EventCalendar;

	ngOnInit() {
		const events = getData();
		this._calendar = new EventCalendar(this.calendar_container.nativeElement, {
			events,
			date: new Date(2024, 5, 10),
		});
	}

	ngOnDestroy(): void {
		this._calendar.destructor();
	}
}
