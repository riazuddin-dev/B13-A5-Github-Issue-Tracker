# JavaScript Basic Questions

### 1️⃣ Difference between var, let, and const

* **var**: Old way to declare a variable. Value can be changed and it can be declared again.
* **let**: Value can be changed but it cannot be declared again in the same place.
* **const**: Value cannot be changed after declaring.

---

### 2️⃣ What is the Spread Operator (...)?

The **spread operator (...)** is used to copy or add values from an array or object.

Example:

```javascript
const arr = [1,2,3];
const newArr = [...arr,4];
```

---

### 3️⃣ Difference between map(), filter(), and forEach()

* **map()** → Changes each value and creates a new array.
* **filter()** → Selects values based on a condition.
* **forEach()** → Runs a function on each array value but does not return a new array.

---

### 4️⃣ What is an Arrow Function?

An **arrow function** is a short way to write a function.

Example:

```javascript
const add = (a,b) => a + b;
```

---

### 5️⃣ What are Template Literals?

**Template literals** allow variables inside a string.
Backticks `` ` `` are used instead of quotes.

Example:

```javascript
const name = "Rahim";
const text = `My name is ${name}`;
```
