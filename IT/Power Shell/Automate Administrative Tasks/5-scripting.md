# intro

scripting process of writing statements and storing them

steps usually include cmdlets calls, functions, variables, etc

features
- variables can store values
- functions are list of statements that produce outputs and be used as inputs to other commands
- flow control how execution paths are controlled (if, elseIf, Else)
- loops operate on arrays, inspect items, conditionally run a loop with Do-While
- error handling with try catch statements
- expressions represent values in powershell syntax
- .Net .Net core integrations

## run script

don't run a script if you don't understand it

protect you
- require to run scripts by using full path or relative patch
- execution policy is a safety feature, can stop you from unintended actions, group policy setting set execution policies for computers and users

shebang at the top of the script defines powershell as the interpreter

```ps1
# PI.ps1
$PI = 3.14
Write-Host "The value of $PI is $PI"
```

```bash
./PI.ps1
# will invoke the script, extension is not required
```

## execution policy

`Get-ExecutionPolicy` returns current execution policy

on linux and macOS returns `Unrestricted` can't be changed

`Set-ExecutionPolicy` `-ExecutionPolicy` parameter `Default` sets to `Restricted` and `RemoteSigned` on Windows Server

`Restricted` can't run scripts only commands

`Remote-Signed` scripts written on local machine can run, downloaded scripts need to be signed by a digital signature from trusted publisher

## variables

define variables with `$`

`Write-Host` or `Write-Output` will output text using single or double quotation marks

single prints literal text

double quotation interpolates so the value of variables is interpreted and printed

back tick ` escapes the variable to not interpolate

write expressions within parenthesis `$()`

## scope

scope defines where constructs can be read and changed

global scope constructs continue to exist after session ends

script scoe a variable or function define in the file are in this scope

create a variable in the script file and target the global scope prepending it with `global` keyword

local scope is the current scope, can be global or any other

scope rules
- scopes can nest, parent/children scopes
- items are visible in current and child scopes, change behavior by marking item private within the scope
- items can be changed in the created scope only

```ps1
$test = "hi"

Write-Host $test 
```

## profiles

script that runs when powershell starts

customize environment, change background colors, errors, etc

all users, hosts = `$PSHOME\Profile.ps1`

all users, current host = `$PSHOME\Microsoft.PowerShell_profile.ps1`

current user, all hosts = `$Home[Documents]\PowerShell\Profile.ps1`

current user, current host = `$HOME[Documents\PowerShell\Microsoft.PowerShell_profile.ps1]`

create a profile

`$Profile | Select-Object *` 

select profile type and create a text file 

`New-Item -Path $Profile.CurrentUserCurrentHost`

add customizations

# scripting

setup a profile

```ps1
$Profile | Select-Object * 

# create a profile for current user, current host

New-Item `
  -ItemType "file" `
  -Value 'Write-Host "Hello <replace with your name>, welcome back" -foregroundcolor Green ' `
  -Path $Profile.CurrentUserCurrentHost -Force
```

create a file

```ps1
New-Item -Path . -Name "PI.ps1" -ItemType "file"
code PI.ps1
```

add code

```ps1
$PI = 3
Write-Host "The value of `$PI is now $PI, inside the script"
```

run the script

```ps1
./PI.ps1
```

# parameters

