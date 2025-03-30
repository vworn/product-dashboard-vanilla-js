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