<template>
	<div class="index_main">
	<!-- 首页 -->
		<div class="index_header">
			<div class="index_location">
				<div class="location_left">
				 <!-- <svg class="v-md">
		            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
		          </svg> -->
					<span  class="v-md">黑龙江省哈尔滨市黑龙江大学</span>
				</div>
				<div class="index_login">
					<router-link to="/login">登陆</router-link>
				</div>
			</div>  
		</div>
	     <!-- 搜索 -->
	     <div class="search_box">
	     	<input type="text" placeholder="搜索商家、商品" @keydown.enter="enter_search">
	     </div>
	     <div class="hot_word">
	     	<router-link to="/search">
	     		<span>ddd</span>
	     	</router-link>
	     </div>
	     <div class="index_banner">
	     	<Swipe class="my_swipe" :auto="0"> 
	     	   <Swipe-item class="slide slide1">
	     		 <router-link to="/search/美食">
     				<div class="common_slider">
                    	<img src="../images/slider-pic/slider-pic1.jpeg">
             		 	<p>美食</p>
       				 </div>
	     		 </router-link>
		     	<router-link to="/search/甜品饮品">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic2.jpeg" alt="">
		              <p>甜品饮品</p>
		            </div>
	            </router-link>
		          <router-link to="/search/商店超市">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic3.jpeg" alt="">
		              <p>商店超市</p>
		            </div>
		          </router-link>
		          <router-link to="/search/预定早餐">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic4.jpeg" alt="">
		              <p>预定早餐</p>
		            </div>
		          </router-link>
		          <router-link to="/search/果蔬生鲜">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic5.jpeg" alt="">
		              <p>果蔬生鲜</p>
		            </div>
		          </router-link>
		          <router-link to="/search/新店特惠">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic6.jpeg" alt="">
		              <p>新店特惠</p>
		            </div>
		          </router-link>
		          <router-link to="/search/准时达">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic7.jpeg" alt="">
		              <p>准时达</p>
		            </div>
		          </router-link>
		          <router-link to="/search/夜宵">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic8.jpeg" alt="">
		              <p>夜宵</p>
		            </div>
		          </router-link>
	     	   </Swipe-item>	
		       <Swipe-item class="slide slide2">
		          <router-link to="/search/土豪推荐">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic9.jpeg" alt="">
		              <p>土豪推荐</p>
		            </div>
		          </router-link>
		          <router-link to="/search/鲜花蛋糕">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic10.jpeg" alt="">
		              <p>鲜花蛋糕</p>
		            </div>
		          </router-link>
		          <router-link to="/search/汉堡">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic11.jpeg" alt="">
		              <p>汉堡</p>
		            </div>
		          </router-link>
		          <router-link to="/search/日韩料理">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic12.jpeg" alt="">
		              <p>日韩料理</p>
		            </div>
		          </router-link>
		          <router-link to="/search/麻辣烫">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic13.jpeg" alt="">
		              <p>麻辣烫</p>
		            </div>
		          </router-link>
		          <router-link to="/search/披萨意面">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic14.jpeg" alt="">
		              <p>披萨意面</p>
		            </div>
		          </router-link>
		          <router-link to="/search/川湘菜">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic15.jpeg" alt="">
		              <p>川湘菜</p>
		            </div>
		          </router-link>
		          <router-link to="/search/包子粥店">
		            <div class="common_slider">
		              <img src="../images/slider-pic/slider-pic16.jpeg" alt="">
		              <p>包子粥店</p>
		            </div>
		          </router-link>
		        </Swipe-item>
	     	</Swipe>
	     </div>
	     <h3 class="index_title">推荐商家</h3>
	  
	</div>
</template>
<script type="text/javascript">
	import { Swipe, SwipeItem} from 'vue-swipe';
	export default{
		name: 'homepage',
		data(){
			return {

			}
		},
		mounted(){

		},
		computed:{

		},
		methods:{

		},
		components:{
			Swipe,
			SwipeItem
		}
	}
</script>
<style lang="less">
	
</style>