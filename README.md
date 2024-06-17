Detta är ett [Next.js](https://nextjs.org/) projekt skapat med [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Projektet tillämpar tre API:er:

- Horoscope API [https://horoscope-app-api.vercel.app/](https://horoscope-app-api.vercel.app/): Hämtar ett horoskop för dagens datum, ett morgondagen samt ett för hela månaden.

- OpenAi [https://nextjs.org/](https://nextjs.org/): Textgenerering baserat på spådomar genererad av Horoscope API.

- NASA APOD API [https://api.nasa.gov/](https://api.nasa.gov/): Hämtning av bilder som presenteras på hemsidan.

Projektet tillämpar localStorage genom att spara användarens val av stjärntecken i minne. Om stjärntecknet finns laddas sidan utan "hjulet".

Till sist är projektet beroende av nycklar till alla olika API:er. Dessa finns till förfogande vid förfrågan

## Krav för att kunna köra hela applikationen (inkl proxy-server nämnd nedan)

- NPM 
- IntelliJ Idea (Community Edition fungerar utmärkt)
- Java (Version 17 med openjdk-22)

## Kom igång

1) Klona projektet

2) Öppna projektet i din valda kod-editerare (VS Code rekommenderat)

3) Öppna en ny terminal. Ange;
```bash
npm install
```` 
Och tryck enter.

4) I projektets rot (utanför src, public och dylikt), skapa en fil som enbart heter
```bash
.env
```
I denna fil, klistra in information delgiven av administratören. Dessa är API-nycklar och dylikt som används under körtid.

5) I samma terminal kan du nu köra en utvecklings-server genom att ange
```bash
npm run dev
# eller
yarn dev
````
Och sedan trycka enter.

Följ därefter instruktionerna från terminalen för att navigera till hemsidan. I vårt fall lades hemsidan på [http://localhost:3000](http://localhost:3000), men detta kan variera beroende på vad du har igång på din lokala maskin.

# VIKTIGT

Projektet är beroende av en Proxy Server kodad i Spring. Denna måste köras för att appen ska kunna hämta horoskop, men det är fullt möjligt att köra klienten utan servern igång. Länken till detta repo finnes via
denna länk; [https://github.com/patriknotvincent/ProxyServer.git](https://github.com/patriknotvincent/ProxyServer.git)
