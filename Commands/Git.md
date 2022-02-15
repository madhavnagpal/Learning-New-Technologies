# Git-Commands

### Initial Setup

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://madhavnagpal@github.com/madhavnagpal/crwn-clothing.git
git push -u origin main
```

### Some Basic Commands

```
git status
git add .
git commit -m "initial commit"
git push
git remote add origin <url>
```

### Deleting a git repo locally

```
rm -rf .git
```

### Commands for using branches

```
git branch                 // getting list of branches
git branch <branch-name>   //creating a new branch
git checkout <branch-name>
```

#### Checking value of remote

```
git remote -v
```

#### Updating remote

```
git remote set-url origin https://madhavnagpal@github.com/<git-repo-name>
```

#### To remove branches that are deleted on dev ( or merged ) from local.

```
git fetch -p && for branch in $(git branch -vv | grep ': gone]' | awk '{print $1}'); do git branch -D $branch; done
```

#### Reseting local branch to remote

```
git reset --hard origin/<branch_name>
```

## Submodules

- Submodules allow you to keep projects in separate repositories but still be able to reference them as folders in the working directory of other repositories.
- A submodule can be located anywhere in a parent Git repository’s working directory and is configured via a .gitmodules file located at the root of the parent repository. This file contains which paths are submodules and what URL should be used when cloning and fetching for that submodule. Submodule support includes support for adding, updating, synchronizing, and cloning submodules.

#### Cloning a repository that contains submodules

```
git clone --recursive [URL to Git repo]
```

#### If you already have cloned a repository and now want to load it’s submodules

```
git submodule update --init
```

#### if there are nested submodules:

```
git submodule update --init --recursive
```

#### Downloading multiple submodules at once

download up to 8 submodules at once

```
git submodule update --init --recursive -j 8
```

#### Pulling with submodules

pull all changes in the repo including changes in the submodules

```
git pull --recurse-submodules
```

pull all changes for the submodules

```
git submodule update --remote
```

#### Executing a command on every submodule

```
git submodule foreach 'git reset --hard'
```

including nested submodules

```
git submodule foreach --recursive 'git reset --hard'
```

### Adding a submodule to a Git repository and tracking a branch

1 adds a new submodule to an existing Git repository and defines that the master branch should be tracked

```
git submodule add -b master [URL to Git repo]
```

2 initialize submodule configuration

```
git submodule init
```

#### update submodule in the master branch

skip this if you use --recurse-submodules and have the master branch checked out

```
cd [submodule directory]
git checkout master
git pull
```

#### commit the change in main repo

```
cd ..
git add [submodule directory]
git commit -m "move submodule to latest commit in master"
git push
```

#### Delete a submodule from a repository

```
git submodule deinit -f — mymodule
rm -rf .git/modules/mymodule
git rm -f mymodule
```

#### checking out current commit

```
git checkout --recurse-submodules -- .
```

#### updating all submodules

```
git submodule foreach git pull origin master
```
