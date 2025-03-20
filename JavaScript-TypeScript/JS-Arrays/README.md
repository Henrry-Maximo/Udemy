# *Working with Arrays*

## Creating an Array using Array Literal

- The element indices are 0, 1 e 2;

```jsx
const namesLiteral = ['', '', '']; // Array Literal
namesLiteral[2] = ''; // New the array && changing the value at index 2 (third element)
```

## Creating an array using the Array Constructor

- This method creates an array with the same values

```jsx
const namesConstructor = new Array('', '', '', '');
```

- Using the delete operator to remove the element at index 2
    - ‘delete’ removes the value but does not change the array length; index 2 becomes “undefined”
    - output: [’’, ‘’, <1 empty item>] (display value may how “undefined” at index 2)

```jsx
delete namesConstructor[2]; // Appending delete in index (third element in array)
```

## Using value by reference and copy using the Spread Operator