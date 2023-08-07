## About project

Simple code snippet list app that gives ability to add, remove, update, etc. snippets.

Project was bootstrapped using [electron-react-boilerplate](https://electron-react-boilerplate.js.org)

Some of the core dependencies:

- `ChakraUI` as a UI library

- `Zustand` as a state manager

- `ELectron Store` as a persistent store

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Important Notes

- You'd notice this app lacks loaders (eg: when adding snippet, removing, etc.), I decided to save time as adding loaders is very trivial thing, but totally necessary in production app for good UX.

- You'll find some monitoring/logging across the app, but this lacks error handling, for the same reason as above. There's not much that can go wrong in this test app since we're not making any API requests or etc.  
  In production app we might have Sentry, HoneyComb and/or similar services for tracing and monitoring the app throughout.

- For persisting state this app uses `Electron Store` which works fine for this simple case, but isn't recommended to be used for big data, it's more for persisting app state, settings, cache, etc. After all it's just a JSON file Behind the scenes.  
  In production app using a database or some alternative solution would be necessary.
