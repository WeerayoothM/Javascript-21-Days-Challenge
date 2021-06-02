(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  function printName(params) {
    console.log(this);
  }
  printName();

  // 2. How to know what is "this"?
  function printName() {
    console.log(this);
    console.log(`My name is ${this.name}`);
  }
  printName();

  // 2.1 Invoker object
  const weerayooth = { name: "Weerayooth", printName };
  const jaja = { name: "Jaja", printName };
  weerayooth.printName();
  jaja.printName();

  // 2.2 Global object (window, global)
  name = "Global";
  printName();

  // 2.3 Constructor function
  function Person(name) {
    this.name = name;
    this.printName = printName;
  }
  const weerayooth = new Person("Weerayooth");
  weerayooth.printName();

  // 3. call(), apply(), and bind() --> set this
  function printName(nationality, city) {
    console.log(this);
    console.log(
      `My name is ${this.name}, I'm ${nationality} and am living in ${city}`
    );
  }
  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);

    const printWeerayooth = printName.bind(this);
    printWeerayooth(this.nationality, this.city);
  }
  const weerayooth = new Person("Weerayooth", "Thai", "Bangkok");
})();
