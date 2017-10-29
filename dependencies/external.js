const express = require('express')
const bodyParser = require('body-parser')
const awilix = require('awilix')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

module.exports.configure = container => {
  container.registerValue({
    express,
    bodyParser,
    awilix,
    cors,
    fs,
    path,
    mongoose
  })

  return container
}