# Yarn Commands

Adding Package

```
yarn add <package-name>
```

## Upgrading packages of project

Get Current package version

```
yarn list <package-1> <package-2>
```

For Upgrade
Put ^ symbol before verison in package.json telling that project uses atleast this version of package

```
yarn upgrade
```

if it asks to update yarn.lock
then first do this

```
yarn install
```

## Listing All the vulnerabile packages

```
yarn audit
```

But for fixing them you have to install each to them manually.
