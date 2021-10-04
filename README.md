# Svelte-Learning

Learning Svelte and testing its features.

## Making a web component

Add `customElement: true` in the `rollup.config.js` file under the plugins under svelte.

## Reactivity

- Props passed into Svelte component (web-element) should be reactive:  Just put a custom prop like `count=“30”` and it will begin with 30 even in React. Eg: https://github.com/akshatvg/Svelte-Learning/blob/master/first-project/src/App.svelte

## Web Element

- Almost everything works with web component if `customElement: true` is set on `plugins` for `svelte`.
- Export to Web Element (In React just put the build file in public folder and access it through the `index.html` file.

## Callbacks

- https://svelte.dev/tutorial/component-events)
- **HTML:** Svelte function & internally during svelte life cycle invoke function: https://svelte.dev/tutorial/event-forwarding 
- `<react-ui-kit callbacks={endCall:{()=>console.log}} />`

## Data Store

- Data Store outside Svelte (Redux type): https://svelte.dev/tutorial/writable-stores takes care of all these options. 
- All we need to do is something like this: https://stackoverflow.com/questions/67663671/understanding-context-in-svelte-convert-from-react-context).
- Find a way to access Svelte/store outside Svelte (works with a normal exported Web Component).
- Context access possible.
- Svelte store limitation in terms of complex data / video data.

## Web Elements inside each other

- Compose three web elements together (theoretically possible). Eg:

```html
<a> 
    <b>
        <c></c>
    </b>
</a>
```

## TypeScript

- https://svelte.dev/blog/svelte-and-typescript)
- `node scripts/setupTypeScript.js`

## Resources

- https://www.youtube.com/watch?v=RbTM785zhG4&t=3s
- https://svelte.dev/repl/ff94ad9fbb18495099f2e6e31b86bc9e?version=3.9.2
- https://developers.google.com/web/fundamentals/web-components/customelements

## How to test with a React App

- `npm run build`

-

```bash
npx create-react-app test
cd test
```

- Copy the build files from the public folder in the Svelte app and paste them onto the public folder of the React app.

- Import the pasted files in the `index.html` file of the React app.

- Simply import the web component exported before like `<Svelte-Component></Svelte-Component>`.
