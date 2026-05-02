# Vite React Kalkulator

Jednostavna web aplikacija kalkulatora izgrađena pomoću **React**, **Vite** i **TypeScript**.

## 🔗 Live verzija

👉 [https://vite-react-calculator.vercel.app](https://vite-react-calculator.vercel.app)

> *(Ažuriraj ovaj link nakon deploy-a na Vercel)*

## 📋 Opis projekta

Mini kalkulator koji podržava četiri osnovne aritmetičke operacije:

- ➕ Sabiranje
- ➖ Oduzimanje
- ✖️ Množenje
- ➗ Deljenje (sa zaštitom od deljenja nulom)

Aplikacija sadrži dva input polja za unos brojeva, dugmad za svaku operaciju i prikaz rezultata.

## 🚀 Pokretanje lokalno

### Preduslovi

- [Node.js](https://nodejs.org/) (verzija 18 ili novija)
- npm (dolazi uz Node.js)

### Koraci

1. Klonirajte repozitorijum:

```bash
git clone https://github.com/YOUR_USERNAME/vite-react-calculator.git
cd vite-react-calculator
```

2. Instalirajte zavisnosti:

```bash
npm install
```

3. Pokrenite razvojni server:

```bash
npm run dev
```

4. Otvorite browser na adresi: [http://localhost:5173](http://localhost:5173)

## 🛠️ Tehnologije

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)

## 📁 Struktura projekta

```
src/
├── components/
│   └── Calculator/
│       ├── Kalkulator.tsx       # Glavni UI komponent
│       ├── Kalkulator.css       # Stilovi kalkulatora
│       └── kalkulatorLogika.ts  # Logika računanja
├── types/
│   └── Kalkulator.ts            # TypeScript tipovi
├── App.tsx
├── main.tsx
└── index.css
```

## ☁️ Deployment

Projekat je automatski deploy-ovan na **Vercel** putem GitHub integracije.  
Svaki push na `main` branch automatski ažurira live verziju aplikacije.
