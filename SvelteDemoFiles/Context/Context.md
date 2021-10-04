# Migrating from React Context to Svelte

Context in Svelte and React may seem similar, but they are actually used differently. Because at the core, Svelte's context is much more limited. But that's ok. In fact, it actually will make your code simpler to write and understand.

In Svelte, you have more tools at your disposal for passing data round your app (and keeping it in sync) than just context. Each one does pretty much one thing (making everything predictable), and they do it well. Of these, you have:

- Context
- Stores
- Props

As someone who's recently switched from React to Svelte, I think I can help explain some of the differences between each of these and help you avoid some of my conceptual mistakes. I'll also go over some differences in life cycle methods, because if you used to use `useEffect`, you might feel very lost since Svelte doesn't have an equivalent API. Yet combining everything together in Svelte will make everything simple.

## Context

Context in Svelte does one thing: pass data from a parent component to any children (not necessarily direct children). Unlike in React, **context is not reactive**. It is set once when the component mounts, and then will not be updated again. We'll get to "reactive context" in a second.

```svelte
<!-- parent.svelte -->

<script>
  import { setContext } from 'svelte'

  setContext('myContext', true)
</script>

<!-- child.svelte -->

<script>
  import { getContext } from 'svelte'

  const myContext = getContext('myContext')
</script>
```

Notice that context involves two things, a key and a value. Context is set to a specific key, then the value can be retrieved using that key. Unlike React, you do not need to export functions to retrieve the context. Both the key and value for the context can be anything. If you can save it to a variable, you can set it to context. You can even use an object as a key!

## Stores

If you have data that needs to stay in sync in multiple places across your app, stores are the way to go. Stores are reactive, meaning they can be updated after they're created. Unlike context in either React or Svelte, stores don't simply pass data to their children. Any part of your app can create a store, and any part of your app can read the store. You can even create stores outside of Svelte components in separate JavaScript files.

```ts
// mystore.ts
import { writable } from 'svelte/store'

// 0 is the initial value
const writableStore = writable(0)

// set the new value to 1
const writableStore.set(1)

// use `update` to set a new value based on the previous value
const writableStore.update((oldValue) => oldValue + 1)

export { writableStore }
```

Then inside a component, you can subscribe to the store.

```svelte
<script>
  import { writableStore } from './mystore'

</script>

{$writableStore}
```

The dollar sign subscribes to the store. Now, whenever the store is updated, the component will rerender automatically.

### Using stores with context

Now that we have stores and context, we can create "reactive context"(a term I just made up, but it works). Stores are great because they're reactive, and context is great to pass data down to the children components. But we can actually pass a store down through context. This makes the context reactive and the store scoped.

```svelte
<!-- parent.svelte -->

<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  const writableStore = writable(0)
  setContext('myContext', writableStore)
</script>

<!-- child.svelte -->

<script>
  import { getContext } from 'svelte'

  const myContext = getContext('myContext')
</script>

{$myContext}
```

Now, whenever the store updates in the parent, the child will also update. Stores can of course do much more than this, but if you were looking to replicate React context, this is the closest you can get in Svelte. It's also a lot less boilerplate!

### Using "reactive context" with "useEffect"

Svelte does not have an equivalent of `useEffect`. Instead, Svelte has reactive statements. There's a lot on these in the docs/tutorial, so I'll keep this brief.

```ts
// doubled will always be twice of single. If single updates, doubled will run again.
$: doubled = single * 2

// equivalent to this

let single = 0
const [doubled, setDoubled] = useState(single * 2)

useEffect(() => {
  setDoubled(single * 2)
}, [single])
```

Svelte is smart enough to figure out the dependencies and only run each reactive statement as needed. And if you create a dependency cycle, the compiler will yell at you.

This means that you can use reactive statements to update stores (and hence update the context). Here, the `valueStore` will be update on every keystroke to the input. Since this store is passed down through context, any child can then get the current value of the input.

```svelte
<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  // this value is bound to the input's value. When the user types, this variable will always update
  let value

  const valueStore = writable(value)

  setContext('inputContext', valueStore)

  $: valueStore.set(value)

</script>

<input type='text' bind:value />
```

## Props

For the most part, props function exactly the same in React and Svelte. There are a few differences because Svelte props can take advantage of two-way binding (not necessary, but possible). That's really a different conversation though, and the tutorial is really good at teaching two-way binding with props.

## Authentication in Svelte

Ok, now after all of that, let's look at how you'd create an authentication wrapper component.

- Create an auth store
- Pass the auth store down via context
- Use Firebase's `onAuthStateChanged` to listen to changes in auth state
- Subscribe to the auth store in the child
- Unsubscribe from `onAuthStateChanged` when the parent is destroyed to prevent memory leaks


```svelte
<!-- parent.svelte -->
<script>
  import { writable } from 'svelte/store'
  import { onDestroy, setContext } from 'svelte'

  import { auth } from '../firebase'

  const userStore = writable(null)

  const firebaseUnsubscribe = auth.onAuthStateChanged((user) => {
    userStore.set(user)
  })

  const login = (email, password) => auth.signInWithEmailandPassWord(email,password)

  const logout = () => auth.sinnOut()

  setContext('authContext', { user: userStore, login, logout })

  onDestroy(() => firebaseUnsubscribe())

</script>

<slot />

<!-- child.svelte -->
<script>
  import { getContext } from 'svelte'

  const { login, logout, user } = getContext('authContext')
</script>

{$user?.displayName}
```