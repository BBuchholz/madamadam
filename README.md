<h1 align='center'>🜾</h1>

<p align='center'>
  MADAMADAM is tha Expository Manifestation ov MDMDM Gnosis within tha MyriaD EcoSystem
</p>

<p>Hosted on Netlify at <a href="https://madamadam.netlify.app/" target="_blank">madamadam.netlify.app</a>


<br>




## Download A Local Copy

> MADAMADAM requires Node >=14.18

### Clone to local without history

If you prefer to create a working copy with a cleaner git history

```bash
npx degit BBuchholz/madamadam my-madamadam-app
cd my-madamadam-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```


## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

First, initialize as a Netlify site

```
ntl init
```

Then just build and deploy

```
ntl build
ntl deploy
```

Then, after review, deploy to production with

```
ntl deploy --prod
```


