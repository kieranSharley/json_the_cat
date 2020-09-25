// This file will be the one that users can run and provide the breed name to. 
// It will then require the breedFetcher file and call its exported function.

const requestBreed = require('./breedFetcher');

const breed = process.argv[2];

requestBreed(breed, (error, description) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log(description);
  }
});
