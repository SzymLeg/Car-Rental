const Customer = require('../models/Customer');

// Pobieranie wszystkich klientów
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ message: 'Błąd podczas pobierania klientów' });
  }
};

// Dodawanie nowego klienta
// customerController.js
exports.createCustomer = async (req, res) => {
    try {
      const newCustomer = new Customer(req.body);  // Dane z body
      await newCustomer.save();
      res.status(201).json({ message: 'Nowy klient został dodany', customer: newCustomer });
    } catch (err) {
      console.error('Błąd podczas dodawania klienta:', err);
      res.status(500).json({ message: 'Błąd podczas dodawania klienta', error: err });
    }
  };
  

// Pobieranie klienta po ID
exports.getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: 'Klient nie znaleziony' });
    }
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error fetching customer by ID:', error);
    res.status(500).json({ message: 'Błąd podczas pobierania klienta' });
  }
};

// Aktualizacja klienta
exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, address, email, phone_number, birthdate, permissions } = req.body;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: 'Klient nie znaleziony' });
    }

    if (first_name !== undefined) customer.first_name = first_name;
    if (last_name !== undefined) customer.last_name = last_name;
    if (address !== undefined) customer.address = address;
    if (email !== undefined) customer.email = email;
    if (phone_number !== undefined) customer.phone_number = phone_number;
    if (birthdate !== undefined) customer.birthdate = birthdate;
    if (permissions !== undefined) customer.permissions = permissions;

    await customer.save();

    res.status(200).json(customer);
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ message: 'Błąd podczas aktualizacji klienta' });
  }
};

// Usuwanie klienta
exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: 'Klient nie znaleziony' });
    }

    await customer.destroy();
    res.status(200).json({ message: 'Klient usunięty pomyślnie' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ message: 'Błąd podczas usuwania klienta' });
  }
};
