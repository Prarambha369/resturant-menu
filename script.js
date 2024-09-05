document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const springRollsQuantity = document.getElementById('spring-rolls-quantity').value;
    const garlicBreadQuantity = document.getElementById('garlic-bread-quantity').value;
    const grilledChickenQuantity = document.getElementById('grilled-chicken-quantity').value;

    if (springRollsQuantity == 0 && garlicBreadQuantity == 0 && grilledChickenQuantity == 0) {
        alert('Please order at least one item.');
        return;
    }

    alert('Thank you for your order! Your order has been placed successfully.');
});