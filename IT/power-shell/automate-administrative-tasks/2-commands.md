# intro

the command returns an ouput, a type and has properties

# help system

`Get-Command` locate a command

`Get-Help` learn about the command

`-Name` flag to name the command

Update-Help can only fetch once per day use `-Force` to change this

updating fetches content from the internet by matching the computer's culture.

a culture is already installed on windows but not linux or macOS

`Update-Help` -UICulture en-US -Verbose

Get-Help Sections
- Name
- Syntax
- Aliases
- Remarks
- Parameters

Get-Help flags
- full
- detailed
- Examples
- Online
- Parameter

# discover objects

cmdlets return objects

response will be formatted

`Get-Member` piped on top of command to filter output

`Get-Process -Name 'name-of-process' | Get-Member`

object is returned from Get-Process and input in Get-Member

`Get-Process` gets a list of processes running

first line of response of `Get-Member` is the type 

use the type as a search argument 

`Get-Command -ParameterType Process`

filter `Get-Member` with `Select-Object`

expects a comma-separated value or a wildcard character

`Get-Process -Name 'name-of-process' | Get-Member | Select-Object Name, MemberType`