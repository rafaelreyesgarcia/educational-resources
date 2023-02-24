# sorting algorithms

sorthing algorithms can be **linear** or **binary**

sorting algorithm implementations
- selection
- insertion
- quicksort

> binary trees and heaps are designed to retain data in a sorted manner.

order could be
- alphabetically
- sequentially
- chronologically
- size, hue, color, etc

there's an ascending and descending order.

the ordering can be permuted (reordered) or created by making a copy and keeping an original list.

## selection sort

early approach to sorting.

searches through a list to identify smallest element.

then the smallest element is switched with the first element so smallest element is placed at the top.

this step is repeated for every element in the list until the list has been reordered from smallest to largest.

```js
const list = [35, 46, 36, 9, 15, 6, 3];

// index of elements [0, 1, 2, 3, 4, 5, 6]

```

steps
- a comparison is made between the element at index 0 with every element until the smallest is found.
- first element and smallest element swap places.
- the step repeats in each index until all values are sorted out from smallest to largest.

### question

If provided with the following array of numbers and you applied the selection sort approach. How many swaps must occur before the array is sorted?

```js
[9, 2, 4, 8, 7, 90] // original
[2, 9, 4, 8, 7, 90] // 1
[2, 4, 9, 8, 7, 90] // 2
[2, 4, 7, 8, 9, 90] // 3

[35, 46, 36, 9, 15, 6, 3]
[3, 46, 36, 9, 15, 6, 35]
[3, 6, 36, 9, 15, 46, 35]
[3, 6, 9, 36, 15, 46, 35]
[3, 6, 9, 15, 36, 46, 35]
[3, 6, 9, 15, 35, 46, 36]
[3, 6, 9, 15, 35, 36, 46]

[35, 46, 36, 9, 15, 6, 3] // index 0 has nothing larger to the left, remains
[35, 46, 36, 9, 15, 6, 3] // index 1 has nothing larger to the left, remains
[35, 36, 46, 9, 15, 6, 3] // index 2 has index 1 larger, they swap, checks again to index 0, no further swap necessary.
[9, 35, 36, 45, 15, 6, 3] // index 3 is smaller than index 2, they swap, index 2 smaller than index 1, swap, index 1 smaller than index 0, swap
[9, 15, 35, 36, 45, 6, 3] // index 4 has index 3 larger, they swap, has index 2 larger, swap, has index 1 larger, swaps, compares to 0 index, no swap
[6, 9, 15, 35, 36, 45, 3] // index 5 has index 4 larger, swap, has index 3 larger, swaps, has index 2 larger, swaps, has index 1 larger, swaps, has index 0 larger swaps, smallest
[3, 6, 9, 15, 35, 36, 45] // index 6 has index 5 larger swaps... becomes index 0 the smallest

```

## quicksort

operates on the principle of pivots

algorithm selects an element in the array as the pivot.

all items in the array larger than this value are moved to the right of the pivot, and smaller to the left.

process is repeated for both sides of the pivot until all are sorted.

```js
[35, 46, 36, 9, 15, 6, 3]  // 9 is the pivot

[6, 3, 9, 35, 46, 36, 15] // the right side only needs to compare two elements so 3 is sorted as smallest

[3, 6, 9, 35, 46, 36, 15] // 36 is selected as new pivot
[3, 6, 9, 35, 15, 36, 46] // the left side of the pivot has only 1 element, right only two elements to compare, 15 is smallest
[3, 6, 9, 15, 3 5, 36, 46]

```

# time and space complexity in sorting algorithms

selection sort and quick sort and common algorithms to sort data in an array

## selection sort

iterate over an array of items from left to right.

first index, iterate over entire array and swap with lowest value found to the right

worst case time complexity O(n^2)

average case time O(n^2)

best case time O(n^2)

space complexity O(1) auxiliary

time complexity is determined in relation to transactions enacted.

given a list of size `n`, compiler searches each entry in the list, identifying the smallest item.

```sh
for(i = 0; i < n-1; i++) # the length of the list must be searched n - 1 times.
int min_index=List[i] # temporary value that holds the lowest value, initialized to index 0 as the loop starts at i = 0
    for(j=i+1; j<n;j++) # inner loop that iterates throught the loop n times ( the length of the list)
        if(List[j] < List[min_index]) # if the position in List[j] is smaller than min_index...
            min_index=j # asign j value to min_index as the smallest value
    swap(List[i], List[min_index]) # a pseudofunction that swaps the current min_index for the position i
```

- worse case - a list sorted in reverse order, how many comparisons are made? inner and outer loop run n times `O(n^2)`

- average comparison - regardless of the order, every item still needs to be checked in both loops so `O(n^2)`

- best comparison - regardless of the items, every item needs to be checked in both loops `O(n^2)`

- space complexity - in-place swap is being performed, no temporary array is required. there's temporal variables `i`, `j` for the loop iterations and `min_index`, these are not dependent to the size so `O(1)`

time complexity increases with the size of the list.

## quicksort

divide and conquer methodology

give array, a pivot is determined to split the array

all values greater go to the right, all values smaller go to the left.

complexities of quicksort

- worst case time complexity `O(n^2)`
- average case `O(n log n)`
- best case `O(n log n)`
- space complexity `O(n)`

quicksort steps
- select a pivot point
- split list in two, left and right from the pivot
- variables `i` iterates from left to right on the left of pivot, `j` repeat from right to left on left side.
- variables `i` look for a value greater than or equal to pivot. `j` variables look for value less than or equal to pivot.
- `j < i` values at index locations are swapped. repeated until `i` and `j` meet the pivot
- partition the list into two, repeat the process on the new pivot.
- apply the algorithm recursively

```sh
QuickSort(List, low, high)
  if(low<high)
  pivot=partition(List, high, low)
  QuickSort(List, how, pivot - 1)
  QuickSort(List, pivot+1, high)
Partition(List, high, low)
  pivot=arr[high]
  i=(low-1)
  for (j = low; j <= high-1; j++)
  if(List[j] < pivot)
    i++
    swap(List[i], List[j])
  swap(arr[i+1], List[j])
  return i + 1
```

worst case time - most significant element is chosen as pivot point causing the loop to iterate over every element `n` from the left.
`O(n^2)`

average case time - average pivot selected at every call reducing additional iterations required. `n` iterations and ever-decreasing `logn` iterative calls `O(n*logn)`

best case time - middle value is always selected, iteration space is halved at every iteration `O(n*logn)`

space complexity - function call and variables are retained on the stack while recursive calculations are performed. in-place swap means no new array is created so `O(log n)`

# searching algorithms

linear and binary search are common searching algorithms.

when a collection of data is presented, we might need to identify specific elements within this data.

given a hash-table, is there a key-value pair that matches the passed key?

we can search for the largest, smallest, median number of a collection.

what to return when there's no value found that matches? safeguards should be used to defend against this issue

should the search return the first instance or the last?


## linear search

simplest search is linear search.

starts at the start of the index and searches until the appropiate element is found.

best case is `O(1)` (the first element matches) and worst case `O(n)` (every item (n) must be compared)

heap and binary trees have inherent sorting tendencies.

useful to take a data structure and apply a sorting algorithm before applying a search algorithm.

## binary search

first check the halfway point and determines if element is greater or smaller than target element

if the pivot is less than the target element, the left half is discarded.

only the right half is queried for middle value.

if middle is less than target, left is discarded and right half is queried in next iteration.

algorithm halves the search space at each iteration.

quicker approach than linear but requires data to be sorted before searching.

if data is read more often than updated the binary search is recommended.

best case - `O(1)`
worst case - every iteration the list is halved `O(log n)`]]

if the list is updated constantly, having to sort the list before the search might be costly.

# time and space complexity in searching algorithms

## linear search

search starts at first item and iterates until the target item is found and no more items are left to check

**worst case** - item absent from the list so it took n times to search `O(n)`

**average case** - element is found in the middle. `O(n)`

**best case** - item is found at the starting index `O(1)`

space complexity - no additional space is required to perform the search. `O(n)` only as large as the n items stored in the list

## binary search

identify middle element (pivot point) on a **sorted** list.

compare target element to it and discard half that is less than target.

halving at mid point is repeated until target element is found and there's no more list to half.

worst case - item is absent from the list `O(log n)`
logical operators (greater than, less than) are used to remove items so only `n/2` is checked first then `n/4` then `n/8` and so on

average case - element is found after several iterations `O(log n)`

best case - item is found at starting index no further checks are required `O(1)`

space complexity - no additional space is required `O(n)`

more efficient than linear search but time to sort the array is important as binary search can only be performed in a sorted list.

# knowledge check - sorting and searching

1. Given an array of 6 numbers -> 6, 8, 19, 48, 9, 90 and applying a selection sort.  How many swaps must occur before the array is sorted?

2

The array is mostly ordered so only have to swap 19 and 9; and then 48 and 19.

2. Given an array of numbers and a target value, using a loop, what is the worst-case time complexity to check if the number is present in the array?

`O(n)` To determine if a value was there, using a loop would mean checking every element in the array.

3. A binary search can only be performed on a sorted dataset.

true

4. Given the following snippet of pseudocode:

```
array = []

n = 4

FOR i = 0 TO n:

  FOR j = 0 TO n:

    array.add(i*j)
```

`O(n^2)`

As n is looped through twice, the number of computations will reflect n*n or n^2.

5. What advantage is there to changing element location using an in-place swap?

It reduces the amount of space taken by removing the need to create another variable in memory.

In-place swapping is done to arrays in place instead of creating new ones and storing the sorted data there. It is a good process for reducing the space complexity of a solution.

