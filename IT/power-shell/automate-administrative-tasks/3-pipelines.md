# selecting data

most commands operate on objects

objects have properties

`Get-Member` returns information about an object
- type
- properties
- methods

a command that outputs to the screen, automatically runs `Out-Default`

if output is collection of objects, powershell determines object type to show a registered view

`Select-Object` overrides default and choose what list of properties to view

`Format-Table` or `Format-List` can display the table formatted

`Get-Process chrome | Format-List -Property *`

the wildcard lists all attributes and values

output displays presentation name not real names

real names can be found with `Get-Member`

`Get-Process chrome | Get-Member -Name C*`

now use `Select-Object` to only show what you want

`Get-Process chrome | Select-Object -Property Id, Name, CPU`

`Sort-Object` sorts output data by using default properties

# formatting and filtering

filtering left, filter for results as soon as possible

statements run from left to right

```ps1
Get-Process | Select-Object Name | Where-Object Name -eq 'name-of-process'
```

formatting right, formatting should be the last thing to do

