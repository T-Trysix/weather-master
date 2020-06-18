<template>
  <div class="home">
    <el-col :span="24" class="toolbar">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="请输入城市拼音" v-model="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-on:click="change">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- <h3>{{city}}</h3> -->
    </el-col>
    <router-view></router-view>
  </div>
</template>

<script>
import Weather from "../components/weather";

export default {
  name: "Home",
  data() {
    return {
      input: "",
      city: "ningbo"
    };
  },
  methods: {
    change: function() {
      this.city = this.input;
      // let str = 'weather/'+this.city;
      // this.$router.push(str)
      this.$router.push(this.city);
      // console.log(this.city);
      window.location.reload();
    }
  },
  components: {
    Weather
  }
};
</script>
<style scoped>
body {
  position: relative;
}
.home {
  position: absolute;
  width: 600px;
  height: 1000px;
  background-color: #11baee;
  left: 50%;
  transform: translate(-50%);
  border-radius: 5px;
  text-align: center;
  padding: 50px 0;
}
</style>
