<template>
	<swiper :options="swiperOption" class="swiper-box">
	    <swiper-slide class="swiper-item" style="background-image:url(./static/images/talkdetail.jpg)"></swiper-slide>
	    <swiper-slide class="swiper-item" style="background-image:url(./static/images/test3.jpg)"></swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	 </swiper>
	
</template>
<script>
	export default {
	    	data() {
		     	return {
			        swiperOption: {
				          pagination: '.swiper-pagination',
				          direction: 'horizontal',
				          slidesPerView: 1,
				          paginationClickable: true,
				          spaceBetween: 0,
				          mousewheelControl: true,
				          autoplay:2000,
				          loop:true
			        }
	     	 	}
	   	}
	}
</script>
<style lang='scss' scoped>
  .swiper-box {
    width: 100%;
    height: 4.66rem;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #eeeeee;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
  }
</style>