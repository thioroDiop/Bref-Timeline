import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timelineList=this.timelineService.getTimelineList();

  constructor(private timelineService : TimelineService) { }

  ngOnInit(): void {
  }

  deleteTimeline(timeline: any) {
    console.log("suppression de la timeline : "+ timeline.id);
  }
}
