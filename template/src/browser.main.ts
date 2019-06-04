import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import { renderAngular } from 'hypernova-angular'

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component'

renderAngular('Example', ExampleComponent, ExampleModule)
