document.addEventListener('DOMContentLoaded', function() {
   
    const dishData = JSON.parse(sessionStorage.getItem('currentDish'));
    
    if (dishData) {
       
        document.getElementById('dishName').textContent = dishData.name;
        document.getElementById('dishImage').src = dishData.image;
        document.getElementById('category').textContent = dishData.category;
        document.getElementById('price').textContent = `¥${dishData.price}`;
        document.getElementById('taste').textContent = dishData.taste;
        document.getElementById('ingredients').textContent = dishData.ingredients;
    }
}); 