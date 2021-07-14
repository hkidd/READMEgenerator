// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(`${license}`);
  return "";
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "This project is licensed under the ${license} license.";
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}
  ## ${responses.name}
  ${renderLicenseBadge(responses.license)}
  ${renderLicenseLink(responses.license)}
  ${renderLicenseSection(responses.license)}
`;
};

module.exports = generateMarkdown;
