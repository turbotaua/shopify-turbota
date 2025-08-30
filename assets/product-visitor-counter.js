document.addEventListener('DOMContentLoaded', function() {
    const minVisitors = 5;
    const maxVisitors = 16;
    const minInventory = 2;
    const maxInventory = 10;

    const visitorCount = Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors;
    const inventoryCount = Math.floor(Math.random() * (maxInventory - minInventory + 1)) + minInventory;

    document.querySelector('.visitor-number').textContent = visitorCount;
    document.querySelector('.inventory-number').textContent = inventoryCount;
});
