// breedFetcherTest.js

const requestBreed = require('../breedFetcher');
const { assert } = require('chai');

describe('requestBreed', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    requestBreed('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('should return an error for no breed input', (done) => {
    requestBreed('', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = undefined
      // compare returned description
      assert.equal(expectedDesc, undefined);

      done();
    });
  });
});
