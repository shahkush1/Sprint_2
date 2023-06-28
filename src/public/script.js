function handleQueryChange() {
    var querySelect = document.getElementById("Query");
    var selectedQuery = querySelect.value;
    console.log(selectedQuery)
     var additionalFields = document.getElementById("additionalFields");

    // Remove previously added additional fields
    while (additionalFields.firstChild) {
      additionalFields.removeChild(additionalFields.firstChild);
    }

    // Add additional fields based on the selected query
    if ( selectedQuery === "allcitiessmall" || selectedQuery==="allCountriesContinent") {
      addContinentDropdown(additionalFields);
    } else if (selectedQuery === "cityRegionbySmall" ||selectedQuery==="allCountriesRegion") {
      addContinentAndRegionDropdowns(additionalFields);
    }
    else if (selectedQuery==="topCitiesDistrict")
    {

        addDistrictDropdown(additionalFields);

    }
    else if(selectedQuery==="cityCountrybyLarge")
    {
         addCountryDropdown(additionalFields);
    }
    else if(selectedQuery==="topCountriesContinent" || selectedQuery==="topCitiesContinent")
    {
        addContinentDropdownN(additionalFields);

    }
    else if(selectedQuery==="topCountriesRegion"  || selectedQuery === "topCitiesRegion")
    {
        addRegionDropdownsN(additionalFields);

    }
    else if(selectedQuery==="topCitiesWorld" || selectedQuery==="topCountriesWorld")
    {
        addInput(additionalFields);
    }
  }
  function addInput(container) {
    var inputN = document.createElement("input");
    inputN.type = "number";
    inputN.name = "n";
    inputN.placeholder = "Enter N";
    inputN.classList.add("form-control");
  
    container.appendChild(inputN);
  }
  
  function addContinentDropdown(container) {
    var continentSelect = document.createElement("select");
    continentSelect.name = "continent";
    var jsonData = [
      {
        "type": "table",
        "name": "country",
        "database": "world",
        "data": [
          {"Continent": "North America"},
          {"Continent": "Asia"},
          {"Continent": "Africa"},
          {"Continent": "Europe"},
          {"Continent": "South America"},
          {"Continent": "Oceania"},
          {"Continent": "Antarctica"}
        ]
      }
    ];
    continentSelect.classList.add("form-control");

  
    // Extract the continent data from the JSON
    var continents = jsonData[0].data.map(entry => entry.Continent);
  
    // Create the dropdown options
    for (var i = 0; i < continents.length; i++) {
      var option = document.createElement("option");
      option.value = continents[i];
      option.text = continents[i];
      continentSelect.appendChild(option);
    }
  
    container.appendChild(continentSelect);
  }
  

  function addContinentAndRegionDropdowns(container) {

  
    // Add region dropdown
    var regionSelect = document.createElement("select");
    regionSelect.name = "region";
    
    var jsonData = [
      {
        "type": "table",
        "name": "country",
        "database": "world",
        "data": [
          {"Region": "Caribbean"},
          {"Region": "Southern and Central Asia"},
          {"Region": "Central Africa"},
          {"Region": "Southern Europe"},
          {"Region": "Middle East"},
          {"Region": "South America"},
          {"Region": "Polynesia"},
          {"Region": "Antarctica"},
          {"Region": "Australia and New Zealand"},
          {"Region": "Western Europe"},
          {"Region": "Eastern Africa"},
          {"Region": "Western Africa"},
          {"Region": "Eastern Europe"},
          {"Region": "Central America"},
          {"Region": "North America"},
          {"Region": "Southeast Asia"},
          {"Region": "Southern Africa"},
          {"Region": "Eastern Asia"},
          {"Region": "Nordic Countries"},
          {"Region": "Northern Africa"},
          {"Region": "Baltic Countries"},
          {"Region": "Melanesia"},
          {"Region": "Micronesia"},
          {"Region": "British Islands"},
          {"Region": "Micronesia/Caribbean"}
        ]
      }
    ];

    regionSelect.classList.add("form-control");

  
    // Extract the region data from the JSON
    var regions = jsonData[0].data.map(entry => entry.Region);
  
    // Create the dropdown options
    for (var i = 0; i < regions.length; i++) {
      var option = document.createElement("option");
      option.value = regions[i];
      option.text = regions[i];
      regionSelect.appendChild(option);
    }
  
    container.appendChild(regionSelect);
  }
  
  function addDistrictDropdown(container) {
    var districtSelect = document.createElement("select");
    districtSelect.name = "district";
  
    var jsonData = [
      {
        "type": "table",
        "name": "city",
        "database": "world",
        "data": [
          {"District": "Kabol"},
          {"District": "Qandahar"},
          {"District": "Herat"},
          {"District": "Balkh"},
          {"District": "Noord-Holland"},
          {"District": "Zuid-Holland"},
          {"District": "Utrecht"},
          {"District": "Noord-Brabant"},
          {"District": "Groningen"},
          {"District": "Gelderland"},
          {"District": "Overijssel"},
          {"District": "Flevoland"},
          {"District": "Limburg"},
          {"District": "Drenthe"},
          {"District": "Curaçao"},
          {"District": "Tirana"},
          {"District": "Alger"},
          {"District": "Oran"},
          {"District": "Constantine"},
          {"District": "Annaba"},
          {"District": "Batna"},
          {"District": "Sétif"},
          {"District": "Sidi Bel Abbès"},
          {"District": "Skikda"},
          {"District": "Biskra"}
        ]
      }
    ];

    districtSelect.classList.add("form-control");

  
    // Extract the district data from the JSON
    var districts = jsonData[0].data.map(entry => entry.District);
  
    // Create the dropdown options
    for (var i = 0; i < districts.length; i++) {
      var option = document.createElement("option");
      option.value = districts[i];
      option.text = districts[i];
      districtSelect.appendChild(option);
    }
  
    container.appendChild(districtSelect);
  }
  
  function addCountryDropdown(container) {
    var countrySelect = document.createElement("select");
    countrySelect.name = "country";
  
    var jsonData = [
      {
        "type": "table",
        "name": "country",
        "database": "world",
        "data": [
          {"Name": "Aruba"},
          {"Name": "Afghanistan"},
          {"Name": "Angola"},
          {"Name": "Anguilla"},
          {"Name": "Albania"},
          {"Name": "Andorra"},
          {"Name": "Netherlands Antilles"},
          {"Name": "United Arab Emirates"},
          {"Name": "Argentina"},
          {"Name": "Armenia"},
          {"Name": "American Samoa"},
          {"Name": "Antarctica"},
          {"Name": "French Southern territories"},
          {"Name": "Antigua and Barbuda"},
          {"Name": "Australia"},
          {"Name": "Austria"},
          {"Name": "Azerbaijan"},
          {"Name": "Burundi"},
          {"Name": "Belgium"},
          {"Name": "Benin"},
          {"Name": "Burkina Faso"},
          {"Name": "Bangladesh"},
          {"Name": "Bulgaria"},
          {"Name": "Bahrain"},
          {"Name": "Bahamas"}
        ]
      }
    ];

    countrySelect.classList.add("form-control");

  
    // Extract the country data from the JSON
    var countries = jsonData[0].data.map(entry => entry.Name);
  
    // Create the dropdown options
    for (var i = 0; i < countries.length; i++) {
      var option = document.createElement("option");
      option.value = countries[i];
      option.text = countries[i];
      countrySelect.appendChild(option);
    }
  
    container.appendChild(countrySelect);
  }
  
  function addContinentDropdownN(container) {
    // Add continent dropdown
    var continentSelect = document.createElement("select");
    continentSelect.name = "continent";
  
    var jsonData = [
      {
        "type": "table",
        "name": "country",
        "database": "world",
        "data": [
          {"Continent": "North America"},
          {"Continent": "Asia"},
          {"Continent": "Africa"},
          {"Continent": "Europe"},
          {"Continent": "South America"},
          {"Continent": "Oceania"},
          {"Continent": "Antarctica"}
        ]
      }
    ];

    continentSelect.classList.add("form-control");

  
    // Extract the continent data from the JSON
    var continents = jsonData[0].data.map(entry => entry.Continent);
  
    // Create the continent dropdown options
    for (var i = 0; i < continents.length; i++) {
      var option = document.createElement("option");
      option.value = continents[i];
      option.text = continents[i];
      continentSelect.appendChild(option);
    }

    
  
    // Add 'N' input field
    var inputN = document.createElement("input");
    inputN.type = "number";
    inputN.name = "n";
    inputN.placeholder = "Enter N";

    inputN.classList.add("form-control");

    continentSelect.style.marginBottom = "10px";
    inputN.style.marginTop = "10px";


    
  
    container.appendChild(continentSelect);
    container.appendChild(inputN);
  }
  
  
  function addRegionDropdownsN(container) {
    // Add region dropdown
    var regionSelect = document.createElement("select");
    regionSelect.name = "region";
  
    var jsonDataRegion = [
      {
        "type": "table",
        "name": "country",
        "database": "world",
        "data": [
          {"Region": "Caribbean"},
          {"Region": "Southern and Central Asia"},
          {"Region": "Central Africa"},
          {"Region": "Southern Europe"},
          {"Region": "Middle East"},
          {"Region": "South America"},
          {"Region": "Polynesia"},
          {"Region": "Antarctica"},
          {"Region": "Australia and New Zealand"},
          {"Region": "Western Europe"},
          {"Region": "Eastern Africa"},
          {"Region": "Western Africa"},
          {"Region": "Eastern Europe"},
          {"Region": "Central America"},
          {"Region": "North America"},
          {"Region": "Southeast Asia"},
          {"Region": "Southern Africa"},
          {"Region": "Eastern Asia"},
          {"Region": "Nordic Countries"},
          {"Region": "Northern Africa"},
          {"Region": "Baltic Countries"},
          {"Region": "Melanesia"},
          {"Region": "Micronesia"},
          {"Region": "British Islands"},
          {"Region": "Micronesia/Caribbean"}
        ]
      }
    ];

    regionSelect.classList.add("form-control");
  
    // Extract the region data from the JSON
    var regions = jsonDataRegion[0].data.map(entry => entry.Region);
  
    // Create the region dropdown options
    for (var i = 0; i < regions.length; i++) {
      var option = document.createElement("option");
      option.value = regions[i];
      option.text = regions[i];
      regionSelect.appendChild(option);
    }
  
    // Add region dropdown to the container
    container.appendChild(regionSelect);
  
    // Add 'N' input field
    var inputN = document.createElement("input");
    inputN.type = "number";
    inputN.name = "n";
    inputN.placeholder = "Enter N";

    inputN.classList.add("form-control");


    // Add margin between region dropdown and 'N' input field
    regionSelect.style.marginBottom = "10px";
    inputN.style.marginTop = "10px";


  
    // Add 'N' input field to the container
    container.appendChild(inputN);

  }
  