const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Trasa do pobrania wszystkich klientów
router.get('/', customerController.getAllCustomers);

// Trasa do dodania nowego klienta
router.post('/', customerController.createCustomer);

// Trasa do pobrania jednego klienta po jego ID
router.get('/:id', customerController.getCustomerById);

// Trasa do aktualizacji danych klienta
router.put('/:id', customerController.updateCustomer);

// Trasa do usunięcia klienta
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
