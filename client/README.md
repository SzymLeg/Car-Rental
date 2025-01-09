Domyślną stroną jest strona z listą pojazdów - zaimplementowano formularz pozwalający na zawężanie listy wyników z bazy - należy dorobić odpowiednie kwerendy

Klikając LPM na "Zaloguj się" w headerze jesteśmy przenoszeni do strony /login, gdzie użytkownik się loguje lub rejestruje.

1. Najpierw użytkownik wpisuje mail i gdy takiego maila wpisze i zatwierdzi, program wyszukuje mail w bazie danych - jeżeli istnieje to użytkownik chce się zalogować (2), jeżeli nie to zarejestrować (3).

2. Użytkownik wpisuje hasło i po poprawnym zalogowaniu wraca na stronę główną - można wtedy zamiast "Zaloguj się" w headerze wyświetlić jego imię i nazwisko.

3. Użytkownik wpisuje niezbędne dane do założenia konta i po poprawnym uzupełnieniu danych konto jest dodawane do bazy danych, tak samo jak w (2) wracamy do strony głównej i wyświetlamy jego imię i nazwisko w rogu.

Formularz logowania/rejestracji zawiera 3 sekcje, które należy wyświetlać i ukrywać (display: block; display: none;) oraz przykładowe errory, gdy przykładowo wpisze maila bez @ (.error: visibility: visible; visibility: hidden; <- należy dopisać odpowiednie ID/klasy, żeby nie odsłaniać wszystkich jednocześnie)

Wygląd stron jest roboczy, CSS będzie jeszcze poprawiany, ale nie wpłynie to na całokształt.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
