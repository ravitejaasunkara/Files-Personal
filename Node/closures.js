function hello() {
    var count = 0;
    return {
      increment: function increment() {
        count++;
      },
      decrement: function decrement() {
        count--;
      },
    };
  }
  var res = hello();
  console.log(res.increment());