# npm

##### Checking version

```
npm -v
npm --version
```

#### Package.json file

1. Manifest file with app info
2. Lists dependencies (name & version)
3. Specify if versions should be updated
4. Create npm scripts
5. Easily create with "npm init"

##### Creating new package json

```
npm init
npm init -y
npm init --yes
```

passing -y or --yes will use all defaults instead of asking questions

##### Changing default config of npm

```
npm config set init-author-name "Madhav Nagpal"
npm config set init-license "MIT"
```

##### Checking defaults

```
npm get init-author-name
npm config get init-author-name
```

##### Remove Defaults of npm config

```
npm config delete init-author-name
npm config delete init-license
```

# might need breaking this files into multiple

##### Installing package

```
npm install lodash
```
