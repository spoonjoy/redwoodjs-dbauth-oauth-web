# RedwoodJS dbAuth OAuth Plugin
[![API side NPM version](https://img.shields.io/npm/v/%40spoonjoy%2Fredwoodjs-dbauth-oauth-api?logo=redwoodjs&label=npm%20-%20api%20side)](https://www.npmjs.com/package/@spoonjoy/redwoodjs-dbauth-oauth-api)
[![Web side NPM version](https://img.shields.io/npm/v/%40spoonjoy%2Fredwoodjs-dbauth-oauth-web?logo=redwoodjs&label=npm%20-%20web%20side)](https://www.npmjs.com/package/@spoonjoy/redwoodjs-dbauth-oauth-web)

This project is a plugin for RedwoodJS that adds OAuth capabilities to projects using dbAuth. It's designed to provide an easy and effective way to integrate OAuth into your RedwoodJS applications, offering a seamless experience for both developers and end users.

The plugin currently supports OAuth providers like Apple, GitHub, and Google, with a flexible architecture that allows for the addition of more providers. If you need support for a specific provider, feel free to open a request on GitHub.

This project stands unique as the first and only OAuth plugin for RedwoodJS's dbAuth, providing a low-effort, easily reusable package. It not only simplifies the integration process with minor code and database changes but also provides ready-to-use buttons for signup/login/link/unlink operations.

The project follows the dbAuth integration pattern as of Redwood version 4 and aligns with the Decoupled Auth strategy. It is structured as a Yarn monorepo with two main packages: `web` and `api`.

- The `web` package is responsible for the client-side logic, handling the OAuth flow from the user's perspective.
- The `api` package manages the server-side logic, dealing with the communication with the OAuth provider and your database.

## Project Structure
- Root
  - [Web](https://github.com/spoonjoy/redwoodjs-dbauth-oauth/tree/main/web)
  - [API](https://github.com/spoonjoy/redwoodjs-dbauth-oauth/tree/main/api)

For more detailed information on each package, please refer to their respective README files linked above.

## Motivation
The motivation behind this package is to simplify the integration of OAuth into RedwoodJS projects using DBAuth. We aim to provide a straightforward and efficient solution that can be easily plugged into any project, reducing the complexity and time required to add OAuth capabilities to any RedwoodJS project.

## Setup Instructions
First, follow the instructions for [setting up the Web side](https://github.com/spoonjoy/redwoodjs-dbauth-oauth/blob/main/web/README.md), and then for [setting up the API side](https://github.com/spoonjoy/redwoodjs-dbauth-oauth/tree/main/api#api-package-for-redwoodjs-dbauth-oauth-plugin). Then, come back here.

### Enabling providers
So you've setup the Web and API sides, and now we need to enable some provider(s). Currently supported OAuth providers are:

[Apple]()
[GitHub]()
[Google]()

.....TODO add here