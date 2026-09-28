const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'contacts.config.json');
if (!fs.existsSync(configPath)) {
  console.error('contacts.config.json not found!');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const targets = [
  path.join(__dirname, '..', 'assets', 'index-s8_L8jog.js'),
  path.join(__dirname, '..', 'public', 'assets', 'index-s8_L8jog.js')
];

for (const target of targets) {
  if (!fs.existsSync(target)) continue;

  let js = fs.readFileSync(target, 'utf8');

  // Replace vl object properties
  js = js.replace(/shortName:"[^"]*"/, `shortName:"${config.shortName}"`);
  js = js.replace(/oab:"[^"]*"/, `oab:"${config.oab}"`);
  js = js.replace(/cnpj:"[^"]*"/, `cnpj:"${config.cnpj}"`);
  js = js.replace(/experience:"[^"]*"/, `experience:"${config.experience}"`);
  js = js.replace(/coverage:"[^"]*"/, `coverage:"${config.coverage}"`);
  js = js.replace(/instagramHandle:"[^"]*"/, `instagramHandle:"${config.instagramHandle}"`);
  js = js.replace(/instagramUrl:"[^"]*"/, `instagramUrl:"${config.instagramUrl}"`);
  js = js.replace(/city:"[^"]*"/, `city:"${config.city}"`);
  js = js.replace(/phoneDisplay:"[^"]*"/, `phoneDisplay:"${config.phoneDisplay}"`);
  js = js.replace(/phoneE164:"[^"]*"/, `phoneE164:"${config.phoneE164}"`);
  js = js.replace(/line:"[^"]*"/, `line:"${config.addressLine}"`);
  js = js.replace(/postalCode:"[^"]*"/, `postalCode:"${config.postalCode}"`);

  // Replace schema telephone
  js = js.replace(/telephone:"\+55[^"]*"/, `telephone:"+55 ${config.phoneDisplay.replace(/[()]/g, '').trim()}"`);

  // Replace Google Maps link
  js = js.replace(/Id="https:\/\/www\.google\.com\/maps\/search\/\?[^"]*"/, `Id="${config.mapsUrl}"`);

  fs.writeFileSync(target, js);
  console.log(`Updated contacts in: ${target}`);
}

console.log('Contacts synchronization complete!');
