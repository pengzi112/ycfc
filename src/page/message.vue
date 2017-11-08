<template>
	<section>
		<div class="item">{{msg}}</div>
		<foot-guide></foot-guide>
	</section>
</template>
<script>
	import footGuide from '../components/footer';
	export default {
		data () {
			return {
				msg: '这是消息'
			}
		},
		components:{
			footGuide,
		},
	}
</script>
<style lang="scss" scoped>
	.item{
		font-size: 0.3rem;
	}
</style>