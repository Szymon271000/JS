function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArray(length, min, max) {
  return Array.from({ length }, () => randomInt(min, max));
}


const asyncAdd = async (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject("Argumenty muszą mieć typ number ! ")
  }
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(a + b)
      }, 100)
  })
}


async function sumArgsUsingAsyncAdd(...args) {
  return new Promise((resolve, reject) => {
      args.reduce(async (prev, curr) => {
          const result = await prev;
          const next = await asyncAdd(result, curr);
          return next;
      }, Promise.resolve(0)).then((result) => {
          resolve(result);
      })
  })
}

function measureAsyncExecutionTime(funcToMeasure) {
  const startTime = performance.now();
  funcToMeasure().then(() => {
      const endTime = performance.now();
      console.log(`Czas wykonania: ${endTime - startTime} ms`);
  })
}


measureAsyncExecutionTime(
  () => sumArgsUsingAsyncAdd(1, 2, 3, 4, 5, 6).then(console.log)
);

measureAsyncExecutionTime(
  () => sumArgsUsingAsyncAdd(...randomArray(100, 1, 100)).then(console.log)
);