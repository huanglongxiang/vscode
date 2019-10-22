// 标准AJAX方法
function getHTTPObject() {
    var xhr;
    //检测支持
    if (window.XMLHttpRequest) {
        // 如果支持就使用
        xhr = new XMLHttpRequest();
    }
    //检测IE6AJAX
    else if (window.ActiveXObject) {
        // 将其保存到xhr变量中
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    // 输出正确的变量，以便我们使用
    return xhr;
}
// 定义ajax调用
function ajaxCall(dataUrl, outputElement, callback) {
    // 使用我们的函数获得正确的基于支持的ajax对象
    var request = getHTTPObject();
    outputElement.innerHTML = 'loading...';
    request.onreadystatechange = function () {
        // 检查ajax调用是否通过
        if (request.readyState === 4 && request.statue === 200) {
            // 将ajax响应保存到变量中
            var contacts = JSON.parse(request.responseText);
            // 在执行回调之前，确保它确实是一个函数
            if (typeof callback === 'function') {
                callback(contacts);
            }
        }
    }
    request.open('GET', dataUrl, true);
    request.send(null);
}
// 将所有内容封装到一个匿名函数中
(function () {
    alert("222");
    //定义获取你所需要的DOM节点，并将其保存在变量中
    var searchForm = document.getElementById('search-from'),
        searchField = document.getElementById('q'),
        getAllButton = document.getElementById('get-all'),
        target = document.getElementById('output');
    // 定义地址簿方法
    var addr = {
        search: function (event) {
            // 设置输出元素
            var output = document.getElementById('output');
            // 启动调用AJAX
            ajaxCall('../data/contact.json', output, function (data) {
                // 将输入值、联系人长度和i保存到变量中
                var searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;
                // 停止默认行为
                event.preventDefault();
                // 清理目标区域，以防里面有东西
                target.innerHTML = '';
                // 检查计数
                if (count > 0 && searchValue !== '') {
                    // 循环通过接触点
                    for (i = 0; i < count; i++) {
                        // 查看name值，看看它是否包含搜索项字符串
                        var obj = addrBook[i],
                            isItFound = obj.name.indexOf(searchValue);
                        // 只要不是-1就表示找到了匹配项
                        if (isItFound !== -1) {
                            target.innerHTML += '<p>' + obj.name + '<a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
                        }
                    }
                }
            })
        },
        getAllContacts: function () {
            // 设置输出元素
            var output = document.getElementById('output');
            console(output);
            // 启动调用AJAX
            ajaxCall('../data/contact.json', output, function (data) {
                var addrBook = data.addressBook,
                    count = addrBook.length,
                    i;
                // 清理目标区域，以防里面有东西
                target.innerHTML = '';
                // 检查计数
                if (count>0) {
                     // 循环通过接触点
                     for (i = 0;  i < count; i++) {
                          // 查看name值，看看它是否包含搜索项字符串
                        var obj = addrBook[i];
                        target.innerHTML += '<p>' + obj.name + '<a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
                     }
                }
            })
        },
        setActiveSection:function(){
            // 在DIV中添加class类样式
            this.parentNode.setAttribute('class','active');
        },
        removeActiveSection:function(){
            // 把DIV中的样式移除
            this.parentNode.removeAttribute('class');
        },
        addHoverClass:function(){
            searchForm.setAttribute('class','hovering');
        },
        removeHoverClass:function(){
            searchForm.removeAttribute('class');
        }
    }

    searchForm.addEventListener('submit',addr.search,false);
    getAllButton.addEventListener('click',addr.getAllContacts,false);
})
