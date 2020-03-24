import 'core-js/features/reflect'
import 'zone.js';

import { enableProdMode } from '@angular/core';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';
import { load, loadById, HypernovaModuleFactory } from 'hypernova-angular';

enableProdMode();

const render = (name: string, placeholder: any) => {
  const hypernovaModuleFactory = new HypernovaModuleFactory(AppModuleNgFactory, name, placeholder);
  platformBrowser().bootstrapModuleFactory(hypernovaModuleFactory);
}

document.addEventListener('NovaMount', (event) => {
  const { name, id } = (<CustomEvent>event).detail;

  const placeholder = loadById(name, id);

  if (placeholder) {
    render(name, placeholder);
  }
})

load('Example').forEach(render.bind(this, 'Example'));
