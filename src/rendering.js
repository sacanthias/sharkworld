// pseudocode
// take post front matter (YAML > JSON)
// or deadass just take the YAML and use a node plugin to read it directly
// post is now represented as a JSON object 
// take ejs formatted template
// iterate through the post object and fill in the blanks for the template
// save file as slug in static folder
// serve from static folder
// profit