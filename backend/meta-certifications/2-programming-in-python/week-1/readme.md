# running code command line vs IDE

vs code is superior for running than the terminal or command line.

vs code features
- whitespace and indentation helpers
- syntax highlighting
- debugging
- auto-completion

# data types

a data type is an attribute associated with data that tells a computer system how to interpret its value.

each data type is represented by a class

main literal types
- numeric
- sequence
- dictionary
- boolean
- set

## numeric

numeric can be
- integer
- float
- complex number

**integer**
whole numbers

**float**
can be broken down in decimals

**complex**
can be made of real and imaginary numbers `2 + 2j`

## sequence

sequence can be
- string
- list
- tuples

sequence types can contain one or more of the same type in an ordered list.

can be accessed based on the index in the sequence.

**string**
sequence of characters enclosed in either single or double quotes.

**list**

sequence of one or more different or similar types.

essentially an array holding any type where items can be accessed by their index.

enclose data in square brackets.

```py
example_list = [1, 'hello', 4.5, 'A']
type(example_list)

<class 'list'>

print(example_list[1])
```

**tuples**
contain an ordered sequence of one or more types.

main difference with lists is that tuples are immutable so values inside the tuple can't be modified or changed.

wrap data in parentheses

```py
example_tuple = (1, 'hello', 4.5, 'A')
```

## dictionary

store data in a key/value object structure.

each value can be accessed by its key.

can store any data type.

wraps data in curly braces.

```py
ed = {'a':22, 'b':44.4}
ed['a'] # accessing the 'a' key value which would be 22
```

## boolean

represent true or false

```py
type(True)
<class 'bool'> # checking the type returns the class of the data type
```
## set

unordered non-indexed collection of non-repeated values
wraps data in curly braces

```py
example_set = {1, 'hello', 4.5, 'A'}
```