// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {
  static log(v: string) {
    const a = [1, 2, 4].find(x => x === 1);
    console.log('v', v, a);
  }
}
