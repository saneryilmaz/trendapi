  Trendapi Module body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; } h1, h2, h3 { color: #333; } code { background: #f4f4f4; padding: 2px 4px; border-radius: 4px; } pre { background: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto; }

Trendapi Module
===============

This module is designed for interacting with the Trendyol API. It provides methods for accessing orders, categories, and supplier information.

Installation
------------

To use the Trendapi module, you need to have Node.js installed. Then, you can install the module using npm:

    npm install axios

After installing Axios, you can include the Trendapi module in your project.

Usage
-----

Here is a quick guide on how to use the Trendapi module:

### Initialization

Create an instance of the `Trendapi` class by providing the necessary API credentials:

    
    const Trendapi = require('./path-to-your-module');
    
    const api = new Trendapi('YOUR_API_KEY', 'YOUR_SECRET_KEY', 'YOUR_SUPPLIER_ID');
        

### Methods

#### getOrders

Fetches all orders for the supplier.

    
    async function fetchOrders() {
        try {
            const orders = await api.getOrders();
            console.log(orders);
        } catch (error) {
            console.error(error.message);
        }
    }
        

#### getOrderShipmentStatus(status)

Fetches orders filtered by their shipment status. The status can be 0 for "Delivered" or 1 for "Picking".

    
    async function fetchOrdersByStatus(status) {
        try {
            const orders = await api.getOrderShipmentStatus(status);
            console.log(orders);
        } catch (error) {
            console.error(error.message);
        }
    }
        

#### getCategory

Fetches all product categories.

    
    async function fetchCategories() {
        try {
            const categories = await api.getCategory();
            console.log(categories);
        } catch (error) {
            console.error(error.message);
        }
    }
        

#### getCategoryByID(SANERID)

Fetches attributes of a category specified by its ID.

    
    async function fetchCategoryById(categoryId) {
        try {
            const category = await api.getCategoryByID(categoryId);
            console.log(category);
        } catch (error) {
            console.error(error.message);
        }
    }
        

#### getSupplierServiceURL

Fetches the addresses of the supplier.

    
    async function fetchSupplierAddresses() {
        try {
            const addresses = await api.getSupplierServiceURL();
            console.log(addresses);
        } catch (error) {
            console.error(error.message);
        }
    }
        

Error Handling
--------------

All methods in this module throw an error if there is an issue with the API request. Be sure to handle errors appropriately in your application.

Contributing
------------

Feel free to fork this repository and submit pull requests. Please make sure to follow the coding conventions and write tests for your changes.

License
-------

This module is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
