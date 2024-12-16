document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dish = document.getElementById('dish').value;
    const quantity = document.getElementById('quantity').value;

    // Here, you can send the order details to a server for processing or perform any other actions.

    // For demonstration purposes, let's just display an alert
    alert(`Order Placed!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDish: ${dish}\nQuantity: ${quantity}`);
});
