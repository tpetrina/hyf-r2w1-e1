# HackYourFuture React 2 - Week 1 - Exercise 1

This exercise will teach you how to use React Context.

Steps to solve:

1. Create a new file and name it `languageContext.js`
2. Inside the file add the following:

```js
import React, { useState } from "react";

const LanguageContext = React.createContext();
```

This creates a context for us to use.

3. To the same file, add the following component (don't forget to export it!):

```jsx
export function LanguageProvider({ children }) {
  const [language] = useState("dk");

  return (
    <LanguageContext.Provider
      value={{
        language: language
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
```

4. In the `App.js` wrap the existing `<div>` block with `LanguageProvider` so that it looks like this:

```jsx
export default function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
      </div>
    </LanguageProvider>
  );
}
```

Don't forget to import the `LanguageProvider` component first!

5. Edit `Navbar.js` and replace:

```js
const [language] = useState("dk");
```

with:

```js
const { language } = useContext(LanguageContext);
```

Don't forget to import `useContext` and `LanguageContext`.
