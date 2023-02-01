export default function cleanSet (set, startString) {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((strng) => {
    if (typeof strng === 'string' && strng.startsWith(startString)) {
      strings.push(strng.slice(startString.length));
    }
  });
  return strings.join('-');
}
