'use strict';

const one = true;

if (one) {
  const jonas = {
    firstName: 'jonas',
    print: () => {
      console.log(this);
    },
  };
  jonas.print();
}
