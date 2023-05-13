import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'shared-video',
  templateUrl: './video.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent {
  @Input() source: string;
  @Input() showControls: boolean = false;

  playVideo(video: HTMLVideoElement) {
    video.paused ? video.play() : video.pause();
  }
}
