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

  // Task 4: Display the first 5 products on the page
function displayProducts(products) {
    const container = document.getElementById('product-container'); // select product container
    const firstFive = products.slice(0, 5); // get first 5 products
  
    // loop through products and create HTML elements
    firstFive.forEach((product) => {
      const { name, price, image } = product.fields;
  
      const productDiv = document.createElement('div');
      productDiv.classList.add('product'); // add class for styling
  
      // create product HTML content
      productDiv.innerHTML = `
        <img src="${image[0].url}" alt="${name}" />
        <h2>${name}</h2>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
  
      container.appendChild(productDiv); // add product to page
    });
  }

  // Task 5: Handle and log any errors
function handleError(error) {
    console.error('An error occurred:', error.message); // log error message
  }
  