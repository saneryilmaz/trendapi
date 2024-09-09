  Trendapi Kullanım Kılavuzu

Trendapi Kullanım Kılavuzu
==========================

Trendapi, Trendyol'un API'sini kullanarak siparişler, kategori bilgileri ve tedarikçi hizmet URL'leri gibi bilgilere erişmenizi sağlayan bir Node.js kütüphanesidir. Bu kütüphane, Trendyol'un API'sini kullanarak çeşitli veri işlemlerini gerçekleştirmek için basit bir arayüz sunar.

Kurulum
-------
Bu kütüphaneyi projenize dahil etmek için aşağıdaki adımları izleyebilirsiniz:

    const Trendapi = require('trendapi');

Kullanım
--------

### Yapıcı Fonksiyon

`Trendapi` sınıfını kullanarak bir örnek oluşturabilirsiniz. Yapıcı fonksiyon gerekli olan üç parametreyi alır:

*   `SANER_API_KEY`: API anahtarınız
*   `SANER_SECRET_KEY`: API gizli anahtarınız
*   `SANER_SUPPLIER_ID`: Tedarikçi kimlik numaranız

Örnek:

    const api = new Trendapi('SANER_API_KEY', 'SANER_SECRET_KEY', 'SANER_SUPPLIER_ID');

### Siparişleri Getir

Tüm siparişleri almak için `getOrders` metodunu kullanabilirsiniz:

    api.getOrders().then(orders => {
        console.log(orders);
    }).catch(error => {
        console.error(error.message);
    });

### Siparişlerin Gönderim Durumunu Getir

Belirli bir gönderim durumuna sahip siparişleri almak için `getOrderShipmentStatus` metodunu kullanabilirsiniz. `status` parametresi aşağıdaki değerleri alabilir:

*   `0`: Teslim Edilmiş
*   `1`: Paketleme Aşamasında

Örnek:

    api.getOrderShipmentStatus(1).then(orders => {
        console.log(orders);
    }).catch(error => {
        console.error(error.message);
    });

### Kategorileri Getir

Ürün kategorilerini almak için `getCategory` metodunu kullanabilirsiniz:

    api.getCategory().then(categories => {
        console.log(categories);
    }).catch(error => {
        console.error(error.message);
    });

### Kategori ID'sine Göre Özellikleri Getir

Belirli bir kategori ID'sine göre kategori özelliklerini almak için `getCategoryByID` metodunu kullanabilirsiniz:

    api.getCategoryByID('category-id').then(categoryAttributes => {
        console.log(categoryAttributes);
    }).catch(error => {
        console.error(error.message);
    });

### Tedarikçi Hizmet URL'lerini Getir

Tedarikçi hizmet URL'lerini almak için `getSupplierServiceURL` metodunu kullanabilirsiniz:

    api.getSupplierServiceURL().then(supplierAddresses => {
        console.log(supplierAddresses);
    }).catch(error => {
        console.error(error.message);
    });

Hata Yönetimi
-------------

API çağrıları sırasında bir hata oluşursa, hata mesajı `Error` nesnesi içinde dönecektir. Hata mesajlarını uygun şekilde yakalayabilir ve işleyebilirsiniz.

Lisans
------

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) altında lisanslanmıştır.
