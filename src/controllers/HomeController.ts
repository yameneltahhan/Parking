import { type Context } from 'hono';
import { html } from 'hono/html';

// Contrôleur pour la page d'accueil
export const HomeController = (c: Context) => {
    return c.html(html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to EuroPark</title>
      </head>
      <body>
        <h1>Welcome to EuroPark</h1>
        <img src="/static/images/parking.png" alt="Parking Image" />
        <p>
          Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!
        </p>
        <ul>
          <li><a href="/cities">Our Cities</a></li>
          <li><a href="/parkings">Our Car Parks</a></li>
        </ul>
      </body>
    </html>
  `);
};
