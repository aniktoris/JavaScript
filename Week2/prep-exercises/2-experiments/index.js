"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for(let i=0; i<sampleSize; i++){
    const randomInt = Math.floor(Math.random()*6) + 1;
    valueCounts[randomInt-1] +=1;
  }

  const results = [];

  for(const valueCount of valueCounts){
      const percentage = 100*valueCount/sampleSize;
      results.push(percentage.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  const allResults = [];

  for(const sampleSize of sampleSizes){
    const experimentResults = runExperiment(sampleSize);
    allResults.push([experimentResults, sampleSize]);
  }
  return allResults;
}

const results = main();

for(const [experimentResults, sampleSize] of results){
  console.log(experimentResults, sampleSize);
}
