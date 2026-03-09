# JavaScript Basic Questions

### 1️⃣ Difference between var, let, and const

* **var**: Old way to declare variable. Value change kora jay, abar same variable declare kora jay.
* **let**: Value change kora jay, but same variable abar declare kora jay na.
* **const**: Value change kora jay na.

---

### 2️⃣ What is Spread Operator (...)?

Spread operator (`...`) use kora hoy array ba object er value copy ba add korar jonno.

Example:

```javascript
const arr = [1,2,3];
const newArr = [...arr,4];
```

---

### 3️⃣ Difference between map(), filter(), and forEach()

* **map()** → array er value change kore new array banay.
* **filter()** → condition diye kichu value select kore.
* **forEach()** → array er protita value er upor kaj kore, but new array dey na.

---

### 4️⃣ What is an Arrow Function?

Arrow function holo short way te function lekha.

Example:

```javascript
const add = (a,b) => a + b;
```

---

### 5️⃣ What are Template Literals?

Template literals diye string er moddhe variable use kora jay.
Backtick `` ` `` use kora hoy.

Example:

```javascript
const name = "Rahim";
const text = `My name is ${name}`;
```
