
# FlipFlop Fun

FlipFlop Fun is an engaging Flask & react based application that brings the classic flip-flop game to your fingertips! Enjoy hours of entertainment as you challenge yourself and your friends to see who can flip the most tiles in this addictive game. With sleek design and smooth gameplay, FlipFlop Fun is the perfect way to unwind and test your reflexes. Start flipping now and let the fun begin!

## Installation
1. **Create Virtual Environment For Python**<br>
Run `python3 -m venv .venv` to create virtual environment named '.venv'

3. **Activate Virtual Environment**<br>
Run `source .venv/bin/activate` for Linux/macOS

4. **Install Packages**<br>
Run `bun pip:install` to install Python modules.<br>
Run `bun install` to install ReactJS dependencies.

5. **Build Project**<br>
Run `bun build` to build the react files.

6. **Run Server**<br>
Run `bun serve` to serve react using flask for production.

## About
The repository facilitates a smooth development workflow by integrating React for the frontend and Flask for the backend. It utilizes the `Chokidar` package to detect changes in React or SCSS files, triggering automatic builds to ensure Flask serves the latest updates. Additionally, comprehensive linting for React and SCSS has been implemented using `ESLint` and `Stylelint`. Download or Fork the repository and follow the steps below to setup a clean peoject.
1. **Create Virtual Environment For Python**<br>
Run `python3 -m venv .venv` to create virtual environment named '.venv'

3. **Activate Virtual Environment**<br>
Run `source .venv/bin/activate` for Linux/macOS

4. **Install Packages**<br>
Run `bun pip:install` to install Python modules.<br>
Run `bun install` to install ReactJS dependencies.

5. **Build Project on watch**<br>
Run `bun watch` to build the frontend files everytime you change something in .tsx, .ts, .scss .html files. This command builds non-minified js and css file.

6. **Run Development Server**<br>
Run `bun dev` to serve react using flask in debug mode.

7. **Formatting**<br>
Run `bun lint:fix | bun lint` to lint and format .ts, .tsx and .scss file and file too.

##
**Note:** Please refer to the package.json file to gain a comprehensive understanding of all available commands. Ensure that Bun (for React) & uv (for python) is installed on your system for seamless usage.

## Add a `.env` file in the root for environment variables.
```
FLASK_ENV=development
DEBUG=False
DATABASE_URL=<your-mongo-db-url>
SECRET_KEY=<your-secret-key-for-flask-app>
JWT_SECRET_KEY=<your-secret-key-for-jwt-management>
```
