var companiesData = [
    {
        companyName: 'Toyota',
        products: [
            { name: 'Toyota Land Cruiser 2024', price: 120000000, quantity: 50 },
            { name: 'Toyota Corolla 2024 ', price: 6169000, quantity: 189 },
            { name: 'Toyota Yaris 2024', price: 4479000, quantity: 157 },

        ]
    },
    {
        companyName: 'Honda',
        products: [
            { name: 'Honda HR-V 2024', price: 7649000, quantity: 88 },
            { name: 'Honda Vezel 2024', price: 13185000, quantity: 55 },
            { name: 'Honda Accord 2024', price: 22990000, quantity: 21 },
        ]
    },
    {
        companyName: 'Suzuki',
        products: [
            { name: 'Suzuki Alto 2024', price: 2331000, quantity: 389 },
            { name: 'Suzuki Cultus 2024', price: 3858000, quantity: 112 },
            { name: 'Suzuki Swift 2024', price: 4336000, quantity: 44 },
        ]
    },

];


var calculateRevenue = (price, quantity) => price * quantity;


var tableContent = '';

for (var i = 0; i < companiesData.length; i++) {
    var company = companiesData[i];


    tableContent += `
        <tr>
            <td colspan="5" class="company-header">${company.companyName}</td>
        </tr>
    `;

    var totalRevenue = 0;

    for (var j = 0; j < company.products.length; j++) {
        var product = company.products[j];
        var revenue = calculateRevenue(product.price, product.quantity);
        totalRevenue += revenue;

        tableContent += `
            <tr>
                <td>${j + 1}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>${product.quantity}</td>
                <td>${revenue.toLocaleString()}</td>
            </tr>
        `;
    }


    tableContent += `
        <tr>
            <td colspan="5" class="total-revenue">Total Revenue Generate by ${company.companyName} in 2024: ${totalRevenue.toLocaleString()}</td>
        </tr>
    `;
}


document.getElementById('table-body').innerHTML = tableContent;
