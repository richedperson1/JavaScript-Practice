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
