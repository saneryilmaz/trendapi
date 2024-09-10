const axios = require("axios")

class Trendapi {
    constructor(SANER_API_KEY,SANER_SECRET_KEY,SANER_SUPPLIER_ID){
        this.SANER_URL = "https://api.trendyol.com/sapigw/"
        this.SANER_API_KEY = SANER_API_KEY;
        this.SANER_SECRET_KEY = SANER_SECRET_KEY;
        this.SANER_SUPPLIER_ID = SANER_SUPPLIER_ID;
        this.SANER = axios.create({ headers: { "User-Agent": `${this.SANER_SUPPLIER_ID} - SelfIntegration` }, auth: { username: this.SANER_API_KEY, password: this.SANER_SECRET_KEY }, baseURL: this.SANER_URL }) 
    }
    async getOrders() {
        try {
          const response = await this.SANER.get(`/suppliers/${this.SANER_SUPPLIER_ID}/orders`);
          return response.data;
        } catch (error) {
          throw new Error(`API Error: ${error.message}`);
        }
    }
    async getOrderShipmentStatus(status) {
        try {
          const response = await this.SANER.get(`/suppliers/${this.SANER_SUPPLIER_ID}/orders`);
          
          const statusList = {
            0: "Delivered",
            1: "Picking"
          };
      
          const orders = response.data.content.filter(order => order.shipmentPackageStatus === statusList[status]);
      
          return orders;
        } catch (error) {
          throw new Error(`API Error: ${error.message}`);
        }
    }
    async getCategory() {
        try {
            const response = await this.SANER.get(`/product-categories`);
            return response.data.categories
        } catch (error) {
            throw new Error(`API Error: ${error.message}`);
        }
    }
    async getCategoryByID(SANERID) {
        try {
            const response = await this.SANER.get(`/product-categories/${SANERID}/attributes`)
            return response.data
        } catch (error) {
            throw new Error(`API Error: ${error.message}`);
        }
    }
    async getSupplierServiceURL() {
        try {
            const response = await this.SANER.get(`/suppliers/${this.SANER_SUPPLIER_ID}/addresses`)
            return response.data.supplierAddresses
        } catch (error) {
            throw new Error(`API Error: ${error.message}`);
        }
    }
    
}

module.exports = Trendapi;