// Aisa koi bhi code jis me time lagta use ham callback queue me dal dete hay

// Following are the options to do the async code

// 1. settimeout
// 2. setinterval
// 3. fetch api
// 4. Axios
// 5. Promise

// all are come under async code it self

// let used the fetch

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((res) => console.log(res));

// Event loop in the JS
// JS has two memory first one is call stack and second is callback queue
// All running things are present in the call back while async code are in the callback queue

// When all process from the call stack is empty then it take the async code and those
//! who check continueosly wheather call stack or not is event loops.
