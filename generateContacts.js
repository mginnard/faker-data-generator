// Import faker
const faker = require('faker');
// Import json2csv and fs
const { parse } = require('json2csv');
const fs = require('fs');

// Generate 100 fake contacts
const generateContacts = () => {
  let contacts = [];
  for (let id = 1; id <= 100; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const companyName = faker.company.companyName();
    const domainName = companyName.toLowerCase().replace(/\s+/g, '').replace(/[^\w-]+/g, '') + "fake.com";
    const email = `${firstName[0].toLowerCase()}${lastName.toLowerCase()}fake@${domainName}`;

    contacts.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      companyName: companyName,
      jobTitle: faker.name.jobTitle(),
      email: email,
    });
  }
  return contacts;
};

// Convert to CSV and save to file
const saveContactsToCSV = (contacts) => {
  const csv = parse(contacts);
  fs.writeFile('contacts.csv', csv, (err) => {
    if (err) {
      console.error('Error writing CSV file', err);
    } else {
      console.log('Successfully written to contacts.csv');
    }
  });
};

// Save JSON to file
const saveContactsToJson = (contacts) => {
  const json = JSON.stringify(contacts, null, 2);
  fs.writeFile('contacts.json', json, (err) => {
    if (err) {
      console.error('Error writing JSON file', err);
    } else {
      console.log('Successfully written to contacts.json');
    }
  });
};

// Execute the functions to create both CSV and JSON files
const contacts = generateContacts();
saveContactsToCSV(contacts);
saveContactsToJson(contacts);
