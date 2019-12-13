const LIST_CONTENT = {
    //获取联系人
    getContentList:{
        method: 'get',
        url:'/contactList'
    },
    //添加联系人
    addContentListForm:{
        method: 'post',
        url:'/contact/new/form'
    },
    addContentListJson:{
        method: 'post',
        url:'/contact/new/json'
    },
    //修改联系人
    updateContentList:{
        method: 'put',
        url:'/contact/edit'
    },
    //删除联系人
    delContentList:{
        method: 'delete',
        url:'/contact'
    },
}
export default LIST_CONTENT