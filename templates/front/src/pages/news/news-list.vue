<template>
<div>
	<div :style='{"padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.1)","margin":"0px auto","borderColor":"#75664D","background":"#fff","borderWidth":"5px 0 0 0","width":"80%","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'>'" :style='{"fontSize":"14px","lineHeight":"1","justifyContent":"center","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="news-preview-pv" :style='{"minHeight":"100vh","padding":"0 10%","margin":"20px auto","flexWrap":"wrap","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
		<el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"0px","margin":"10px 0 0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"flex-start","height":"auto"}'>
			<el-form-item :style='{"margin":"0 0px"}'>
				<el-input v-model="title" placeholder="标题"></el-input>
			</el-form-item>
			<el-button type="primary" @click="getNewsList(1)" :style='{"cursor":"pointer","border":"0","padding":"0px 15px","margin":"0 0px 0 0","outline":"none","color":"#fff","borderRadius":"0px","background":"#75664d","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}'>
				<span class="icon iconfont icon-chakan14" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}'></span>
				搜索
			</el-button>
		</el-form>
		
		<!-- category -->
		<div class="category" :style='{"border":"1px solid #C7C7C7","padding":"20px 10px","margin":"20px 0 20px 40px","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"block","width":"220px","justifyContent":"space-between","height":"auto","order":"4"}'>
		  <div class="item" @click="categoryClick(0)" :class="categoryIndex == 0 ? 'active' : ''">全部</div>
		  <div v-for="(item,index) in categoryList" @click="categoryClick(index+1)" :key="index" class="item" :class="categoryIndex == index+1 ? 'active' : ''">{{item.typename}}</div>
		</div>
	
				
				
				
				<!-- 样式四 -->
		<div class="list4 index-pv1" :style='{"padding":"0px","margin":"20px 0 0","flexWrap":"wrap","flex":"1","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"3"}'>
			<template v-for="(item,index) in newsList" :key="item.id">
			<div v-if="index%4 == 0 || index%4 == 1" :style='{"border":"1px solid #C7C7C7","padding":"10px","margin":"0 0 20px","borderRadius":"10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"49%","position":"relative","height":"auto"}' @click="toNewsDetail(item)" class="list-item animation-box">
				<el-image :style='{"width":"100%","objectFit":"cover","borderRadius":"10px 10px 0 0","display":"block","height":"300px"}' :src="baseUrl + item.picture" :fit="fill"></el-image>
				<div :style='{"width":"100%","lineHeight":"30px","fontSize":"14px","color":"#333","order":"1"}' class="title ">{{item.title}}</div>
				<div :style='{"overflow":"hidden","color":"#666","width":"100%","lineHeight":"20px","fontSize":"14px","height":"40px","order":"2"}' class="introduction ">{{item.introduction}}</div>
				<div :style='{"padding":"0","position":"absolute","right":"10px","bottom":"10px","display":"inline-block","order":"9"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block","order":"3"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block","order":"4"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block","order":"5"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block","order":"6"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","color":"#fff","textAlign":"center","background":"#403b2f","display":"block","width":"100%","fontSize":"14px","lineHeight":"32px","order":"0"}' class="tags ">新闻动态</div>
			</div>
			<div v-if="index%4 == 2 || index%4 == 3" :style='{"border":"1px solid #C7C7C7","padding":"50px 10px 10px","margin":"0 0 20px","borderRadius":"5px","background":"#fff","width":"49%","position":"relative","height":"auto"}' @click="toNewsDetail(item)" class="list-item animation-box">
				<div :style='{"width":"100%","lineHeight":"32px","fontSize":"14px","color":"#333"}' class="title ">{{item.title}}</div>
				<div :style='{"width":"100%","lineHeight":"20px","fontSize":"14px","overflow":"hidden","color":"#666","height":"40px"}' class="introduction ">{{item.introduction}}</div>
				<div :style='{"float":"right","padding":"0","display":"inline-block"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0","display":"inline-block"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","color":"#fff","borderRadius":"0 0 8px 8px","top":"10px","textAlign":"center","background":"#75664d","display":"block","width":"calc(100% - 24px)","fontSize":"14px","lineHeight":"36px","position":"absolute"}' class="tags ">新闻动态</div>
			</div>
			</template>
		</div>
				
				
				
				
				
				
		<el-pagination
		  background
		  id="pagination" class="pagination"
		  :pager-count="7"
		  :page-size="pageSize"
		  :page-sizes="pageSizes"
		  prev-text="<"
		  next-text=">"
		  :hide-on-single-page="true"
		  :layout='["total","prev","pager","next","sizes","jumper"].join()'
		  :total="total"
		  :style='{"padding":"0","margin":"20px auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","fontWeight":"500","order":"50"}'
		  @current-change="curChange"
		  @prev-click="prevClick"
		  @next-click="nextClick"
		></el-pagination>

		<!-- 热门信息 -->
		<div class="hot" :style='{"border":"1px solid #C7C7C7","padding":"10px","margin":"20px 0","background":"#fff","width":"100%","height":"auto","order":"8"}'>
		  <div :style='{"width":"100%","lineHeight":"44px","fontSize":"24px","color":"#75664d","textAlign":"center"}'>热门信息</div>
		  <div :style='{"padding":"0 0 5px 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"width":"23%","padding":"5px 5px 0","background":"#fff","height":"auto"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"5px","display":"block","height":"180px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"4px 5px 0","lineHeight":"20px","fontSize":"14px","color":"#000","textAlign":"center"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 5px","lineHeight":"12px","fontSize":"12px","color":"#999","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
		<!-- 最新动态 -->
		<div class="news" :style='{"width":"100%","background":"#fff","height":"auto","order":"9"}'>
		  <div :style='{"padding":"0 20px","borderColor":"#75664d","color":"#75664d","borderWidth":"0 0 5px","width":"100%","lineHeight":"44px","fontSize":"24px","borderStyle":"solid"}'>最新动态</div>
		  <div :style='{"padding":"20px 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="item in recommendList" :key="item.id" :style='{"width":"23%","margin":"0","background":"#fff","height":"auto"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"4px","display":"block","height":"150px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"16px","color":"#000","textAlign":"center"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 10px","lineHeight":"12px","fontSize":"14px","color":"#999","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				baseUrl: this.$config.baseUrl,
				breadcrumbItem: [
				  {
					name: '公告'
				  }
				],
				newsList: [],
				total: 1,
				pageSize: 10,
				pageSizes: [10,20,30,50],
				totalPage: 1,
				layouts: '',
				title: '',
				categoryIndex: 0,
				categoryList: [],
				hotList: [],
				recommendList: [],
			}
		},
		created() {
			this.getCategoryList()
			this.getNewsList(1);
			this.getHotList()
			this.getRecommendList()
		},
		//方法集合
		methods: {
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data.list
					}
				});
			},
			categoryClick(index) {
				this.categoryIndex = index
				this.getNewsList()
			},
			getNewsList(page) {
				let params = {page, limit: this.pageSize,sort:'addtime',order:'desc'};
				let searchWhere = {};
				if(this.title != '') searchWhere.title = '%' + this.title + '%';
				if(this.categoryIndex!=0){
					searchWhere.typename = this.categoryList[this.categoryIndex - 1].typename
				}
				this.$http.get('news/list', {params: Object.assign(params, searchWhere)}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						this.totalPage = res.data.data.totalPage;
					}
				});
			},
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			getRecommendList(){
				let url = 'news/autoSort'
				if(localStorage.getItem('frontToken')){
					url = 'news/autoSort2'
				}
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get(url, {params: params}).then(res => {
					if (res.data.code == 0) {
						this.recommendList = res.data.data.list;
					}
				});
			},
			curChange(page) {
				this.getNewsList(page);
			},
			prevClick(page) {
				this.getNewsList(page);
			},
			nextClick(page) {
				this.getNewsList(page);
			},
			toNewsDetail(item) {
				this.$router.push({path: '/index/newsDetail', query: {id: item.id}});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #000000;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #000000;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #000000;
		display: inline-block;
	}
	
	.news-wrap {
	  width: 1000px;
	  margin: 0 auto;
	}
	.news-item {
	  height: 200px;
	  width: auto;
	  margin-bottom: 30px;
	  cursor: pointer;
	}
	.news-item-text {
	  width: calc(100% - 215px);
	  display: inline-block;
	  vertical-align: top;
	  margin-left: 15px;
	}
	.news-item-text-title {
	  font-size: 16px;
	  margin-bottom: 15px;
	}
	.news-item-text-intro {
	  font-size: 14px;
	  color: #666;
	}
	
	.hide1 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide2 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide3 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	
	.index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.index-pv1 .animation-box:hover {
				transform: rotate(1deg) scale(1.01) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
	}
	
	.index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		
	#pagination.el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #666;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #75664d;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #75664d;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #606266;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.news-preview-pv .el-input /deep/ .el-input__inner {
				border: 1px solid #C7C7C7;
				border-radius: 0px;
				padding: 0 10px;
				margin: 0;
				outline: none;
				color: #333;
				width: 214px;
				font-size: 14px;
				line-height: 42px;
				height: 42px;
			}
	
	.news-preview-pv .category .item {
				cursor: pointer;
				padding: 4px 4px;
				margin: 0 2% 20px;
				color: #000000;
				display: inline-block;
				font-size: 14px;
				line-height: auto;
				float: left;
				border-radius: 4px;
				background: #efefef;
				width: auto;
				text-align: center;
				min-width: 46%;
			}
	
	.news-preview-pv .category .item:hover {
				color: #fff;
				background: #75664d;
			}
	
	.news-preview-pv .category .item.active {
				margin: 0 2% 20px;
				color: #fff;
				background: #75664d;
				min-width: 46%;
			}
	
	.news-preview-pv .list9 .item .image {
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .image {
				transform: scale(1.1);
			}
	
	.news-preview-pv .list9 .item .info {
				padding: 10px;
				left: 0;
				bottom: -100%;
				background: rgba(0,0,0,.5);
				width: 100%;
				position: absolute;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .info {
				bottom: 0;
			}
</style>
