import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

// GETリクエストに対する処理
app.get('/api', async (c) => {
  return c.json({ message: 'GET' });
});

// POSTリクエストに対する処理
app.post('/api', async (c) => {
  return c.json({ message: 'POST' });
});

// PUTリクエストに対する処理
app.put('/api', async (c) => {
  return c.json({ message: 'PUT' });
});

// DELETEリクエストに対する処理
app.delete('/api', async (c) => {
  return c.json({ message: 'DELETE' });
});

Deno.serve(app.fetch);
