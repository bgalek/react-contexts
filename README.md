![npm](https://img.shields.io/npm/v/@bgalek/react-contexts)

# react-contexts

```shell
npm i @bgalek/react-contexts
```

Useful, generic react contexts for everyday use.

## UserSettingsProvider

User settings for your app, stored in local storage.

Provider:

```js
<UserSettingsProvider
    initialState={{ favouriteNumber: 1 }}
    settingsKey="my-app"
    version="1"
>
    <App />
</UserSettingsProvider>
```

Hook:

```js
    const { settings, setSettings } = useLocalUserSettings>();
    <p>{JSON.stringify(settings)}</p>
    <button onClick={() => setSettings("favouriteNumber", Math.random())}>Change number</button>
```
