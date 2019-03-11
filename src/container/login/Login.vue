/*
* @Author: zhongxd
* @Date: 2019-03-08 17:54:54
* @Last Modified by: zhongxd
* @Last Modified time: 2019-03-11 23:04:02
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
  </el-form>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: "",
        },
        rules2: {
          pass: [{
            validator: validatePass,
            trigger: "blur"
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          debugger;
          if (valid) {
            alert("submit!");
            let userName = this.ruleForm2.name;
            let password = this.ruleForm2.pass;
            this.$store.dispatch('Login', {
                userName,
                password
              })
              .then(() => {
                this.$router.push({
                  path: '/'
                });
              })
              .catch((error) => {
                console.log(error.response);
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