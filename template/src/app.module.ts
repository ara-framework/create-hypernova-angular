import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component';

const APP_ID = 'hypernova';

const components = {
  'Example': ExampleComponent
}

@NgModule({
  imports: [
    ExampleModule,
    BrowserModule.withServerTransition({ appId: APP_ID }),
  ],
  entryComponents: [ExampleComponent]
})
export class AppModule {
  constructor (
    @Inject('Hypernova.Name') private name: string,
    @Inject('Hypernova.Node') private node: HTMLElement
    ){}

  ngDoBootstrap(app) {
    const Component = components[this.name]
    if (Component) {
      return app.bootstrap(Component, this.node)
    }
  };
}
