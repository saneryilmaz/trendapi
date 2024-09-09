<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trendapi Module</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3 { color: #333; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 4px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Trendapi Module</h1>

    <p>This module is designed for interacting with the Trendyol API. It provides methods for accessing orders, categories, and supplier information.</p>

    <h2>Installation</h2>
    <p>To use the Trendapi module, you need to have Node.js installed. Then, you can install the module using npm:</p>
    <pre><code>npm install axios</code></pre>
    <p>After installing Axios, you can include the Trendapi module in your project.</p>

    <h2>Usage</h2>
    <p>Here is a quick guide on how to use the Trendapi module:</p>

    <h3>Initialization</h3>
    <p>Create an instance of the <code>Trendapi</code> class by providing the necessary API credentials:</p>
    <pre><code>
const Trendapi = require('./path-to-your-module');

const api = new Trendapi('YOUR_API_KEY', 'YOUR_SECRET_KEY', 'YOUR_SUPPLIER_ID');
    </code></pre>

    <h3>Methods</h3>

    <h4>getOrders</h4>
    <p>Fetches all orders for the supplier.</p>
    <pre><code>
async function fetchOrders() {
    try {
        const orders = await api.getOrders();
        console.log(orders);
    } catch (error) {
        console.error(error.message);
    }
}
    </code></pre>

    <h4>getOrderShipmentStatus(status)</h4>
    <p>Fetches orders filtered by their shipment status. The status can be 0 for "Delivered" or 1 for "Picking".</p>
    <pre><code>
async function fetchOrdersByStatus(status) {
    try {
        const orders = await api.getOrderShipmentStatus(status);
        console.log(orders);
    } catch (error) {
        console.error(error.message);
    }
}
    </code></pre>

    <h4>getCategory</h4>
    <p>Fetches all product categories.</p>
    <pre><code>
async function fetchCategories() {
    try {
        const categories = await api.getCategory();
        console.log(categories);
    } catch (error) {
        console.error(error.message);
    }
}
    </code></pre>

    <h4>getCategoryByID(SANERID)</h4>
    <p>Fetches attributes of a category specified by its ID.</p>
    <pre><code>
async function fetchCategoryById(categoryId) {
    try {
        const category = await api.getCategoryByID(categoryId);
        console.log(category);
    } catch (error) {
        console.error(error.message);
    }
}
    </code></pre>

    <h4>getSupplierServiceURL</h4>
    <p>Fetches the addresses of the supplier.</p>
    <pre><code>
async function fetchSupplierAddresses() {
    try {
        const addresses = await api.getSupplierServiceURL();
        console.log(addresses);
    } catch (error) {
        console.error(error.message);
    }
}
    </code></pre>

    <h2>Error Handling</h2>
    <p>All methods in this module throw an error if there is an issue with the API request. Be sure to handle errors appropriately in your application.</p>

    <h2>Contributing</h2>
    <p>Feel free to fork this repository and submit pull requests. Please make sure to follow the coding conventions and write tests for your changes.</p>

    <h2>License</h2>
    <p>This module is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>
