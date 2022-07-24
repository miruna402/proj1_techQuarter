//  0. Choose a public api, make a call and get the result by using both then method and async/await as well.
// const asyncFunc=async() => {
//     const res=fetch("https://api.genderize.io?name=luc");
//     console.log("res",res.ok);
//      };
// asyncFunc();
  //////////////

//   const apiCats = fetch('https://catfact.ninja/fact1');
//   .then(response => {
//     console.log(apiCats);
// })
// .catch(error => {
//     console.log("Error", error);
// });

fetch("https://catfact.ninja/fact1")
  .then((response) => {
    // let result = res.json();
    return response.json(); //the response of the fetch
  })
  .then((data) => {
    console.log(data); //perform the action of the response
  })
  .catch((error) => {
    console.log("Error catch", error);
  });


//     const asyncFunc=async() => {
//     const res=fetch("https://api.genderize.io?name=luc");
//     console.log("res",res.ok);
//   };
//   asyncFunc();

  async function ExampleApi() {
    const response = await fetch("https://catfact.ninja/fact1");
    const json = await response.json();
    console.log(json);
  }


