<template>
	<section class="footbox">
		<div class="footer" :class="footerOne" @click="goto('/')">首页</div>
		<div class="footer" :class="footerTwo" @click="goto('/news')">医讯</div>
		<div class="footer consult">
			<div class="consult_bg" @click="goto('/consult')">
				<div class="consult_btn"></div>
			</div>
			<div class="consult_img"></div>
			<span>爱心解答</span>
		</div>
		<div class="footer" :class="footerThree" @click="goto('/message')">消息</div>
		<div class="footer" :class="footerFour" @click="goto('/mycenter')">我</div>
	</section>
</template>
<script>
	export default{
		data(){
			return{
				msg: '嗷嗷',
				footerOne: 'home',
				footerTwo: 'news',
				footerThree: 'message',
				footerFour: 'mycenter'
			}
		},
		created(){
			var currentPath = this.$route.path;
			switch (currentPath) {
				case '/': this.footerOne = 'homed';
				break;
				case '/news': this.footerTwo = 'newsed';
				break;
				case '/message': this.footerThree = 'messageed';
				break;
				case '/mycenter': this.footerFour = 'mycentered';
				break;
			}
		},
		methods:{
			goto(path){
				this.$router.push(path)
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import './static/css/mixin.scss';
	.footbox{
		width: 100%;
		height: 1rem;
		display: flex;
		flex-direction:row; 
		background: white;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 100;
		border-top: 1px solid #b2b2b2;
		.footer{
			float: left;
			display: box;
			flex:1; 
			font-size: 0.2rem;
			padding-top: 0.14rem;
			color: #333333;
		};
		.home{
			@include footerbg('../../static/images/index.png');
		};
		.homed{
			color: $red;
			@include footerbg('../../static/images/indexed.png');
		};
		.news{
			@include footerbg('../../static/images/news.png');
		};
		.newsed{
			color: $red;
			@include footerbg('../../static/images/newsed.png');
		};
		.consult{
			position: relative;
			span{
				position: relative;
				font-size: 0.2rem;
				color: #333333;
				z-index: 99;
			};
			.consult_bg{
				width: 100%;
				height: 130%;
				position: absolute;
				top: -0.38rem;
				background: url('../../static/images/consult_bg.png') no-repeat center center;
				background-size: contain;
				.consult_btn{
					position: relative;
					z-index: 99;
					width: 0.86rem;
					height: 0.86rem;
					border-radius: 50%;
					background-color: $red;
					margin: 0.1rem auto 0;
					background-image: url('../../static/images/jieda.png');
					background-repeat: no-repeat;
					background-position: center;
					background-size: 100% auto;
				};
			};
			.consult_img{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				background-color: #ffffff;
			}
		}
		.message{
			@include footerbg('../../static/images/message.png');
		}
		.messageed{
			color: $red;
			@include footerbg('../../static/images/messageed.png');
		}
		.mycenter{
			@include footerbg('../../static/images/me.png');
		}
		.mycentered{
			color: $red;
			@include footerbg('../../static/images/meed.png');
		}	
	}
	
	
</style>