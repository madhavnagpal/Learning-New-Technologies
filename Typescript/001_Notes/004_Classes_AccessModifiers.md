# Class

```
class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Madhav");
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delegating tasks");
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();

```

# Access Modifiers

- public
- private
- protected

### public

- default access modifier
- accessible from everywhere

### private

```
class Employee {
  private employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
}
accessed in Employee class only (not even accessible by derived class)
```

### protected

```
class Employee {
  protected employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
}
accessed in Employee class and its derived classes
```
