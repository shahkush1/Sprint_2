/* Import dependencies */
const express = require("express");
const mysql = require("mysql");
const path=require("path")
const bodyParser = require("body-parser");

/* Create express instance */
const app = express();
const port = 3000;
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

/* Setup database connection */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "world",
});

/* Landing route */
app.get('/', (req, res) => {
   res.render('index')
});

// Render the countries page
app.get('/countries', (req, res) => {
    const countryQuery = 'SELECT Code, Name, Continent, Region, Population, Capital FROM country ORDER BY Population DESC';
  
    db.query(countryQuery, (err, results) => {
      if (err) {
        console.error('Error fetching country data: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.render('countries', { countries: results });
      }
    });
  });

  // Render the cities page
  app.get('/cities', (req, res) => {
    const cityQuery = 'SELECT Name, CountryCode, Population FROM city ORDER BY Population DESC';
  
    db.query(cityQuery, (err, results) => {
      if (err) {
        console.error('Error fetching city data: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.render('cities', { cities: results });
      }
    });
  });
// Endpoint to handle query
app.post('/query', (req, res) => {
  //Handle different query types and execute the appropriate query
  switch (req.body.query) {
    case 'topCountriesWorld':
      const n = req.body.n;
      const countryQuery = `SELECT Code, Name, Continent, Region, Population, Capital FROM country ORDER BY Population DESC LIMIT ${n}`;
  
      db.query(countryQuery, (err, results) => {
        if (err) {
          console.error('Error fetching country data: ', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('countries', { countries: results });
        }
      });
      break;
    case 'topCountriesContinent':
      const n2 =  req.body.n;
      const continent = req.body.continent;
      const countryContinentQuery = `SELECT Code, Name, Continent, Region, Population, Capital FROM country WHERE Continent = '${continent}' ORDER BY Population DESC LIMIT ${n2}`;
  
      db.query(countryContinentQuery, (err, results) => {
        if (err) {
          console.error('Error fetching country data: ', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('countries', { countries: results });
        }
      });
      break;
    case 'topCountriesRegion':
      const n3 =  req.body.n;
      const region =  req.body.region;
      const countryRegionQuery = `SELECT Code, Name, Continent, Region, Population, Capital FROM country WHERE Region = '${region}' ORDER BY Population DESC LIMIT ${n3}`;
  
      db.query(countryRegionQuery, (err, results) => {
        if (err) {
          console.error('Error fetching country data: ', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('countries', { countries: results });
        }
      });
      break;
    case 'topCitiesWorld':
      const n4 =  req.body.n;
      const cityQuery = `SELECT Name, CountryCode, Population FROM city ORDER BY Population DESC LIMIT ${n4}`;
  
      db.query(cityQuery, (err, results) => {
        if (err) {
          console.error('Error fetching city data: ', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('cities', { cities: results });
        }
      });
      break;
    case 'topCitiesContinent':
      const n5 =  req.body.n;
      const continent2 =  req.body.continent;
      const cityContinentQuery = `SELECT city.Name, city.CountryCode, city.Population FROM city JOIN country ON city.CountryCode = country.Code WHERE country.Continent = '${continent2}' ORDER BY city.Population DESC LIMIT ${n5}`;
  
      db.query(cityContinentQuery, (err, results) => {
        if (err) {
          console.error('Error fetching city data: ', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('cities', { cities: results });
        }
      });
      break;
    case 'topCitiesRegion':
      const n6 =  req.body.n;
      const region2 =  req.body.region;
      const cityRegionQuery = `SELECT city.Name, city.CountryCode, city.Population FROM city JOIN country ON city.CountryCode = country.Code WHERE country.Region = '${region2}' ORDER BY city.Population DESC LIMIT ${n6}`;
  
      db.query(cityRegionQuery, (err, results) => {
        if (err) {
          console.error('Error fetching city data: ', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('cities', { cities: results });
        }
      });
      break;
    case 'cityRegionbySmall':
        const regionSmall = req.body.region;
        const cityQueryRegionSmall = `select city.Name,city.CountryCode,city.Population from Country join city on city.CountryCode=country.Code where country.Region='${regionSmall}' order by city.Population desc;`;
        db.query(cityQueryRegionSmall, (err, results) => {
          if (err) {
            console.error('Error fetching city data: ', err);
            res.status(500).send('Internal Server Error');
          } else {
            res.render('cities', { cities: results });
          }
        });
        break;
      case 'allCountriesContinent':
          const continent3 = req.body.continent;
          const countryQueryContinent = `SELECT Code, Name, Continent, Region, Population, Capital FROM country WHERE Continent = '${continent3}' ORDER BY Population DESC`;
          db.query(countryQueryContinent, (err, results) => {
            if (err) {
              console.error('Error fetching country data: ', err);
              res.status(500).send('Internal Server Error');
            } else {
              res.render('countries', { countries: results });
            }
          });
          break;
        case 'allCitiesSmall':
            const cityQuerySmall = `SELECT Name, CountryCode, Population FROM city ORDER BY Population ASC`;
            db.query(cityQuerySmall, (err, results) => {
              if (err) {
                console.error('Error fetching city data: ', err);
                res.status(500).send('Internal Server Error');
              } else {
                res.render('cities', { cities: results });
              }
            });
            break;
        case 'allCitiesBig':
              const cityQueryBig = `SELECT Name, CountryCode, Population FROM city ORDER BY Population DESC`;
              db.query(cityQueryBig, (err, results) => {
                if (err) {
                  console.error('Error fetching city data: ', err);
                  res.status(500).send('Internal Server Error');
                } else {
                  res.render('cities', { cities: results });
                }
              });
              break;
        case 'cityCountrybyLarge':
              const country = req.body.country;
              const cityQueryCountryLarge = `SELECT city.Name, city.CountryCode, city.Population FROM country join city on city.CountryCode=country.Code WHERE country.name = '${country}' ORDER BY Population DESC`;
              db.query(cityQueryCountryLarge, (err, results) => {
                if (err) {
                  console.error('Error fetching city data: ', err);
                  res.status(500).send('Internal Server Error');
                } else {
                  res.render('cities', { cities: results });
                }
              });
              break;
        case 'allCountriesWorld':
            const countryQueryWorld = `SELECT Code,Name, Continent, Region, Population, Capital FROM country ORDER BY Population DESC`;
            db.query(countryQueryWorld, (err, results) => {
              if (err) {
                console.error('Error fetching country data: ', err);
                res.status(500).send('Internal Server Error');
              } else {
                res.render('countries', { countries: results });
              }
            });
            break;
        case 'allCountriesRegion':
            const region1 = req.body.region;
            const countryQueryRegion = `SELECT Code, Name, Continent, Region, Population, Capital FROM country WHERE Region = '${region1}' ORDER BY Population DESC`;
            db.query(countryQueryRegion, (err, results) => {
              if (err) {
                console.error('Error fetching country data: ', err);
                res.status(500).send('Internal Server Error');
              } else {
                res.render('countries', { countries: results });
              }
            });
            break;
        case 'topCitiesDistrict':
          const district1=req.body.district;
          const cityQueryDistrict = `SELECT Name, CountryCode, Population FROM city where District= '${district1}' ORDER BY Population DESC`;
          db.query(cityQueryDistrict, (err, results) => {
            if (err) {
              console.error('Error fetching city data: ', err);
              res.status(500).send('Internal Server Error');
            } else {
              res.render('cities', { cities: results });
            }
          });
          break;
        default:
              res.status(400).send('Invalid query');
  }
});

// Run server!
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
