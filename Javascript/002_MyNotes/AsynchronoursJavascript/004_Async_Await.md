# async await

The async keyword before a function has two effects:

- Makes it always return a promise.
- Allows await to be used in it.

The await keyword before a promise makes JavaScript wait until that promise settles, and then:

If it’s an error, an exception is generated — same as if throw error were called at that very place.
Otherwise, it returns the result

```
const loadJson = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      return json;
    }
    throw new Error(response.status);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  const res = await loadJson("https://javascript.info/no-such-user.json");
})();
```

---
