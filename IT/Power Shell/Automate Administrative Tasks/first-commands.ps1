# check powershell installation (version and platform)
$PSVersionTable

# object properties of the command are accessed with dot notation
$PSVersionTable.PSVersion

# filter cmdlets by noun

Get-Command -Noun a*

Get-Command -Verb Get - Noun a-noun*

Get-Command -Noun File*

Get-Command -Verb Get -Noun File*

# help system information for a command

Get-Help -Name Get-Help

Update-Help 

Get-Help Get-FileHash -Examples

Get-Help -Name Get-FileHash

help Get-FileHash

# use Get-Member to filter output

Get-Process -Name 'name-of-process' | Get-Member

Get-Command -ParameterType Process

# filter columns you want from Select-Object
Get-Process -Name 'name-of-process' | Get-Member | Select-Object Name, MemberType

# List processes

Get-Process

# Get-Member will return the type at the top of response 

Get-Process -Name 'chrome' | Get-Member

# first line System.Diagnostics.Process

Get-Command -ParameterType Process

# Get-Member details an object

Get-Process | Get-Member

# format output
Get-Process chrome | Format-List -Property *

# find real names not presentation names

Get-Process chrome | Get-Member -Name C*

# use Select-Object to show only what you need

Get-Process chrome | Select-Object -Property Id, Name, CPU

# sort data by properties

Get-Process | Sort-Object -Descending -Property Name

# sort by more than one column

Get-Process | Sort-Object -Descending -Property Name, CPU

# use custom expressions to sort by column and control the sort order for each column

Get-Process 'some process' | Sort-Object -Property @{Expression = "Name"; Descending = $True}, @{Expression = "CPU"; Descending = $False}

# start a powershell session in a terminal

pwsh 

# CPU use greater than 2 CPU order descending show first 3 processes
Get-Process | Where-Object CPU -gt 2 | Sort-Object CPU -Descending | Select-Object -First 3

# not filtering left
# grabs all processes, formats response and filters at the end
Get-Process | Select-Object Name | Where-Object Name -eq 'name-of-process'

# filter first, format after
Get-Process | Where-Object Name -eq 'name-of-process' | Select-Object Name

# built-in filtering with parameters
Get-Process -Name 'name-of-process' | Select-Object Name

# formatting first destroys the object

Get-Process 'some process' | Select-Object Name, CPU | Get-Member

# will not return the right type
Get-Process 'some process' | Format-Table Name,CPU | Get-Member

Get-Process 'some process' | Select-Object Name, Cpu

# cmdlets to format

Format-Table

Format-List

# lists all members
"a string" | Get-Member

# formats the output
"a string" | Get-Member | Format-List

# find members of a response starting with F
Get-Process chrome | Get-Member -Name F*

# empty response due to formatting first
Get-Process chrome | Format-Table Name, CPU | Select-Object Name, CPU

# filtering left

Get-Process -Name chrome | Select-Object Name

# Hello World Script

# New-Item creates a ps1 file
# code opens the file defined
New-Item HelloWorld.ps1 code HelloWorld.ps1

# get full help for write-output

Get-Help -Name 'Write-Output' -Full

# challenge

# create a file

New-Item GettingStarted.ps1

