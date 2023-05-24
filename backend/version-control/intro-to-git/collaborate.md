# collaborate with pull

```sh
git clone

git request-pull -p origin/main
```

git clone accepts a file system path, SSH path or a URL

when cloning git creates a reference called remove using the name `origin`

origin is default location for git to pull changes from and push changes to

`git pull` copies changes from remote to local

`git push` copies only new commits and objects then checks them into working tree

`scp` copies everything

main branch on origin remote repository

`git remote` sets a repo as remote

`git pull` is a combination of `git fetch` and `git merge`

# lab

```sh
git init --initial-branch=main
git init -b main

git init --bare

git symbolic-ref HEAD refs/heads/main

git branch --set-upstream-to origin/main

git diff origin -- index.html

git stash

git pull
git stash pop
```
