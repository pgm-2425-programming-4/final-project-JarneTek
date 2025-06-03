// Test script to validate Strapi API URLs
const API_URL = "http://localhost:1337/api";
const API_TOKEN =
  "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";

console.log("Testing API URLs...");

// Test 1: Get all statuses
const statusUrl = `${API_URL}/statuses?populate=*`;
console.log("Status URL:", statusUrl);

// Test 2: Get filtered tasks for specific status ID
const statusId = 2; // "Done" status
const taskUrl = `${API_URL}/tasks?populate=categorie&filters[categorie][id][$eq]=${statusId}`;
console.log("Task URL for status ID 2:", taskUrl);

// Test 3: URL encode check
const encodedUrl = encodeURI(taskUrl);
console.log("URL encoded:", encodedUrl);

// You can copy these URLs into Thunder Client to test manually
