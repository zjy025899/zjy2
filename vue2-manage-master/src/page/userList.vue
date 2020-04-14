
<template>
  <div class="bigbox">
<head-top></head-top>
    <el-container>
      <el-header class="header">订单管理/平台商品订单</el-header>
      <el-container>
        <el-aside class="aside" width="200px">Aside</el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headTop from '../components/headTop'
</script>

<style >
.bigbox {
  height: 100%;
}
.header {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}
.adide {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
