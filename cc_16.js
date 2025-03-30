// Task 2: Fetch products using fetch().then().catch()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products') // fetch data from API
      .then((res) => res.json()) // parse JSON response
      .then((data) => {
        // log each product name to console
        data.forEach((product) => console.log(product.fields.name));
      })
      .catch((error) => handleError(error)); // handle errors
  }

  // Task 3: Fetch products using async/await and try/catch
async function fetchProductsAsync() {
    try {
      const res = await fetch('https://www.course-api.com/javascript-store-products'); // fetch data
      const data = await res.json(); // parse JSON response
      displayProducts(data); // display data on page
    } catch (error) {
      handleError(error); // catch and handle errors
    }
  }