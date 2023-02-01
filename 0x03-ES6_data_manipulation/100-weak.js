export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const pointData = weakMap.get(endpoint);
    if (pointData >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (pointData + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
