const Vehicle = require('../models/Vehicle');

exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas pobierania pojazdów', error });
    }
};

exports.getAvailableVehicles = async (req, res) => {
    try {
        const { location } = req.params;
      // Pobierz tylko pojazdy z `status = 'available'`
      const vehicles = await Vehicle.findAll({
        where: {
          status: 'available',
          localization: location,
        },
      });
      res.status(200).json(vehicles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Błąd serwera.' });
    }
  };
  

exports.getVehicleById = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await Vehicle.findByPk(id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Pojazd nie znaleziony' });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas pobierania pojazdu', error });
    }
};

exports.createVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json({ message: 'Pojazd dodany', vehicle });
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas dodawania pojazdu', error });
    }
};

exports.updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Vehicle.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: 'Pojazd nie znaleziony' });
        }
        const updatedVehicle = await Vehicle.findByPk(id);
        res.status(200).json({ message: 'Pojazd zaktualizowany', vehicle: updatedVehicle });
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas aktualizacji pojazdu', error });
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Vehicle.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Pojazd nie znaleziony' });
        }
        res.status(200).json({ message: 'Pojazd usunięty' });
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas usuwania pojazdu', error });
    }
};
