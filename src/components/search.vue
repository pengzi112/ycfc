<template>
	<div class="searchBox">
		<div class="address">北京﹀</div>
		<input type="text" class="search_text" name="search" placeholder="搜索专家姓名、医院">
	</div>
</template>
<script>
	export default{
		data(){
			return{
				address: '北京'
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "./static/css/mixin.scss";
	.searchBox{
		width: 100%;
		height: 0.8rem;
		line-height: 0.8rem;
		position: fixed;
		top: 0.1rem;
		z-index: 999;
		.address{
			height: 0.8rem;
			line-height: 0.8rem;
			float: left;
			font-size: 0.28rem;
			color: black;
			margin-left: 0.3rem;
			padding-right: 0.1rem;
		};
		.search_text{
			float: left;
			width: 66%;
			height: 0.6rem;
			font-size: 0.28rem;
			margin:0.1rem 0 0 0.1rem;
			padding-left: 0.9rem;
			border-radius: 12px;
			border: 0;
			background:rgba(255,255,255,0.5);
		}
	}
</style>