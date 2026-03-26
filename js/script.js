
document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("formMessage").innerHTML =
"✅ Thank you! Your message has been received. Our team will contact you soon.";

});

}

});

function loadMarketingData(){

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => {

document.getElementById("apiData").innerHTML =
"<h3>Campaign Results</h3>" +
"<p><strong>Website Traffic:</strong> +65%</p>" +
"<p><strong>Social Media Engagement:</strong> +120%</p>" +
"<p><strong>Lead Conversions:</strong> +38%</p>" +
"<p>These results were achieved through targeted SEO and social media campaigns.</p>";

});

}