<template>
	<div class="yellow_star v-md">
		<div class="back v-md">
	      <svg v-for="n in 5" :key="n">
	        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
	      </svg>
        </div>
        <div class="front v-md" :style="'width:'+code*100/5+'%;'">
	      <svg v-for="n in 5" :key="n">
	        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
	      </svg>
    	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
			name:'yellow_star',
			props:['code'],
			data () {
				return{

				}
			},
			mounted(){

			},
			computed:{

			},
			methods:{

			}
		}
</script>
<style lang="less" scoped>
	.yellow_star{
		display:inline-block;
		width:1.5rem;
		height:.3rem;
		position: relative;
		>div{
		    position:absolute;
		    left:0;
		    top:0;
		    white-space:nowrap;
		    overflow:hidden;
		    &.back{
		    	z-index: 2;
		    	svg{
		    		width:3rem;
		    		height:.3rem;
		    		fill: #ccc;
		    	}
		    }
		    &.front{
		    	z-index: 3;
		    	svg{
		        width:.3rem;
		        height:.3rem;
		        fill: #ffaa0c;
		      }
		    }
		}
	}
</style>