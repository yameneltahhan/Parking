import { Hono } from 'hono'
import { toSlug } from './utils/toSlug'
import { generateRandomNumberId } from './utils/generateRandomNumberId'

const app = new Hono()


app.get('/', (c) => {
    return c.text('Hello Hono!')

}),
    app.get('/test', (c) => {
        return c.text('ca marche')
    })

export default app