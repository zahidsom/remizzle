# App Name: Remizzle

Fullstack Application Demo using drizzle ORM ,SQLite and Remix 
https://orm.drizzle.team/docs/select


Demos Remix loader  and action features

This bare bones app only demos query and  simple hardcoded mutation.
The obective was to integrate database with remix.

- [Remix Docs](https://remix.run/docs)

## Development

N.B. command to remember for recreation of schema
```sh
npm run db:migrations 
```

From your terminal:


```sh
npm install
```


```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
