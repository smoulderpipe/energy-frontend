const buttonCustomers = document.getElementById("getCustomers");
const buttonInvoices = document.getElementById("getInvoices");
const buttonCounties = document.getElementById("getCounties");
const buttonProvinces = document.getElementById("getProvinces");
const buttonAddresses = document.getElementById("getAddresses");

buttonCustomers.addEventListener("click", () => handleClick("getCustomers"));
buttonInvoices.addEventListener("click", () => handleClick("getInvoices"));
buttonCounties.addEventListener("click", () => handleClick("getCounties"));
buttonProvinces.addEventListener("click", () => handleClick("getProvinces"));
buttonAddresses.addEventListener("click", () => handleClick("getAddresses"));

const fetchData = async (res) => {
  const url = `http://localhost:8080/api/${res}`;

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc3NTM5NjEsImV4cCI6MTcxNzc1NzU2MSwic3ViIjoiMSJ9.2bjnaOZ2rOPNierT1L__35BJkt9z2JOJaCdaVY-J7_o",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data.content;
};

const renderCustomers = (data) => {
  const customersDiv = document.getElementById("customersDiv");

  for (let customer of data) {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="card mb-3 mt-5">
        <div class="card-header">
          ${customer.businessName}
        </div>
        <div class="card-body">
          <h5 class="card-title">Business Information</h5>
          <p class="card-text"><strong>VAT Number:</strong> ${
            customer.vatNumber
          }</p>
          <p class="card-text"><strong>Email:</strong> ${customer.email}</p>
          <p class="card-text"><strong>Creation Date:</strong> ${
            customer.creationDate
          }</p>
          <p class="card-text"><strong>Last Contact Date:</strong> ${
            customer.lastContactDate
              ? customer.lastContactDate
              : "No last contact date"
          }</p>
          <p class="card-text"><strong>Yearly Revenue:</strong> ${
            customer.yearlyRevenue
          }</p>
          <p class="card-text"><strong>Certified Email:</strong> ${
            customer.certifiedEmail
          }</p>
          <p class="card-text"><strong>Telephone:</strong> ${
            customer.telephone
          }</p>
        </div>
      </div>
    `;

    customersDiv.appendChild(div);
  }
};

const renderInvoices = (data) => {
  const invoicesDiv = document.getElementById("invoicesDiv");
  for (let invoice of data) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card mb-3 mt-5">
        <div class="card-header">
          Invoice Details
        </div>
        <div class="card-body">
          <h5 class="card-title">Invoice Information</h5>
          <p class="card-text"><strong>Amount:</strong> ${invoice.amount}</p>
          <p class="card-text"><strong>Date:</strong> ${invoice.date}</p>
          <p class="card-text"><strong>Invoice ID:</strong> ${invoice.id}</p>
          <p class="card-text"><strong>Invoice State:</strong> ${invoice.invoiceState}</p>
        </div>
      </div>
    `;
    invoicesDiv.appendChild(div);
  }
};

const renderCounties = (data) => {
  const countiesDiv = document.getElementById("countiesDiv");
  for (let county of data) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card mb-3 mt-5">
        <div class="card-header">
          County Details
        </div>
        <div class="card-body">
          <h5 class="card-title">County Information</h5>
          <p class="card-text"><strong>County Name:</strong> ${county.countyName}</p>
          <p class="card-text"><strong>County Number:</strong> ${county.countyNumber}</p>
          <p class="card-text"><strong>County ID:</strong> ${county.id}</p>
          <p class="card-text"><strong>Province Name:</strong> ${county.provinceName}</p>
        </div>
      </div>
    `;
    countiesDiv.appendChild(div);
  }
};

const renderProvinces = (data) => {
  const provincesDiv = document.getElementById("provincesDiv");
  for (let province of data) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card mb-3 mt-5">
<div class="card-header">
                Province Details
            </div>
            <div class="card-body">
                <h5 class="card-title">Province Information</h5>
                <p class="card-text"><strong>Province ID:</strong> ${province.id}</p>
                <p class="card-text"><strong>Initials:</strong> ${province.initials}</p>
                <p class="card-text"><strong>Province Name:</strong> ${province.provinceName}</p>
                <p class="card-text"><strong>Region:</strong> ${province.region}</p>
            </div>
      </div>
    `;
    provincesDiv.appendChild(div);
  }
};

const renderAddresses = (data) => {
  const addressesDiv = document.getElementById("addressesDiv");
  for (let address of data) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card mb-3 mt-5">
<div class="card-header">
                Address Details
            </div>
<div class="card-body">
                <h5 class="card-title">Address Information</h5>
                <p class="card-text"><strong>ID:</strong> ${address.id}</p>
                <p class="card-text"><strong>Location:</strong> ${address.location}</p>
                <p class="card-text"><strong>Postal Code:</strong> ${address.postalCode}</p>
                <p class="card-text"><strong>Street:</strong> ${address.street}</p>
                <p class="card-text"><strong>Street Number:</strong> ${address.streetNumber}</p>
            </div>
      </div>
    `;
    addressesDiv.appendChild(div);
  }
};

const handleClick = async (buttonId) => {
  let data;

  switch (buttonId) {
    case "getCustomers":
      data = await fetchData("customers");
      renderCustomers(data);
      break;
    case "getInvoices":
      data = await fetchData("invoices");
      renderInvoices(data);
      break;
    case "getCounties":
      data = await fetchData("counties");
      renderCounties(data);
      break;
    case "getProvinces":
      data = await fetchData("provinces");
      renderProvinces(data);
      break;
    case "getAddresses":
      data = await fetchData("addresses");
      renderAddresses(data);
      break;
  }
};

document.addEventListener("DOMContentLoaded", handleClick);
