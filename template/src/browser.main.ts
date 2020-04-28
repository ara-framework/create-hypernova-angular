import 'core-js/features/reflect'
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { load, loadById, HypernovaModuleFactory } from 'hypernova-angular';

import { CompilerFactory, Compiler } from '@angular/core';

const platform = platformBrowserDynamic();

const compilerFactory: CompilerFactory = platform.injector.get(CompilerFactory);

const compiler: Compiler = compilerFactory.createCompiler([])

const moduleFactory = compiler.compileModuleSync(AppModule);

const render = (name: string, placeholder: any) => {
  const hypernovaModuleFactory = new HypernovaModuleFactory(moduleFactory, name, placeholder);

  platform.bootstrapModuleFactory(hypernovaModuleFactory);
}

document.addEventListener('NovaMount', (event) => {
  const { name, id } = (<CustomEvent>event).detail

  const placeholder = loadById(name, id)

  if (placeholder) {
    render(name, placeholder)
  }
})

load('Example').forEach(render.bind(this, 'Example'));
