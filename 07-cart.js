const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// 添加商品到购物车
function addToCart(product) {
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// 显示购物车商品
function loadCart() {
    const cartList = document.getElementById('cart-list'); // 改为 cart-list
    cartList.innerHTML = ''; // 清空当前购物车列表

    if (cartItems.length === 0) {
        cartList.innerHTML = '<p>无商品</p>'; // 显示无商品
        return;
    }

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';

        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}">
            <p>评分: ${item.rating} 星</p>
            <p>价格: ${item.price} 元</p>
            <p>介绍: ${item.description}</p>
        `;
        
        cartList.appendChild(itemElement);
    });
}


// 页面加载时显示购物车商品
window.onload = loadCart;
