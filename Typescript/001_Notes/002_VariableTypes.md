# Variable Types

## Primitives

```
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Madhav";
let sentence: string = `My name is
${name}`;
let n: null = null;
let u: undefined = undefined;

// null and undefined are treated as subtypes of all other so boolean, number, string can be assigned null and undefined

let isNew: boolean = null;
```

## Array

```
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

## Tuples

Fixed number of values with different types

```
let person: [string, number] = ["one", 22];
```

## enum

```
enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
```

## any

```
let randomValue: any = 10;
randomValue = true;
randomValue = "Madhav";
```

## unknown

```
let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return Boolean(obj) && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

(myVariable as string).toUpperCase();
// by assertion of a type, typescript assumes we have done  type check manually
```

### multi types

```
let multiType: number | boolean;
multiType = 10;
multiType = true;
```

Why Using union of types instead of any

- adds restriction
- gives Intellisense support

&nbsp;

# Pros of defining types

- It helps with static type checking. (show error if diff type is being assigned)
- Accurate Intellisense (suggesting methods applied on datatype)
