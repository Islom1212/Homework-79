// // Challenge 1: Error Handling
// // Type: (a: number, b: number) => number

// function safeDivide(a: number, b: number) {
//   try {
//     if (b === 0) {
//       throw new Error("Error!");
//     }
//   } catch (err) {
//     return 0;
//   } finally {
//     if (b !== 0) {
//       let result = a / b;
//       return Number(result.toFixed(1));
//     }
//   }

//   // TODO: try/catch/finally ishlatib, 0 ga bo‘lish xatoligini ushlang
// }

// console.log(safeDivide(10, 3));
// console.log(safeDivide(10, 0));

// //
// //
// //

// // Challenge 2: Object methods
// // Type: (obj: { [key: string]: any }) => string[]
// type User = {
//   name: string;
//   age: number;
//   country: string;
//   isActive: boolean;
// };
// const user = {
//   name: "Ali",
//   age: 25,
//   country: "Uzbekistan",
//   isActive: true,
// };

// function getStringValues(obj: User) {
//   return Object.keys(obj)
//     .filter((key) => typeof obj[key as keyof typeof obj] === "string")
//     .map((key) => obj[key as keyof typeof obj]);
//   // TODO: Object.values ishlatib, faqat string qiymatlarni qaytaring
// }

// console.log(getStringValues(user));

// //
// //
// //

// // Challenge 3: Function methods (call, apply, bind)
// // Type: function greet(greeting: string): string
// const person = {
//   name: "Arslonbek",
// };

// function greet(this: any, greeting: string) {
//   this.name = greeting;
//   return this;
// }

// // 1. call
// console.log("call result:", greet.call(person, "Hi-1"));

// // 2. apply
// console.log("apply result:", greet.apply(person, ["Hi-2"]));

// // 3. bind
// const boundGreet = greet.bind(person, "Hi-3");
// console.log("bind result:", boundGreet());

// //
// //
// //

// // Challenge 4: Function types (void, non-void)
// // Type:
// // logMessage: (message: string) => void
// // sum: (a: number, b: number) => number
// function logMessage(message: string): void {
//   console.log(message);
//   // TODO: Faqat console.log qilish kerak
// }

// function Sum(a: number, b: number): number {
//   return a + b;
//   // TODO: a + b ni qaytaring
// }

// logMessage("Hello world");
// console.log("sum result:", Sum(3, 7));

// //
// //
// //

// // Challenge 5: HOF + Callback
// // Type: (arr: number[], cb: (n: number) => number) => number[]
// function processData(numbers: number[], callback: (n: number) => number) {
//   return numbers.map(callback);
//   // TODO: map ishlatib, har bir elementga callback ni qo‘llang
// }

// const doubled = processData([1, 2, 3], function (n: number): number {
//   return n * 2;
//   // TODO: har bir elementni 2 ga ko‘paytiring
// });

// console.log("processData result:", doubled);

// //
// //
// //

// // Challenge 6: Declaration vs Expression vs Arrow
// // Type: (n: number) => number

// // 1. Function Declaration
// function square1(n: number) {
//   return n * n;
//   // TODO: n * n qaytaring
// }

// // 2. Function Expression
// const square2 = function (n: number) {
//   return n * n;
//   // TODO: n * n qaytaring
// };

// // 3. Arrow Function
// const square3 = (n: number) => {
//   return n * n;
//   // TODO: n * n qaytaring
// };

// console.log("square1:", square1(5));
// console.log("square2:", square2(5));
// console.log("square3:", square3(5));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        secondary: "#3498db",
      },
      screens: {
        sm: "390px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
