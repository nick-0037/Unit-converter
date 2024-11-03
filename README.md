# Unit Converter

This command-line-interface(CLI) application that runs an Express server to handle unit conversions for length, weight, and temperature. Users can access the application via a browser to convert units easily.
https://roadmap.sh/projects/unit-converter

## Installation

Clone the repository and navigate into the project directory:

```bash
  git clone https://github.com/nick-0037/Task-tracker-cli.git
  cd unit-converter
  npm install
```

## Usage

To start the unit converter server, use the following command:

```
  node index.js // run server, localhost:3000
```

This will run the server at localhost:3000. Open your browser and navigate to one of the following paths based on the type of conversion you need:

- Length Conversion: localhost:3000/length
- Weight Conversion: localhost:3000/weight
- Temperature Conversion: localhost:3000/temperature

## Features
- Convert units of length (e.g., meters to kilometers)
- Convert units of weight (e.g., grams to pounds)
- Convert units of temperature (e.g., Celsius to Fahrenheit)

Each page provides an input form to select the units and enter values, with results displayed on the same page after submitting the form.
