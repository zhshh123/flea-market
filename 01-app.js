// 商品数据
const products = [
    { id: 1, name: "山地自行车", image: "./images/山地自行车.jpg", rating: 5 },
    { id: 2, name: "公路自行车", image: "./images/公路自行车.jpg", rating: 4 },
    { id: 3, name: "折叠自行车", image: "./images/折叠自行车.jpg", rating: 3 },
    { id: 4, name: "儿童自行车", image: "./images/儿童自行车.jpg", rating: 5 },
    { id: 5, name: "电动自行车", image: "./images/电动自行车.jpg", rating: 4 },
    { id: 6, name: "公路自行车", image: "./images/公路自行车2.jpg", rating: 4 },
    { id: 7, name: "折叠自行车", image: "./images/折叠自行车2.jpg", rating: 3 },
    { id: 8, name: "儿童自行车", image: "./images/儿童自行车2.jpg", rating: 5 },
    { id: 9, name: "电动自行车", image: "./images/电动自行车2.jpg", rating: 4 }
];

// 动态加载商品
function loadProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // 清空当前产品列表

    const itemsToDisplay = filteredProducts.length > 0 ? filteredProducts : products;

    // 检查过滤后的产品是否为空
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>未找到商品。</p>'; // 显示未找到商品的消息
        return; // 退出函数
    }

    itemsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}">
            <p>评分: ${product.rating} 星</p>
            <button onclick="viewDetails(${product.id})">查看详情</button>
        `;

        productList.appendChild(productItem);
    });
}

// 搜索功能
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    loadProducts(filteredProducts); // 传入过滤后的商品
});

// 筛选功能
document.getElementById('filter-select').addEventListener('change', function() {
    const filterValue = this.value;
    let filteredProducts;

    if (filterValue === "all") {
        filteredProducts = products; // 显示所有商品
    } else {
        filteredProducts = products.filter(product => product.rating === parseInt(filterValue));
    }
    
    loadProducts(filteredProducts); // 传入过滤后的商品
});

// 发布商品的功能
function publishProduct() {
    const imageInput = document.getElementById('product-image').value; // 假设有一个输入框获取商品图片
    const nameInput = document.getElementById('product-name').value; // 假设有一个输入框获取商品名称
    const ratingInput = document.getElementById('product-rating').value; // 假设有一个输入框获取商品评分

    const newProduct = {
        id: products.length + 1, // 给新商品一个唯一的ID
        name: nameInput, // 使用输入框获取的商品名称
        image: imageInput, // 使用输入框获取的商品图片
        rating: parseInt(ratingInput) // 使用输入框获取的评分并转为整数
    };

    products.push(newProduct); // 将新商品添加到商品数组中

    // 存储新商品到 localStorage
    localStorage.setItem('newProduct', JSON.stringify(newProduct));

    loadProducts(products); // 重新加载产品列表
}

// 在页面加载时检查是否有新商品
window.onload = function() {
    // 加载原有商品
    loadProducts(products);

    // 检查是否有新商品
    const newProduct = localStorage.getItem('newProduct');
    if (newProduct) {
        const product = JSON.parse(newProduct);
        displayProduct(product);
        // 清除 localStorage 中的商品信息
        localStorage.removeItem('newProduct');
    }
};

// 显示商品的函数
function displayProduct(product) {
    const productList = document.getElementById('product-list');
    
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    // 创建商品名称
    const nameElement = document.createElement('h3');
    nameElement.innerText = product.productName;

    // 创建商品图片
    const imageElement = document.createElement('img');
    imageElement.src = product.productImage;

    // 创建评分元素
    const ratingElement = document.createElement('p');
    ratingElement.innerText = `评分: ${product.rating} 星`;

    // 创建查看详情按钮
    const buttonElement = document.createElement('button');
    buttonElement.innerText = "查看详情";
    buttonElement.onclick = function() {
        // 这里可以添加查看详情的逻辑
        alert(`查看 ${product.productName} 的详情`);
    };

    productItem.appendChild(nameElement);
    productItem.appendChild(imageElement);
    productItem.appendChild(ratingElement);
    productItem.appendChild(buttonElement);

    productList.appendChild(productItem);
}

// 查看详情
function viewDetails(productId) {
    window.location.href = `./06-product-detail.html?id=${productId}`;
}











