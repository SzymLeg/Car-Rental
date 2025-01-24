const Reservation = require('../models/Reservation');
const Vehicle = require('../models/Vehicle');

exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas pobierania rezerwacji', error });
    }
};

exports.getReservationById = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByPk(id);
        if (!reservation) {
            return res.status(404).json({ message: 'Rezerwacja nie znaleziona' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas pobierania rezerwacji', error });
    }
};

exports.createReservation = async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json({ message: 'Rezerwacja dodana', reservation });
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas dodawania rezerwacji', error });
    }
};

exports.updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Reservation.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: 'Rezerwacja nie znaleziona' });
        }
        const updatedReservation = await Reservation.findByPk(id);
        res.status(200).json({ message: 'Rezerwacja zaktualizowana', reservation: updatedReservation });
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas aktualizacji rezerwacji', error });
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Reservation.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Rezerwacja nie znaleziona' });
        }
        res.status(200).json({ message: 'Rezerwacja usunięta' });
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas usuwania rezerwacji', error });
    }
};

exports.getReservationsByUserId = async (req, res) => {
    try {
        const { customer_id } = req.params;
        if (!customer_id) {
            return res.status(400).json({ message: 'Brak identyfikatora użytkownika' });
        }
        const reservations = await Reservation.findAll({
            where: { customer_id },
            include: [{
                model: Vehicle,  // Dołącz model pojazdu
                attributes: ['brand', 'model']  // Wybierz tylko nazwę pojazdu
            }]
        });

        if (!reservations || reservations.length === 0) {
            return res.status(404).json({ message: 'Nie znaleziono rezerwacji dla tego użytkownika' });
        }

        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas pobierania rezerwacji użytkownika', error });
    }
};


