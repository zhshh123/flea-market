// 从URL获取商品ID
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

// 商品数据
const products = [
    { id: 1, name: "山地自行车", image: "./images/山地自行车.jpg", rating: 5, price: "2000元", description: "适合各种地形的山地车。" },
    { id: 2, name: "公路自行车", image: "./images/公路自行车.jpg", rating: 4, price: "1500元", description: "轻便快速的公路车。" },
    { id: 3, name: "折叠自行车", image: "./images/折叠自行车.jpg", rating: 3, price: "9000元", description: "可轻松折叠和展开，方便携带，非常适合城市通勤或短途旅行"  },
    { id: 4, name: "儿童自行车", image: "./images/儿童自行车.jpg", rating: 5, price: "205元", description: "安全，通常配备保护装置"  },
    { id: 5, name: "电动自行车", image: "./images/电动自行车.jpg", rating: 4, price: "200元", description: "能够帮助骑行者在爬坡或长途骑行时减轻体力负担"  },
    { id: 6, name: "公路自行车", image: "./images/公路自行车2.jpg", rating: 4, price: "20600元", description: "增加了速度，适合在光滑的公路上骑行。"  },
    { id: 7, name: "折叠自行车", image: "./images/折叠自行车2.jpg", rating: 3, price: "200980元", description: "适合城市道路和轻度越野。"  },
    { id: 8, name: "山地自行车", image: "./images/儿童自行车2.jpg", rating: 5,price: "2040元", description: "根据孩子的身高和年龄，儿童自行车有多种尺寸选择"  },
    { id: 9, name: "公路自行车", image: "./images/电动自行车2.jpg", rating: 4, price: "2700元", description: "减少了对化石燃料的依赖，适合城市短途出行。"  }
];

// 根据ID查找商品
const product = products.find(p => p.id === productId);

// 显示商品详情
if (product) {
    const detailContainer = document.getElementById('product-detail');
    detailContainer.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>评分: ${product.rating} 星</p>
        <p>价格: ${product.price}</p>
        <p>介绍: ${product.description}</p>
        <div>
            <button onclick="goBack()">返回</button>
            <button id="buy-button">购买</button>
        </div>
    `;

    // 点击购买按钮
    document.getElementById('buy-button').onclick = function() {
        addToCart({
            name: product.name,
            image: product.image,
            rating: product.rating,
            price: product.price,
            description: product.description
        });
        alert('购买成功！');
        window.location.href = './01-index.html'; // 返回首页
    };
}

// 返回函数
function goBack() {
    window.history.back();
}


// 引入购物车相关功能
function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

