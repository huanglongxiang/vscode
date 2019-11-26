$(function () {
    let loadBook = () => {
        $.ajax({
            type: 'get',
            url: '/books',
            dataType: 'json',
            success: (data) => {
                //渲染主页
                let html = template('tblist', { list: data });
                $('#dataList').html(html);
                //加载事件
                $('#dataList').children('tr').each((index,item)=>{
                    //item遍历出来是document对象，需要转换成jq对象
                    let $td = $(item).find('td:eq(5)');
                    let $id = $(item).find('td:eq(0)').text();
                    //修改
                    $td.find('a:eq(0)').on('click',()=>{
                        getBook($id);
                    });
                    //删除
                    $td.find('a:eq(1)').on('click',()=>{
                        removeBook($id);
                    })
                });
            }
        })
    }
    $('#addBookId').click(()=>{
         //添加
        addBook();
        //重置表单
        let $form = $('#addBookForm');
        $form.get(0).reset(0);
        $form.find('input[type=hidden]').val('');
    })
    loadBook();

    let addBook = () => {
        let form = $('#addBookForm');
        let paths = new MarkBox(600,400,'添加图书',form.get(0));
        paths.init();
        form.find('input[type=button]').unbind('click').on('click',()=>{
            $.ajax({
                type:'post',
                url:'/books/book',
                //获取表单中所有的值
                data:form.serialize(),
                dataType:'json',
                success:(data)=>{
                    if (data.flag == 1) {
                        //关闭弹框
                        paths.close();
                        loadBook();
                    }
                }
            })
        });
    }
    let updataBook = (form,newpath) => {
        //修改
        console.log(form,newpath);
        $.ajax({
            type:'put',
            dataType:'json',
            url:'/books/book',
            data:form.serialize(),
            success:(data)=>{
                if (data.flag == 1) {
                    newpath.close();
                    loadBook();
                }
            }
        })
    }

    let getBook = (id) => {
        //获取单个
        $.ajax({
            type:'get',
            url:'/books/book/'+id,
            dataType:'json',
            success:(data)=>{
                let form = $('#addBookForm');
                let newpath = new MarkBox(600,400,'修改图书',form.get(0));
                newpath.init();
                form.find('input[name=id]').val(data.id);
                form.find('input[name=author]').val(data.author);
                form.find('input[name=cetagory]').val(data.cetagory);
                form.find('input[name=description]').val(data.description);
                form.find('input[name=name]').val(data.name);
                form.find('input[type=button]').unbind('click').on('click',()=>{
                    updataBook(form,newpath);
                })
            }
        })
    }
    let removeBook = (id) => {
        //删除
        $.ajax({
            type:'delete',
            url:'/books/book/'+id,
            dataType:'json',
            success:(data)=>{
                if (data.flag == 1) {
                    loadBook();
                }
            }
        })
    }
})