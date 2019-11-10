import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import { load, mountComponent, loadById } from 'hypernova-angular'

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component'

const render = (name, { node, data }) => {
  if (name === 'Example') {
    return mountComponent(ExampleComponent, ExampleModule, node, data)
  }
}

document.addEventListener('NovaMount', (event) => {
  const { name, id } = (<CustomEvent>event).detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})


load('Example').forEach(render.bind(null, 'Example'))
