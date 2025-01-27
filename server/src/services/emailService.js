const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,  // Używaj TLS
    auth: {
        user: process.env.Email_User, // Twój pełny adres e-mail
        pass: process.env.Email_Password // Hasło aplikacji, jeśli masz 2FA, lub hasło do konta
    }
  });

// Funkcja do wysyłania e-maila
const sendConfirmationEmail = (recipientEmail, reservationDetails) => {
    const mailOptions = {
        from: '"Wypożyczalnia Samochodów" <gliwice@wypozyczalnia.pl>',
        to: recipientEmail,
        subject: 'Potwierdzenie rezerwacji',
        text: `Dziękujemy za dokonanie rezerwacji! Szczegóły:
- Data rozpoczęcia: ${reservationDetails.start_date}; ${reservationDetails.pickup_time}
- Miejsce odbioru: ${reservationDetails.pickup_location}, ${reservationDetails.pickup_street}
- Data zakończenia: ${reservationDetails.end_date}; ${reservationDetails.return_time}
- Miejsce zwrotu: ${reservationDetails.return_location}, ${reservationDetails.return_street}
- Samochód: ${reservationDetails.vehicle_info}

Cieszymy się, że wybrałeś naszą wypożyczalnię!`,
    };

    // Wyślij wiadomość e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Błąd podczas wysyłania e-maila:', error);
        } else {
            console.log('E-mail wysłany:', info.response);
        }
    });
};

module.exports = sendConfirmationEmail;
