import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import * as hypernova from 'hypernova/server'
import { renderAngular } from 'hypernova-angular/server'
import * as express from 'express'
import * as path from 'path'

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component'

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  processJobsConcurrently: true,

  getComponent (name) {
    if (name === 'Example') {
      return renderAngular(name, ExampleComponent, ExampleModule)
    }
  },
  port: process.env.PORT || 3000,

  createApplication () {
    const app = express()

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
