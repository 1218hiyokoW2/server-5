import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

// // GETリクエストに対する処理（クエリーパラメーター）
// app.get('/api', async (c) => {
//   // パラメーターの受け取り
//   const name = c.req.query('name');
//   const rank = c.req.query('rank');

//   return c.json({ message: 'GET', query: { name, rank } });
// });

// GETリクエストに対する処理（パスパラメーター）
app.get('/api/:name/:rank', (c) => {
  // パラメーターの受け取り
  const name = c.req.param('name');
  const rank = c.req.param('rank');

  return c.json({ message: 'GET', param: { name, rank } });
});

// POSTリクエストに対する処理
app.post('/api', async (c) => {
  // メッセージボディの受け取り
  const body = await c.req.parseBody();
  const name = body['name'];
  const rank = body['rank'];

  return c.json({ message: 'POST', form: { name, rank } });
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
