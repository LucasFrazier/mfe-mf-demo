# Module Federation Example

## About The Project

The purpose of this project is to demonstrate an example of a Micro-Frontend Architecture powered by Module Federation.

### Built With

- Frontend(s)
  - React
  - React Router
  - Webpack 5
    - Module Federation Plugin
  - Zustand
    - See ADR under `adr` directory
  - Tailwind
- Backend
  - Nest
  - TypeScript
    <br>
    <br>

## Getting Started

Follow theses steps to get the project up and running locally.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install -g npm@latest
  ```

### Installation

\*NOTE: In the project's current state, all apps need to be running in order for any single app to work. Once you have gone through the installation steps, refresh each page if you are seeing blank screens.

1. Clone the repo

   ```sh
   git clone https://github.com/procter-gamble/eai-apip-refarch-module-federation-example.git
   ```

2. cd into /home

   ```sh
   cd home
   ```

3. run npm install

   ```sh
   npm install
   ```

4. run npm start

   ```sh
   npm start
   ```

5. **\*Repeat steps 3 and 4 in the /pdp and /cart directories**

6. cd into /server

   ```sh
   cd server
   ```

7. run npm install

   ```sh
   npm install
   ```

8. Start the server

   ```sh
   npm run start:dev
   ```

9. Refresh browser windows

<br>

## Usage

The project mimics an ecommerce site experience and consists of 4 separate applications: home, pdp, cart, server.

In this project, `home` is the `host`, while `pdp` and `cart` are the `remotes`

Each application runs on a separate port

- home: http://localhost:3000
- pdp: http://localhost:3001
- cart: http://localhost:3002
- server: http://localhost:8080

<br>

## Roadmap

- [ ] Implement State Management Solution
- [ ] Implement Error Handling
- [ ] Upgrade Tailwind CSS v2 -> v3
- [ ] Utilize Quantity Property on Cart Items
