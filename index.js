const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

const conversionFactors = {
  length: {
    millimeter: 1,
    centimeter: 10,
    meter: 1000,
    kilometer: 1_000_000,
    inch: 25.4,
    foot: 304.8,
    yard: 914.4,
    mile: 1_609_344
  },
  weight: {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592
  }
}

function convert(value, fromUnit, toUnit, type) {
  const factors = conversionFactors[type]
  return (value * factors[fromUnit]) / factors[toUnit]
}

function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    return (value * 9/5) + 32
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    return (value - 32) * 5/9
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
    return value + 273.15
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
    return value - 273.15
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
    return (value - 32) * 5/9 + 273.15
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
    return (value - 273.15) * 9/5 + 32
  } else {
    return value
  }
}

app.get('/length', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'length.html'))
})

app.get('/weight', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'weight.html'))
})

app.get('/temperature', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'temperature.html'))
})

app.post('/length', (req, res) => {
  const { value, from_unit, to_unit } = req.body
  const result = convert(parseFloat(value), from_unit, to_unit, 'length')
  res.json({ result, to_unit})
})

app.post('/weight', (req, res) => {
  const { value, from_unit, to_unit } = req.body
  const result = convert(parseFloat(value), from_unit, to_unit, 'weight')
  res.json({ result, to_unit})
})

app.post('/temperature', (req, res) => {
  const { value, from_unit, to_unit } = req.body
  const result = convertTemperature(parseFloat(value), from_unit, to_unit)
  res.json({ result, to_unit})
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})