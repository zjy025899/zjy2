<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item ><i class="el-icon-menu"></i>管理列表</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>订单管理</template>
						<el-menu-item index="userList">订单管理-平台</el-menu-item>
						<el-menu-item index="shopList">上传物流商</el-menu-item>
						<el-menu-item index="foodList">查看物流详情</el-menu-item>
						<el-menu-item index="orderList">查看订单-待领取</el-menu-item>
						<el-menu-item index="adminList">查看订单-待受理</el-menu-item>
						<el-menu-item index="adminList">查看订单-待发货</el-menu-item>
						<el-menu-item index="adminList">查看订单-已发货</el-menu-item>
						<el-menu-item index="adminList">查看订单-已签收</el-menu-item>
						<el-menu-item index="adminList">查看订单-已折现</el-menu-item>
						<el-menu-item index="adminList">查看订单-以转增</el-menu-item>
						<el-menu-item index="adminList">查看订单-已退回</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>订单删除</template>
						<el-menu-item index="addShop">订单删除提示</el-menu-item>
						<el-menu-item index="addGoods">删除成功</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>线下</template>
						<el-menu-item index="addShop">线下</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>
