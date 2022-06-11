/* Write the function camelize(str) that changes
dash-separated words like "my-short-string" into
camel-cased "myShortString" */

function camelize(str) {
  let result = str.split('-');
  for (let i = 1, n = result.length; i < n; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join('');
}

// Test cases
['background-color', 'list-style-image', '-webkit-transition'].forEach(str => console.log(camelize(str)));