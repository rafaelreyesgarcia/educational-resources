# intro

command line shell and scripting language

cmdlets wrap tasks

commands run on local or remote machines

tasks
- manage cloud resources
- manage users
- continuous integration/continous delivery (CI/CD)

# what is power shell

command line shell and scripting language

a shell executes text commands input into a computer console

benefits
- faster interaction than GUI
- run batches of commands, task automation
- interact with resources (cloud, remote, local)
- store commands and scripts for auditing

features
- help system to learn commands and parameters
- pipeline to run commands sequentially
- aliases alternate names to run commands

different from other shells
- uses objects as I/O less formatting and extracting
- cmdlets have a common runtime

# locate commands

cmdlets are compiled developed in .NET or .NET core

verb-noun standard.

`Get-Verb` approved list of verbs

`Get-Command` list of all cmdlets on system

`Get-Help` invoke the help system

`help` paginate response of Get-Help

`Get-Member` response of a cmdlet is an object with properties. This shows detail description of properties.

`Get-Random` get is the verb and random is the noun

flags can help you filter either one

flags need a string value

a flag can accept a regex

`Get-Command` -Verb Get -Noun a-noun*

