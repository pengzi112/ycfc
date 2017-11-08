<template>
	<div id="home">
		<home-search></home-search>
		<home-banner></home-banner>
		<section class="navBox">
			<div class="mainNav"  v-for="(item,index) in navlists">
				<img :src = "item.imgurl" />
				<p>{{ item.navtitle }}</p>
			</div>
			<div class="serviceNews">
				<swiper :options="swiperOption" class="swiper-box">
				    <swiper-slide class="swiper-item">5.25 北京三甲医院专家：余利群</swiper-slide>
				    <swiper-slide class="swiper-item">赴天津妇幼保健院、手术4人、坐诊8人</swiper-slide>
				</swiper>
			</div>
		</section>
		<section class="mainActive">
			<div class="connectPro">
				<div class="connectTitle">连线我的三甲就诊专家</div>
				<div class="connectCon">专家坐诊或手术的患者，可向专家提问，定制您的专属康复计划</div>
				<div class="freeLogo"></div>
			</div>
			<div class="checkLogo"></div>
		</section>
		<section class="hotBox">
			<ul class="title">
				<li><span>|</span>本地医院</li>
			</ul>
			<div class="hotConsult">
				<div class="consultImgbox">
					<img src="../../static/images/talkdetail.jpg">
				</div>
				<div class="hotConsultbox">
					<div class="hospitalName">商丘妇幼保健院</div>
					<div class="hospitalLevel">二级甲等 <span>筛查</span><span>服务</span></div>
					<div class="hospitalLocation">山西省安康市金州路85号</div>
				</div>
			</div>
			<div class="hotConsult">
				<div class="consultImgbox">
					<img src="../../static/images/talkdetail.jpg">
				</div>
				<div class="hotConsultbox">
					<div class="hospitalName">商丘妇幼保健院</div>
					<div class="hospitalLevel">二级甲等 <span>筛查</span><span>服务</span></div>
					<div class="hospitalLocation">山西省安康市金州路85号</div>
				</div>
			</div>
			<div class="hotConsult">
				<div class="consultImgbox">
					<img src="../../static/images/talkdetail.jpg">
				</div>
				<div class="hotConsultbox">
					<div class="hospitalName">商丘妇幼保健院</div>
					<div class="hospitalLevel">二级甲等 <span>筛查</span><span>服务</span></div>
					<div class="hospitalLocation">山西省安康市金州路85号</div>
				</div>
			</div>
		</section>
		<foot-guide></foot-guide>
	</div>
	
</template>
<script>
	import homeSearch from '../components/search';
	import footGuide from '../components/footer';
	import homeBanner from '../components/banner';
	export default {
		data(){
			return {
				swiperOption: {
				          pagination: '.swiper-pagination',
				          direction: 'vertical',
				          slidesPerView: 1,
				          spaceBetween: 0,
				          onlyExternal: true,
				          autoplay:2000,
				          height: 66,
				          loop:true
			        	},
				navlists:[
					{
						imgurl:'./static/images/doctorlive.png',
						navtitle:'医生直播'
					},
					{
						imgurl:'./static/images/vip.png',
						navtitle:'会员服务'
					},
					{
						imgurl:'./static/images/free.png',
						navtitle:'免费筛查'
					},
				],
			}
		},
		components:{
			footGuide,
			homeBanner,
			homeSearch
		},
		beforeMount(){
			/*var formData = new FormData();
			this.$http.post('/doctor/hot/api/getHotList.do',formData).then(response => {
				    console.log(response.body);

				  }, response => {
				    // error callback 
				    console.log('error');
			  });*/
		}
	}
</script>
<style lang='scss' scoped>
	@import "./static/css/mixin.scss";
	#home{
		display: box;
		padding-bottom: 1rem;
		.navBox{
			background:#ffffff;
			margin-bottom: 0.2rem;
			display: flex;
			flex-direction:row;
			flex-wrap: wrap;
			.mainNav{
				flex:1;
				img{
					width: 0.98rem;
					height: 0.98rem;
					margin: 0 auto;
				};
				p{
					width: 100%;
					height: 0.6rem;
					line-height: 0.6rem;
					font-size: 0.28rem;
					color: #666666;
					padding-bottom: 0.16rem;
					.more{
						float: right;
					}
				}
			};
			.serviceNews{
				width: 100%;
				padding-left: 2.26rem;
				height: 1.4rem;
				border-top: 1px solid $bc;
				background: url(../assets/images/serviceNewslogo.png) no-repeat left center;
				background-size: auto 100%;
				.swiper-box{
					height: 1rem;
					margin-top: 0.2rem;
					.swiper-item{
						height: 0.46rem;
						font-size: 0.24rem;
					}
				}
			}

		}
		.mainActive{
			background:#ffffff;
			margin-bottom: 0.2rem;
			display: flex;
			flex-direction:row;
			flex-wrap: wrap;
			.connectPro{
				width: 100%;
				height: 2.08rem;
				padding:0 0.8rem 0 2rem; 
				background: url(../assets/images/connectPro.png) no-repeat 0.3rem center;
				background-size: auto 70%;
				position: relative;
				.connectTitle{
					height: 0.4rem;
					line-height: 0.4rem;
					font-size: 0.34rem;
					font-weight: bold;
					margin-top: 0.5rem;
					text-align: left;
				}
				.connectCon{
					height: 0.3rem;
					line-height: 0.3rem;
					font-size: 0.24rem;
					margin-top: 0.2rem;
					text-align: left;
				}
				.freeLogo{
					width: 1rem;
					height: 2.08rem;
					position: absolute;
					right: 0;
					top: 0;
					background: url(../assets/images/freeLogo.png) no-repeat 0.2rem center;
					background-size: auto 50%;
				}
			}
			.checkLogo{
				width: 100%;
				height: 1.5rem;
				background: url(../assets/images/checkBanner.png) no-repeat center;
				background-size: auto 100%;
			}
		}
		.hotBox{
			width: 100%;
			display: box;
			box-sizing: border-box;
			padding: 0.3rem 0 0.1rem 0.3rem;
			background: white;
			.title{
				padding:0 0 0.1rem;
				overflow:hidden;
				li{
					float: left;
					height: 0.3rem;
					line-height: 0.3rem;
					font-size: 0.28rem;
					color: #666666;
					span{
						color: $red;
					}
				}
			}
			.hotConsult{
				overflow:hidden;
				padding: 0.4rem 0.3rem 0.3rem 0;
				border-bottom: 1px solid #e1e1e1;
				.consultImgbox{
					overflow: hidden;
					float: left;
					img{
						width: 1.28rem;
						height: 1.28rem;
						border-radius: 50%;
					}
				}
				.hotConsultbox{
					width: 75%;
					float: right;
					padding-top: 0.1rem;
					.hospitalName{
						font-size: 0.34rem;
						color: #333333;
						text-align: left;
						line-height: 0.4rem;
						text-overflow: ellipsis;
					 	display: -webkit-box;
					    	display:box;
					 	-webkit-line-clamp: 1;
					 	-webkit-box-orient: vertical;
					 	overflow:hidden;
					}
					.hospitalLevel{
						font-size: 0.28rem;
						color:#999999;
						line-height: 0.3rem;
						padding-left: 0.4rem;
						background:url(../assets/images/hospital_level.png) no-repeat left center;
						background-size: auto 92%;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						-o-text-overflow: ellipsis;
						white-space: nowrap;
						margin-top: 0.2rem;
						span{
							float: right;
							font-size: 0.24rem;
							width: 0.64rem;
							height: 0.34rem;
							line-height: 0.34rem;
							text-align: center;
							border: 1px solid $red;
							border-radius: 0.34rem;
							margin-left: 0.1rem;
							color: $red;
						}
					}
					.hospitalLocation{
						font-size: 0.26rem;
						color:#999999;
						line-height: 0.3rem;
						padding-left: 0.4rem;
						background:url(../assets/images/hospital_locate.png) no-repeat left center;
						background-size: auto 92%;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						-o-text-overflow: ellipsis;
						white-space: nowrap;
						margin-top: 0.2rem;
					}
				}
			}
			
		}
	}
</style>