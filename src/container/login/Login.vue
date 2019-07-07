/*
* @Author: zhongxd
* @Date: 2019-03-08 17:54:54
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-04-28 00:38:15
*/


<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm2.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
    <ChildA :parentToChildData="needTransmitsData"></ChildA>
  </el-form>
</template>

<script>
 // import axios from "axios";
  // import { mapState, mapActions } from 'vuex'
  import ChildA from '../../components/Child-A.vue';
  export default {
    components:{ChildA},
    data() {
      
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      };
      return {
        tempObj:{
          a:1,
          b:"ceshi",
          c:true,
        },
        ruleForm2: {
          pass: ""
        },
        rules2: {
          pass: [{
            validator: validatePass,
            trigger: "blur"
          }]
        },
        needTransmitsData:[
          {
            label:"测试一",
            value:"0"
          }
        ],
      };
    },
    methods: {
      submitForm(formName) {
        // eslint-disable-next-line
        console.log(formName);
        this.tempObj.d = 5;
        this.$set(this.tempObj,"e",6);
        this.tempObj= Object.assign({}, this.tempObj, { d: 1, e: 2 })
        // this.$refs[formName].validate(valid => {
        //   if (valid) {
        //     alert("submit!");
        //     let userName = this.ruleForm2.name;
        //     let password = this.ruleForm2.pass;
        //   } else {
        //     // eslint-disable-next-line
        //     console.log("error submit!!");
        //     return false;
        //   }
        // });

        // axios.get('/user/list', {})
        //   .then(res => {
        //     // eslint-disable-next-line
        //     console.log(res);
        //   })
        //   .catch(err => {
        //     // eslint-disable-next-line
        //     console.log(err);
        //   });

        let params = {
          user: this.ruleForm2.userName,
          pwd: this.ruleForm2.userPwd
        }
        this.$store
          .dispatch("Login", params)
          .then(() => {
            this.$router.push({
              path: "/"
            });
          })
          .catch(error => {
            // eslint-disable-next-line
            console.log(error.response);
          });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
      // eslint-disable-next-line
     console.log("child-mounted");
    }
  };
</script>