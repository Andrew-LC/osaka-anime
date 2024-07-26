import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { signUp, signIn } from './libs/supabase/auth'

const app = new Hono()

app.post('/signup', async (c) => {
  const formData = await c.req.json();
  const user = await signUp(formData).catch(err => {
    return c.json({ error: err });
  });
  return c.json({ message: 'Successfully signed up !', data: user });
});


app.post('/login', async (c) => {
  const formData = await c.req.json();
  const { email, password } = formData;
  const user = await signIn(email, password).catch(err => {
    return c.json({ error: err });
  });
  return c.json({ message: 'Successfully Logged in !', data: user });
});




const port = 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
