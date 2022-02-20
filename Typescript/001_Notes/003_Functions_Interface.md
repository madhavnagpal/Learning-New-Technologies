# Functions

```
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

Optional parameter

```
function add(num1: number, num2?: number): number {
  return num1 + num2;
}
```

Default value (optional parameter with default value instead of undefined)

```
function add(num1: number, num2: number = 0): number {
  return num1 + num2;
}
```

# Interface

```
interface Person {
  firstName: string;
  lastName?: string; // optional property
}

function fullName(person: Person) {
  // ...
}

let p: Person = {
  firstName: "Bruce",
  lastName: "Lee",
};

fullName(p);
```
