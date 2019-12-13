<template>
  <div class="ListDemo">
    <!-- 联系人列表 -->
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />
    <!-- 新建联系人 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import { ContactList, Toast, Popup, ContactEdit } from "vant";


export default {
  name: "ListDemo",
  components: {
    /* 引入 vant组件 */
    [ContactList.name]: ContactList,
    [Popup.name]: Popup,
    [ContactEdit.name]: ContactEdit
  },
  data() {
    return {
      list: [], //展示列表
      instence: null, //请求实例
      showEdit: false, //控制弹出层是显示还是隐藏
      editingContact: {}, //正在编辑的对象
      isEdit: false //新建或编辑
    };
  },
  created() {
    //创建请求实例
    /* this.instence = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000
    }); */
    //发送get请求
    this.readList()
  },
  methods: {
    //添加事件
    onAdd() {
        this.showEdit = true;
        //控制是添加还是编辑
        this.isEdit = false;
    },
    //修改事件
    onEdit(info) {
        this.showEdit = true;
        this.isEdit = true;
        this.editingContact = info;
    },
    //保存联系人
    async onSave(info) {
        if (this.isEdit) {
             let res =await this.$Http.updateContentList(info);
             if (res.code === 200) {
                    this.showEdit = false;
                    Toast("保存成功");
                    this.readList();
            }

            //编辑保存
            /* this.instence.put('/contact/edit',info).then(res=>{
                if (res.data.code === 200) {
                    this.showEdit = false;
                    Toast("保存成功");
                    this.readList();
                }
            }).catch(() => {
                Toast("请求失败，请稍后再试");
            }); */
        } else {
            let res =await this.$Http.addContentListJson(info);
            // let res =await this.$Http.addContentListForm(info,true);
            if (res.code === 200) {
                    this.showEdit = false;
                    Toast("保存成功");
                    this.readList();
            }

        //添加保存   原始
      /*   this.instence.post("/contact/new/json", info)
            .then(res => {
                if (res.data.code === 200) {
                    this.showEdit = false;
                    Toast("保存成功");
                    this.readList();
                }
            }).catch(() => {
                Toast("请求失败，请稍后再试");
            }); */
        } 
    },
    //删除联系人
    async onDelete(info) {
        //封装调用
        let res = await this.$Http.delContentList({
          id:info.id,
        })
        if (res.code == 200) {
                this.showEdit = false;
                this.readList();
                Toast('删除成功');
        }
        //原始调用
        /* this.instence.delete('/contact',{
            params:{
                id:info.id
            }
        }).then(res=>{
            if (res.data.code == 200) {
                this.showEdit = false;
                this.readList();
                Toast('删除成功')
            }
        }).catch(()=>{
            Toast("请求失败，请稍后再试");
        }) */
    },
    //数据获取
    async readList() {
        //封装调用
        let res = await this.$Http.getContentList();
        this.list = res.data;
        //发送get请求  原始
        /* this.instence
        .get("/contactList")
        .then(res => {
          this.list = res.data.data;
        })
        .catch(err => {
          Toast("服务器错误，请稍后再试");
          console.log(err);
        }); */
    }
  }
};
</script>
<style lang="less" scoped>
.van-contact-list_add {
  z-index: 0;
}
.van-popup {
  height: 100%;
}
</style>
