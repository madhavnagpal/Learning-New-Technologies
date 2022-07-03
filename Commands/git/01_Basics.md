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

#### Knowing local credentions

```
git config --global user.email
```
