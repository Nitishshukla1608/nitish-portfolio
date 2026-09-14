# Nitish Kumar Shukla — Portfolio

## Kaise chalayein (local pe)

```
npm install
npm run dev
```

Phir browser mein khulega: http://localhost:5173

## Kaise deploy karein (live website)

1. Is folder ko GitHub pe push karo.
2. https://vercel.com pe jaake GitHub repo connect karo.
3. "Deploy" dabao — Vercel khud detect kar lega ki ye Vite + React project hai.
4. Kuch second mein free live URL mil jayega.

## Kya-kya hai isme

- `src/App.jsx` — poora portfolio (hero, about, toolkit, work, background, contact)
- `src/main.jsx` — React ka entry point
- `index.html` — HTML shell
- Icons ke liye `lucide-react` package use ho raha hai (already `package.json` mein add hai)
