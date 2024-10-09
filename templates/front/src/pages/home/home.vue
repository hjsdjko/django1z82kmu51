<template>
<div class="home-preview" :style='{"width":"100%","margin":"0 auto","flexWrap":"wrap","flexDirection":"column","display":"flex"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"0 calc(10% + 40px)","margin":"0","flexWrap":"wrap","flexDirection":"column","background":"url(http://codegen.caihongy.cn/20231211/bfaa3501648d4be59330ae68ab054932.png) no-repeat left center / 120% 100%","display":"flex","width":"100%","position":"relative","justifyContent":"center","height":"760px"}'>
		  <div :style='{"margin":"10px 0","color":"#000000","background":"url(http://codegen.caihongy.cn/20231212/600ffc364dfe4e8a8ac9dd559881a3ab.png) no-repeat right center","width":"380px","lineHeight":"1","fontSize":"22px","order":"2"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"width":"100%","margin":"10px 0","lineHeight":"1","fontSize":"40px","color":"#000000","fontWeight":"600"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"padding":"0","flexWrap":"wrap","bottom":"0","display":"flex","width":"50%","position":"absolute","right":"0","height":"700px"}'>
		    <img :style='{"width":"100%","margin":"0","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0","margin":"10px 0","overflow":"hidden","color":"#000000","maxHeight":"210px","width":"45%","lineHeight":"30px","fontSize":"16px","order":"5"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","cursor":"pointer","padding":"0 0 0 32px","margin":"10px 0","borderRadius":"60px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231212/4c3df52b9f11442981b672b8b8765eb4.png) no-repeat 12px center / 24px,#fff","display":"block","width":"120px","lineHeight":"40px","order":"8"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#9E9E9E","fontSize":"14px"}'>查看更多</span>
		    <span class="icon iconfont icon-jiantou09" :style='{"color":"#75664D","fontSize":"14px","display":"none"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"minHeight":"900px","padding":"30px 10%","margin":"0","flexWrap":"wrap","background":"#fff","backgroundImage":"url(http://codegen.caihongy.cn/20231207/0a721dec0c1b4ac4a08634401af5cd24.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","position":"relative","height":"auto","order":"5"}'>
		  <div :style='{"padding":"170px 40px 0","color":"#fff","background":"url(http://codegen.caihongy.cn/20231213/6d0db40d3eb5467d8272d853836c8a3d.png) no-repeat 200px 200px,#75664D","width":"30%","lineHeight":"3","fontSize":"20px","height":"450px"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"padding":"0","margin":"0","color":"#FFFFFF","top":"160px","left":"calc(10% + 40px)","width":"19%","lineHeight":"1.5","fontSize":"26px","position":"absolute"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"width":"100%","padding":"0","flexWrap":"wrap","display":"flex","height":"auto"}'>
		    <img :style='{"margin":"0","objectFit":"cover","top":"30px","left":"30%","display":"block","width":"60%","position":"absolute","height":"450px"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0","objectFit":"cover","top":"510px","left":"10%","display":"block","width":"20%","position":"absolute","height":"350px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"25px 50px","margin":"0 0 10px 0","color":"#333","alignItems":"center","display":"flex","overflow":"hidden","top":"510px","left":"30%","background":"none","width":"60%","lineHeight":"30px","fontSize":"16px","position":"absolute","height":"350px"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","cursor":"pointer","padding":"0 0 0 32px","margin":"10px auto","textAlign":"center","display":"block","top":"300px","borderRadius":"30px","left":"calc(10% + 40px)","background":"url(http://codegen.caihongy.cn/20231212/4c3df52b9f11442981b672b8b8765eb4.png) no-repeat 12px center / 24px,#fff","width":"120px","lineHeight":"40px","position":"absolute"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#9E9E9E","fontSize":"14px"}'>查看更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#9E9E9E","fontSize":"14px","display":"none"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"20px 10%","margin":"20px 0","backgroundImage":"url(http://codegen.caihongy.cn/20231207/795fac7266e3456ba3dd9cdc8aa583f6.png)","width":"100%","backgroundSize":"100% 100%","position":"relative","order":"3","height":"850px"}'>
		<div v-if="true" class="idea newsIdea" :style='{"width":"100%","margin":"20px auto 0","flexWrap":"wrap","display":"flex"}'>
			<div class="box1" :style='{"width":"50%","fontSize":"32px","color":"#FFFFFF","height":"auto"}'>NEWS INFORMATION</div>
			<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px"}'>
			<span :style='{"color":"#FFFFFF","background":"url(http://codegen.caihongy.cn/20231212/09f600b2de6847f5863f3f51d8b6fb45.png) no-repeat right center","display":"block","width":"380px","fontSize":"22px","lineHeight":"44px","height":"44px"}'>公告</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		







		<div v-if="newsList.length" class="list list18 index-pv1" :style='{"width":"100%","padding":"10px 0","margin":"0 auto","justifyContent":"space-between","display":"flex","height":"auto"}'>
		  <div :style='{"width":"63%","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}' class="left">
		    <div :style='{"padding":"10px","flexDirection":"column","background":"#fff","display":"flex","width":"50%","justifyContent":"space-around","height":"auto"}' class="list">
			  <template v-for="(item,index) in newsList">
		      <div v-if="index < 6" @click="toDetail('newsDetail', item)" @mouseenter="newsMouseove18(index)" class="item" :class="index == newsIndex18 ? 'active' : ''">
		        <div class="name">{{item.title}}</div>
		      </div>
			  </template>
		    </div>
		    <div :style='{"width":"50%","height":"auto"}' class="imgs">
			  <template v-for="(item,index) in newsList">
		      <img v-if="index < 6" v-show="index == newsIndex18" :style='{"width":"100%","objectFit":"cover","display":"block","height":"620px"}' :src="baseUrl + item.picture" alt="">
			  </template>
		    </div>
		  </div>
		  <div :style='{"width":"35%","overflow":"hidden","background":"#fff","height":"auto"}' class="right">
		    <div v-if="newsList.length > 6" :style='{"cursor":"pointer","width":"100%","overflow":"hidden","position":"relative","height":"199px"}' class="top list-item animation-box" @click="toDetail('newsDetail', newsList[6])">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + newsList[6].picture">
		      <div :style='{"width":"100%","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.5)"}'>
		        <div :style='{"padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff"}' class="title">{{newsList[6].title}}</div>
		      </div>
		    </div>
		    <div v-if="newsList.length > 7" :style='{"width":"100%","padding":"10px","background":"#fff","height":"calc(100% - 180px)"}' class="list">
			  <template v-for="(item,index) in newsList">
		      <div v-if="index > 6" :style='{"cursor":"pointer","width":"100%","overflow":"hidden","alignItems":"center","display":"flex","height":"12%"}' class="item" @click="toDetail('newsDetail', item)">
		        <div class="dian"></div>
		        <div class="title" >{{item.title}}</div>
		        <div :style='{"padding":"0 6px"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		      </div>
			  </template>
		    </div>
		  </div>
		</div>




		<div @click="moreBtn('news')" :style='{"border":"0","cursor":"pointer","padding":"0 0 0 32px","margin":"10px auto","textAlign":"center","display":"block","right":"10%","top":"80px","borderRadius":"40px","background":"url(http://codegen.caihongy.cn/20231212/4c3df52b9f11442981b672b8b8765eb4.png) no-repeat 12px center / 24px,#fff","width":"120px","lineHeight":"40px","position":"absolute"}'>
			<span :style='{"color":"#9E9E9E","fontSize":"14px"}'>查看更多</span>
			<i :style='{"color":"#9E9E9E","fontSize":"12px","display":"none"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->



<!-- 特价商品 -->
<div id="animate_listkechengxinxi" class="lists animate__animated" :style='{"width":"80%","padding":"0","margin":"20px auto","position":"relative","background":"#ff0","order":"4"}'>
	<div v-if="true" class="idea" :style='{"width":"300px","padding":"0","position":"absolute","right":"0","top":"0"}'>
		<div class="box1" :style='{"width":"100%","fontSize":"36px","color":"#000000","textAlign":"left","background":"#fff","height":"auto"}'>SPECIAL</div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0px 0","top":"50px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231213/7b15f39910314d4e8b4a805af0ff0e6a.png) no-repeat 188px center","width":"300px","lineHeight":"54px","position":"absolute","right":"0"}'>
	  <span :style='{"color":"#333","fontSize":"22px"}'>课程信息展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	


	<div v-if="kechengxinxiList.length" class="list list11 index-pv1" :style='{"width":"100%","padding":"0px","margin":"","background":"#fff","display":"block","height":"auto"}'>
	  <div class="tab" :style='{"padding":"10px 0","margin":"0 0 0 20px","backgroundColor":"rgba(123, 111, 94,0.8)","top":"220px","flexDirection":"column","backgroundImage":"url(http://codegen.caihongy.cn/20231207/f1beed3bc09d4ea1a73a1e75417873d7.png)","display":"flex","width":"300px","position":"absolute","right":"0","justifyContent":"space-around","height":"500px"}'>
		<template v-for="item,index in listList11kechengxinxi">
	    <div v-if="index < 6" :style='{"cursor":"pointer","padding":"0 20px","margin":"5px 0","borderColor":"#efefef","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' class="item" @click="listIndexClick11(item, 'kechengxinxi')">
	      <span class="icon iconfont " :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333"}'></span>
	      <img v-if="item.image" :style='{"width":"44px","margin":"0 5px 0 0","objectFit":"cover","display":"inline-block","height":"44px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
		  <span :style='{"color":"#FFFFFF","lineHeight":"44px","fontSize":"16px"}'>{{item[listColumn11kechengxinxi]}}</span>
	    </div>
		</template>
		<div :style='{"cursor":"pointer","padding":"0 20px","margin":"5px 0","borderColor":"#efefef","borderWidth":"0","display":"none","width":"100%","borderStyle":"solid","height":"auto"}' class="more" @click="moreBtn('kechengxinxi')">
		  <span class="icon iconfont " :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333"}'></span>
		  <div :style='{"color":"#FFFFFF","lineHeight":"44px","fontSize":"16px"}'>更多</div>
		</div>
	  </div>
	  <div class="list" :style='{"width":"calc(100% - 320px)","margin":"0 320px 0 0 ","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"width":"31%","margin":"15px 1% ","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in kechengxinxiList" :key="index" @click="toDetail('kechengxinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"300px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"300px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000000","textAlign":"center"}'>{{item.kechengbianhao}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000000","textAlign":"center"}'>{{item.kechengmingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000000","textAlign":"center"}'>{{item.kechengfenlei}}</div>
	    </div>
	  </div>
	</div>




	
	
	<div @click="moreBtn('kechengxinxi')" :style='{"border":"0","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","padding":"0 0 0 52px","margin":"0px auto","textAlign":"left","display":"block","right":"0","borderRadius":"40px","top":"120px","background":"url(http://codegen.caihongy.cn/20231212/4c3df52b9f11442981b672b8b8765eb4.png) no-repeat 12px center / 30px,#fff","width":"300px","lineHeight":"50px","position":"absolute"}'>
		<span :style='{"color":"#9E9E9E","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#9E9E9E","fontSize":"14px","display":"none"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],

        kechengxinxiList: [],


		newsIndex18: 0,

		listIndex11kechengxinxi: 0,
		listList11kechengxinxi: [],
		listColumn11kechengxinxi: '',

      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
		this.kechengxinxiListCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		newsMouseove18(index) {
			this.newsIndex18 = index
		},

		kechengxinxiListCate(){
			this.$http.get('kechengfenlei/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.listList11kechengxinxi = res.data.data.list
			  }
			});
			this.listColumn11kechengxinxi = 'kechengfenlei'
		},
		listIndexClick11(index, name) {
			this['listIndex11' + name] = index[this['listColumn11' + name]]
			this.getList()
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__backInLeft'},
				{id:'about',css:'animate__backInRight'},
				{id:'system',css:'animate__bounceIn'},
				{id:'animate_listkechengxinxi',css:'animate__bounceInUp'},
				{id:'animate_newsnews',css:'animate__fadeInBottomRight'},
				{id:'msgs',css:'animate__fadeInUp'},
				{id:'friendly',css:'animate__flipInY'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 15,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
			
			data = {
				page: 1,
				limit: 6,
			}
			if(this.listIndex11kechengxinxi){
				data.kechengfenlei = this.listIndex11kechengxinxi
			}
			this.$http.get('kechengxinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.kechengxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 0px;
			padding: 0 30px 0 10px;
			color: #75664d;
			width: auto;
			font-size: 14px;
			height: auto;
		}
		
		.search .input /deep/ .el-input__inner {
			border: none;
			border-radius: 0px;
			padding: 0 10px;
			color: #75664d;
			width: auto;
			font-size: 14px;
			min-width: 350px;
			height: auto;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	




	.home-preview .news .list18 .left .list .item {
				cursor: pointer;
				padding: 5px;
				overflow: hidden;
				background: #F4F4F4;
				display: flex;
				width: 100%;
				align-items: center;
				height: 15%;
			}
	
	.home-preview .news .list18 .left .list .item:hover {
				background: #706554;
			}
	
	.home-preview .news .list18 .left .list .item .name {
				padding: 0 10px;
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				width: 100%;
				font-size: 16px;
				line-height: 1.5;
				text-overflow: ellipsis;
			}
	
	.home-preview .news .list18 .left .list .item:hover .name {
				color: #fff;
			}
	
	.home-preview .news .list18 .right .list .item .dian {
				border-radius: 100%;
				margin: 0 6px;
				background: #333;
				display: none;
				width: 4px;
				height: 4px;
			}
	.home-preview .news .list18 .right .list .item:hover .dian {
				background: red;
			}
	
	.home-preview .news .list18 .right .list .item .title {
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				flex: 1;
				width: 100%;
				font-size: 16px;
				text-overflow: ellipsis;
				transition: 0.3s;
			}
	.home-preview .news .list18 .right .list .item:hover .title {
				color: #706554;
			}
	
	.home-preview .news .list18 .right .list .item .time .icon {
				color: #999;
				font-size: 14px;
				line-height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .time .icon {
				color: #706554;
			}
	.home-preview .news .list18 .right .list .item .time .text {
				color: #999;
				font-size: 14px;
				line-height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .time .text {
				color: #706554;
			}






</style>
