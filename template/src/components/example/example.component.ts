import { Component, Inject } from '@angular/core'
import { HYPERNOVA_DATA } from 'hypernova-angular'

@Component({
  templateUrl: './example.component.html',
})
export class ExampleComponent{
  title: string = 'Angular 6'

  constructor(@Inject(HYPERNOVA_DATA) data: any) {
    this.title = data.title || this.title
  }
}
