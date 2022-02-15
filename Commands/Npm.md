## Upgrading packages in our existing project

First for listing versions of packages

```
npm list <package-1> <package-2>
```

For Removing package.lock or yarn.lock file

```
rm -rf yarn.lock
```

For updating all packages

```
npm update -D
```

## Fixing Securtity Issues

To List the vulnerabilities

```
npm audit
```

if you got some vernabilities in project, to fix them use

```
npm audit fix
```

it will install all the package versions which are secure.
