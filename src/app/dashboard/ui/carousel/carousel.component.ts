import { Component } from '@angular/core';

import {
  NzCarouselTransformNoLoopStrategy,
  NZ_CAROUSEL_CUSTOM_STRATEGIES,
} from 'ng-zorro-antd/carousel';

@Component({
  selector: 'flux-carousel',
  templateUrl: './carousel.component.html',
  providers: [
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        {
          name: 'transform-no-loop',
          strategy: NzCarouselTransformNoLoopStrategy,
        },
      ],
    },
  ],
})
export class CarouselComponent {}
