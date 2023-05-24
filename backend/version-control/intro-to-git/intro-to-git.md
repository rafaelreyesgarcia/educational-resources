# what is version control?

version control system is a program that track changes to a collection of files.

VCS goal is to recall earlier versions of individual files

software configuration management is another name SCM

branches allow experimental changes without affecting the main branch

## distributed version control

project's complete history is stored both on the client and server

edit files without a network connection

concepts

- working tree set of nested directories and files

- repository directory located at the top level of a working tree. where git keeps history and metadata.

- hash a number produced by a hash function representing the contents of a file or an object as a fixed number of digits. git uses 160bit hashes. if a file and date stamp changes, the hash changes

- objects are uniquely identified by an SHA-1 hash. a blob object contains an ordinary file, a tree represents a directory a commit object represents a specific version of a working tree a tag is a name attached to a commit

- commit means to make a commmit object, committing changes so others can see them

- branch is a named series of linked commits. the most recent commit is the head. Main is the default branch often named master.

- remote is a named reference to another git repository. git creates a remote named origin that is default remote to push and pull operations.

- commands, subcommands and options define operations you want git to perform

## git and github

git is a distributed version control system

github is a cloud platform that uses git as its core technology

```sh
git --version

# define global variables
git config --global user.name "rafael"
git config --global user.email "rafaelreyesgarcia93@gmail.com"

# list global variables
git config --list

mkdir project
cd project

# initialize a git repository
git init --initial-branch=main
git init -b main

# show status of working tree
git status

# show contents of the folder
ls -a

git --help

```

# basic git commands

`git status` displays the state of the working tree. Sees which changes are currently being tracked by Git

`git add` prepares changes to commit them. Changes in files that have been added but not yet committed are stored in a staging area

`git commit` you can save staged changes after committing

a commit is the data that gives the changes

`git log` allows to see information about previous commits

`git help`