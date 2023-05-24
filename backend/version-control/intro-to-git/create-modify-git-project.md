# create and add (stage) a file

```sh
git status

# adds a new file to git's index
# . tells git to index all files in current directory that have been added/modified
git add .

```

git's index is a staging area for commits. list of all file versions that will be part of the next commit

```sh
# create a commit
git commit fileName -m "a simple commit message"
```

commit comment guidelines
- write the first line to describe what the commit does to the tree
- first line no more than 50 characters followed by a blank line
- subsequent lines no more than 72 characters

```sh
git commit -a -m "modifying file"
```

-a flag adds all modified files, it won't add new files you still need `git add` for that

# make changes and track them with Git

`git diff` shows what has changed in a file

`git diff HEAD` compares the working tree with the last commit

default is to compare working tree to the index, it shows changes that haven't been staged

```sh
git commit -m "added boilerplate" index.html
```

```sh
# adds all untracked and not ignored files and the files that have changed
git add -A
git commit -m "small changes"

# compare differences between the latest commit and previous commit
git diff HEAD^
```

## add subdirectory

git only tracks changes to files not directories

```sh
touch subdirectory/.git-keep
git add subdirectory

rm subdirectory/.git-keep
code site.css

git add .
git commit -m "added a stylesheet"
```

git records the contents of files rather than deltas (changes) between them.

## list commits

```sh
git log --online

# x can be 1 for the latest commit, 2 for the one before and so on
git log -nX
```

# fix simple mistakes


```sh
# amend file lets you change history
# no-edit tells git to make the change without changing the commit message
git commit --amend --no-edit

# updates files in the working tree to match the version in the index or specified tree

# -- serves to separate the commit from the list of file paths
git checkout -- filename

```

```sh
git rm index.html
# wont work
git checkout -- index.html

# unstages the file deletion from git
git reset HEAD index.html
# restores the file on disk
git checkout -- index.html

# undos only the last commit
git revert HEAD
git reset --hard HEAD^

```

reset flags

`--mixed` default resets the index but not working tree, also moves the HEAD

`--soft` moves HEAD only leaves both index and working tree unchanged

`--hard` reset changes both the index and working tree to match specified commit

# lab

```sh
rm index.html

git checkout -- index.html

git rm index.html
# checkout won't work

# unstage deletion
git reset HEAD index.html

# recover the file
git checkout -- index.html

```

revert a commit

```sh
git commit -m "changed"
# show only the most recent commit entry
git log -n1

git checkout -- index.html

git revert --no-edit HEAD
```

# knowledge check

1. How do you include a new file to your Git index?

Using the 'git add' command

2. What does the -m tag do to your commit?

This tag allows you to add a message to your commit

3. Which of these is a good example of a commit message?

Add feature to alert admin for new user registration...

4. What is a way to fix one of your past commits without needing to make a new commit?

Utilizing the Git 'amend' tag

5. How do you choose between Git reset and Git checkout to recover a lost file?

Git checkout can recover a file you might have accidentally deleted. Git Reset, will recover a file you deleted using the 'git rm' command

6. When should you avoid changing a past commit?

Avoid amending commits that other developers have based their work on
