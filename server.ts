import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, { Request, Response, NextFunction } from 'express';
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import AppServerModule from './src/main.server';

// ✅ استخدم جذر المشروع دائمًا
const projectRoot = process.cwd(); // C:\Users\...\booking-app
const serverDistFolder  = join(projectRoot, 'dist', 'hotel', 'server');   // dist/hotel/server
const browserDistFolder = join(projectRoot, 'dist', 'hotel', 'browser');  // dist/hotel/browser

// اختر ملف الـ HTML المتاح
const indexServerHtml = join(serverDistFolder, 'index.server.html');
const indexBrowserHtml = join(browserDistFolder, 'index.html');
const indexHtml = existsSync(indexServerHtml) ? indexServerHtml : indexBrowserHtml;

// — Debug logs لمرة واحدة (تتركها مؤقتًا)
console.log('[SSR] projectRoot:', projectRoot);
console.log('[SSR] serverDistFolder:', serverDistFolder);
console.log('[SSR] browserDistFolder:', browserDistFolder);
console.log('[SSR] indexHtml exists?:', existsSync(indexHtml), '→', indexHtml);

// نُصدّر تطبيق Express
export function app(): express.Express {
  const server = express();
  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // ستاتيك
  server.get('*.*', express.static(browserDistFolder, { maxAge: '1y' }));

  // SSR
  server.get('*', (req: Request, res: Response, next: NextFunction) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine.render({
      bootstrap: AppServerModule,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then(html => res.send(html))
    .catch(err => next(err));
  });

  // Error handler يطبع الاستثناءات بدل ما يدي Internal Server Error صامت
  server.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error('[SSR] Render error:', err);
    res.status(500).send('Internal Server Error');
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
export * from './src/main.server';
