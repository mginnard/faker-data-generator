# Data generator for database seeding using faker.js

## Basics

A collection of scripts (currently `generateCompanies.js` and `generateContacts.js`) that output fake company and contact records in JSON and CSV format that can be used to seed a CRM (e.g. HubSpot) with fake data for design & development purposes.

The schema for records can be changed or updated to create records with different properties, or used to create records of different types, as needed. To do this, clone this repo, update any of the `generate{{recordType}}.js` functions to meet the record criteria you're looking for, then run the functions to output a list of records of that type in JSON and CSV formats.

### Running this project locally

1. Ensure you have `node` and `npm` installed.
2. Clone this repo.
3. Navigate to the project, your `faker-data-generator` directory.
4. Run `npm install` install the necessary dependencies, e.g. `faker`, `json2csv`, etc.
5. Run `node generateCompanies.js` or `node generateContacts.js`

Running either `generateCompanies.js` or `generateContacts.js` will create a corresponding CSV and JSON file for that record type, e.g. [contacts.csv](https://github.com/mginnard/faker-data-generator/blob/main/contacts.csv) or [contacts.json](https://github.com/mginnard/faker-data-generator/blob/main/contacts.json).

## Appreciation

Thanks to [Faker](https://fakerjs.dev/) and [json2csv/](https://mircozeiss.com/json2csv/) for the creation of useful utilities for the development community.
