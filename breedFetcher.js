const request = require('request');



const requestBreed = function (breed, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error.code, undefined);
      return;
    }
    if (!body) {
      callback(`could not find a description for ${breed}`, undefined);
    } else {
      let data = JSON.parse(body);
      const breedObj = data[0];
      if (!breedObj) {
        callback(`could not find a description for ${breed}`, undefined);
      } else {
        callback(undefined, breedObj.description);
      }
    }


  });
};


module.exports = requestBreed;


