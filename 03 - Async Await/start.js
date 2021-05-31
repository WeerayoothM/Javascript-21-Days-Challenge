(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  function simulateAsyncAPI(text, timeout) {
    setTimeout(() => console.log(text), timeout);
  }

  simulateAsyncAPI("A", 1000);
  simulateAsyncAPI("B", 500);
  simulateAsyncAPI("C", 100);

  // 2. Callback
  function simulateAsyncAPI2(text, timeout, callback) {
    setTimeout(() => {
      console.log(text);
      if (callback) callback();
    }, timeout);
  }

  simulateAsyncAPI2("A", 1000, () => {
    simulateAsyncAPI2("B", 500, () => {
      simulateAsyncAPI2("C", 10);
    });
  });

  // 3. Promise
  function simulateAsyncAPI3(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "B") return reject("B got rejected");
        console.log(text);
        resolve(); // เป็นตัวบอกว่า การทำงาน เสร็จแล้ว
      }, timeout);
    });
  }
  simulateAsyncAPI3("A", 1000)
    .then(() => {
      return simulateAsyncAPI3("B", 500);
    })
    .then(() => {
      return simulateAsyncAPI3("C", 10);
    })
    .catch((error) => {
      console.log(error);
    });

  // 4. Async/Await
  function simulateAsyncAPI4(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "B") return reject("B got rejected");
        console.log(text);
        resolve(); // เป็นตัวบอกว่า การทำงาน เสร็จแล้ว
      }, timeout);
    });
  }

  async function run() {
    try {
      await simulateAsyncAPI4("A", 1000);
      await simulateAsyncAPI4("B", 1000);
      await simulateAsyncAPI4("C", 1000);
    } catch (error) {
      console.log(error);
    }
  }
  run();
})();
