Detta är ett [Next.js](https://nextjs.org/) projekt skapat med [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Projektet tillämpar tre API:er:

- Horoscope API [https://horoscope-app-api.vercel.app/](https://horoscope-app-api.vercel.app/): Hämtar ett horoskop för dagens datum, ett morgondagen samt ett för hela månaden.

- OpenAi [https://nextjs.org/](https://nextjs.org/): Textgenerering baserat på spådomar genererad av Horoscope API.

- NASA APOD API [https://api.nasa.gov/](https://api.nasa.gov/): Hämtning av bilder som presenteras på hemsidan.

Projektet tillämpar localStorage genom att spara användarens val av stjärntecken i minne. Om stjärntecknet finns laddas sidan utan "hjulet".

## Kom igång

Först måste dev-servern köras

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Öppna [http://localhost:3000](http://localhost:3000) med din webbläsare för att se appen

# VIKTIGT

Projektet är beroende av en Proxy Server kodad i Spring. Denna måste köra samtidigt för att applikationen ska bete sig korrekt. Länken till detta repo finnes via
denna länk; [https://github.com/patriknotvincent/ProxyServer.git](https://github.com/patriknotvincent/ProxyServer.git)
