<template>
  <div>
    <h3>{{city}}'s weather</h3>
    <el-col :span="24">
      <el-table :data="newData" stripe fit style="text-align: center;">
        <el-table-column align="center" prop="dt" label="日期"></el-table-column>
        <el-table-column align="center" prop="weather[0].main" label="天气"></el-table-column>
        <el-table-column align="center" prop="temp.day" label="日间温度"></el-table-column>
        <el-table-column align="center" prop="temp.night" label="夜间温度"></el-table-column>
        <el-table-column align="center" prop="pressure" label="气压值"></el-table-column>
        <el-table-column align="center" prop="icon" label="天气情况">
          <template v-slot="scope">
            <img :src="scope.row.icon" />
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "weather",
  data() {
    return {
      city: this.$route.params.id,
      newData: []
    };
  },
  methods: {
    getData: function() {
      this.$http
        .get(
          `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&mode=json&units=metric&cnt=7&appid=f12159c1f548ea9ab7b5ff1907b1df50`
        )
        .then(response => {
          console.log(response);

          this.newData = response.data.list;
          // console.log(this.newData);
          for (let i = 0; i < this.newData.length; i++) {
            this.newData[i].icon = `http://openweathermap.org/img/w/${this.newData[i].weather[0].icon}.png`;
            var date = new Date(this.newData[i].dt * 1000);
            // console.log(date);

            this.newData[i].dt = `${date.getFullYear()}-${date.getMonth() +
              1}-${date.getDate()}`;
          }
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  },
  created() {
    this.getData();
  }
  // watch: {
  //   city(val) {
  //     // this.greet();
  //     creater();
  //   }
  // }
};
</script>

<style scoped>
</style>