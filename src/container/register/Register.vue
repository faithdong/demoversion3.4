/*
 * @Author: zhongxd 
 * @Date: 2019-03-08 19:58:38 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-19 21:50:39
 */

<template>
  <el-form
    :model="ruleForm2"
    status-icon
    :rules="rules2"
    ref="ruleForm2"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="ruleForm2.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="userPwd">
      <el-input type="password" v-model="ruleForm2.userPwd" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.userPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        userName: "",
        userPwd: "",
        checkPass: ""
      },
      rules2: {
        userPwd: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // eslint-disable-next-line
          const user = this.ruleForm2.userName;
          const pwd = this.ruleForm2.userPwd;
          // eslint-disable-next-line
          console.log(user, pwd);
          axios.post('/api/user/register',{user, pwd})
          .then(res=>{
            // eslint-disable-next-line
            console.log(res);
          })
          .catch(err=>{
            // eslint-disable-next-line
            console.log(err);
          });
        } else {
          // eslint-disable-next-line
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

