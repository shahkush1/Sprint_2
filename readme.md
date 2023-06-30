
# Population Report Node.js Project

This is a Node.js project that utilizes the Pug template engine to generate population reports for countries and cities worldwide. It provides various queries to fetch population data based on different criteria such as continent, region, and population size.

## Installation

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command:

```shell
npm install
```

## Queries

The following queries are available to fetch population data:

1. All the countries in the world organized by largest population to smallest.
2. All the countries in a continent organized by largest population to smallest.
3. All the countries in a region organized by largest population to smallest.
4. Top N Populated Countries in the World.
5. Top N Populated Countries in a Continent.
6. Top N Populated Countries in a Region.
7. All the cities in the world organized by largest population to smallest.
8. All the cities in a continent organized by largest population to smallest.
9. All the cities in a region organized by largest population to smallest.
10. All the cities in a country organized by largest population to smallest.
11. All the cities in a district organized by largest population to smallest.
12. Top N Populated Cities in the World.
13. Top N Populated Cities in a Continent.
14. Top N Populated Cities in a Region.

## How to Run

To run this project, follow these steps:

1. Set up a MySQL database and import the necessary data.
2. Configure the database connection details in the `index.js` file.
3. Run the project by executing the following command in the terminal:

```shell
npm start
```

4. Access the application in your web browser at `http://localhost:3000`.

Please make sure you have Node.js and MySQL installed on your machine before running the project.

## MySQL Database

This project uses a MySQL database to store and retrieve population data. Make sure you have MySQL installed and running on your machine. Import the necessary data using the provided SQL files or create your own population tables.

## Technologies Used

- Node.js
- Express.js
- Pug template engine
- MySQL database

## Acknowledgements

The project is inspired by population data analysis and reporting. It leverages the power of Node.js, Express.js, and MySQL to generate population reports dynamically. Special thanks to the developers and contributors of the used technologies and data sources.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.
