// Import faker
const faker = require('faker');
// Import json2csv and fs
const { parse } = require('json2csv');
const fs = require('fs');

// Generate 100 fake companies with domain names
const generateCompanies = () => {
  let companies = [];
  for (let id = 1; id <= 100; id++) {
    const companyName = faker.company.companyName();
    // Create a domain name based on the company name
    // Replace spaces and special characters in the company name, append "fake" and a domain suffix
    const domainName = companyName.toLowerCase().replace(/\s+/g, '').replace(/[^\w-]+/g, '') + "fake.com";
    companies.push({
      id: id,
      name: companyName,
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs(),
      domain: domainName, // Add the domain name to the company details
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
    });
  }
  return companies;
};

// Convert to CSV and save to file
const saveCompaniesToCSV = (companies) => {
  const csv = parse(companies);
  fs.writeFile('companies.csv', csv, (err) => {
    if (err) {
      console.error('Error writing CSV file', err);
    } else {
      console.log('Successfully written to companies.csv');
    }
  });
};

// Save JSON to file
const saveCompaniesToJson = (companies) => {
  const json = JSON.stringify(companies, null, 2);
  fs.writeFile('companies.json', json, (err) => {
    if (err) {
      console.error('Error writing JSON file', err);
    } else {
      console.log('Successfully written to companies.json');
    }
  });
};

// Execute the functions to create both CSV and JSON files
const companies = generateCompanies();
saveCompaniesToCSV(companies);
saveCompaniesToJson(companies);
