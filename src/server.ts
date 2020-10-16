import { renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const AppServerModuleNG = require("../dist/server/main")

const app = express();
const template = readFileSync(join(
  __dirname, "..", "dist", "browser", "index.html",
)).toString();

app.engine(
  'html', (_, options, callback) => {
    const opts = {
      document: template,
      url: options.reg.url,
      extraProviders: []
    };
    renderModuleFactory(AppServerModuleNG, opts).then(
    (html) => {
      return callback(null, html);
    })
  }
);

app.set('view engine', 'html');
app.set('views', 'src');
app.get('*', (req,res) => {
  res.render('index', {req});
});

app.listen(4000, () => {
  console.log("Server listening .....")
});



