// think JS

var siteNameInput = document.getElementById('siteNameInput');
var siteUrlInput = document.getElementById('siteUrlInput');

var websiteList = [];

if(localStorage.getItem('websiteList') != null)
{
    websiteList = JSON.parse(localStorage.getItem('websiteList'));
    
    displayData();
}

function submitWebsite()
{
    var website = {
        wsName : siteNameInput.value,
        wsURL : siteUrlInput.value
    };

    // validationInputs();

    websiteList.push(website);     
    clearWebsiteData();
    displayData();

    localStorage.setItem('websiteList' , JSON.stringify(websiteList) );

}

function clearWebsiteData()
{
    siteNameInput.value = "";
    siteUrlInput.value = "";
}

function displayData()
{
    var dataContainer = "";
    for(var i = 0; i < websiteList.length ;i++)
    {
        dataContainer += `<tr class="text-center ">
        <td scope="row">${ i + 1}</td>
        <td>${websiteList[i].wsName}</td>
        <td><a href="${websiteList[i].wsURL}" target = "_blank"><button onclick="visitWebsite(${i});" class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
        <td><button onclick="deleteWebsite(${i});" class="btn btn-danger"><i class="fa-solid fa-trash pe-2"></i>Delete</button></td>
        </tr>`
    }
    
    document.getElementById('tbody').innerHTML = dataContainer;
}

function deleteWebsite(websiteIndex)
{
    websiteList.splice(websiteIndex , 1);
    displayData();

    // Save the updated list to local storage
    localStorage.setItem('websiteList', JSON.stringify(websiteList));
   
}

function visitWebsite(websiteIndex){

    var urlPath = websiteList[websiteIndex].wsURL;
    // console.log(urlPath);
    // visitWebsite(urlPath);
    
    window.open(urlPath , '_blank');
    
}

// function validationInputs() {
//     // Validation checks
//     var nameRegex = /^.{3,}$/;
//     var urlRegex = /^(https?:\/\/)?([\w\d.-]+)\.([a-z]{2,})(\/.*)?$/i;

//     if (!nameRegex.test(siteNameInput.value)) {
//         alert('Website name must be at least 3 characters long.');
//         return;
//     }

//     if (!urlRegex.test(siteUrlInput.value)) {
//         alert('Please enter a valid URL.');
//         return;
//     }
    
// }