import { Component, Inject } from '@angular/core'
import template from './example.component.html'
import { HYPERNOVA_DATA } from 'hypernova-angular'

@Component({
  template,
})
export class ExampleComponent{
  title: string = 'Angular 6'

  constructor(@Inject(HYPERNOVA_DATA) data: any) {
    this.title = data.title || this.title
  }
}