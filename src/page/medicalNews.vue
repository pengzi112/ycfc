<template>
	<section class="newsBox">
		<div class="newsTitle">医讯</div>
		<section class="itemBox">
			<div class="newsList">
				<div class="listTitle">夏日大作战之避暑美食大过招！食神，，一大波奖品等你拿哦噢噢噢噢！</div>
				<ul class="listImgBox">
					<li><img src="../assets/images/talkdetail.jpg"></li>
					<li><img src="../assets/images/test3.jpg"></li>
					<li><img src="../assets/images/talkdetail.jpg"></li>
				</ul>
				<ul class="interactiveBox">
					<li class="zan"><span>28</span></li>
					<li class="look"><span>28</span></li>
					<li class="ping"><span>28</span></li>
				</ul>
			</div>
			<div class="newsList">
				<div class="listTitle">夏日大作战之避暑美食大过招！食神，，一大波奖品等你拿哦噢噢噢噢！</div>
				<ul class="listImgBox">
					<li><img src="../assets/images/talkdetail.jpg"></li>
					<li><img src="../assets/images/test3.jpg"></li>
					<li><img src="../assets/images/talkdetail.jpg"></li>
				</ul>
				<ul class="interactiveBox">
					<li class="zan"><span>28</span></li>
					<li class="look"><span>28</span></li>
					<li class="ping"><span>28</span></li>
				</ul>
			</div>
		</section>
		<foot-guide></foot-guide>
	</section>
</template>
<script>
	import footGuide from '../components/footer';
	export default {
		data () {
			return {
				msg: '这是医讯'
			}
		},
		components:{
			footGuide,
		},
	}
</script>
<style lang="scss" scoped>
@import './static/css/mixin.scss';
            .newsBox{
            	background-color: #ffffff;
		.newsTitle{
			width: 100%;
			height: 1.1rem;
			line-height: 1.1rem;
			font-size: 0.36rem;
			color: #333333;
			border-bottom: 1px solid #dadada;
			background: url(../assets/images/search_news.png) no-repeat 96% center;
			background-size: auto 30%;
		}
		.itemBox{
			width: 100%;
			.newsList{
				padding-top: 0.36rem;
				border-bottom: 1px solid #dadada;
				.listTitle{
					line-height: 0.54rem;
					text-align: left;
					@include sc(0.34rem,black);
					padding: 0 0.3rem;
				}
				.listImgBox{
					display: flex;
					flex-direction:row;
					flex-wrap: wrap;
					padding: 0.3rem 16px 0;
					li{
						flex:1;
						height: 1.66rem;
						overflow: hidden;
						margin: 0 14px;
						img{
							width: 100%;
							height: 100%;
						}
					}
				}
				.interactiveBox{
					padding: 0 0.3rem;
					overflow: hidden;
					li{
						float: left;
						height: 0.9rem;
						line-height: 0.7rem;
						padding-left: 0.4rem;
						padding-right: 0.3rem;
						span{
							display: block;
							float: left;
							height: 0.9rem;
							line-height: 0.9rem;
							@include sc(0.2rem,#adadad);
						}
					}
					.zan{
						background: url(../assets/images/zan.png) no-repeat left center;
						background-size: auto 30%;
					};
					.look{
						background: url(../assets/images/look.png) no-repeat left center;
						background-size: auto 30%;
					};
					.ping{
						background: url(../assets/images/ping.png) no-repeat left center;
						background-size: auto 30%;
					}
				}
			}
		}
            }
</style>