document.getElementById('publish-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    const productName = document.getElementById('product-name').value;
    const productImage = document.getElementById('product-image').files[0]; // 获取文件对象

    // 确保商品图片存在
    if (!productImage) {
        alert("请上传商品图片。");
        return;
    }

    // 生成随机评分
    const randomRating = Math.floor(Math.random() * 5) + 1;

    // 创建 FileReader 实例以读取图片文件
    const reader = new FileReader();
    reader.onload = function(e) {
        // 创建新商品对象
        const newProduct = {
            productName: productName,
            productImage: e.target.result, // 使用 FileReader 读取的图片数据
            rating: randomRating
        };

        // 将新商品存储到 localStorage
        localStorage.setItem('newProduct', JSON.stringify(newProduct));

        // 跳转回首页
        window.location.href = './01-index.html'; // 确保路径正确
    };

    // 读取上传的图片文件
    reader.readAsDataURL(productImage);
});
