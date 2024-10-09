<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230801/32b4f74e92264544ab6120b7d03e7f3e.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"0px solid #eee","padding":"20px 20px 40px 20px","boxShadow":"0 0px 0px rgba(64, 158, 255, .6)","margin":"0 auto","borderRadius":"0px","textAlign":"center","background":"none","width":"750px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"10px","margin":"0px auto 30px","color":"#FFFF99","textAlign":"center","background":"none","display":"inline-block","width":"auto","lineHeight":"40px","fontSize":"30px","fontWeight":"500"}' class="title">基于django的学生选课系统的设计与实现注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xuehao')?'required':''">学号：</div>
					<el-input  v-model="ruleForm.xuehao"  autocomplete="off" placeholder="学号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xueshengxingming')?'required':''">学生姓名：</div>
					<el-input  v-model="ruleForm.xueshengxingming"  autocomplete="off" placeholder="学生姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xueshengtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xueshengxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('youxiang')?'required':''">邮箱：</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('shoujihaoma')?'required':''">手机号码：</div>
					<el-input  v-model="ruleForm.shoujihaoma"  autocomplete="off" placeholder="手机号码"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('jiaoshizhanghao')?'required':''">教师账号：</div>
					<el-input  v-model="ruleForm.jiaoshizhanghao"  autocomplete="off" placeholder="教师账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
					<el-input  v-model="ruleForm.jiaoshixingming"  autocomplete="off" placeholder="教师姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiaoshixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="jiaoshitouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('dianhuahaoma')?'required':''">电话号码：</div>
					<el-input  v-model="ruleForm.dianhuahaoma"  autocomplete="off" placeholder="电话号码"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","width":"70%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="false" :style='{"color":"#666","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('youxiang')?'required':''">邮箱：</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0px solid #2a2d2e","cursor":"pointer","padding":"12px 20px","boxShadow":"inset 0px 0px 0px 0px rgba(19,161,230,.1)","margin":"30px auto 20px","color":"#2a2d2e","display":"block","minWidth":"160px","outline":"none","borderRadius":"30px","background":"linear-gradient(180deg, rgba(255,255,153,1) 0%, rgba(200,200,112,1) 100%)","width":"70%","fontSize":"22px","fontWeight":"500","height":"auto"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"10px","margin":"0 16% 0 0","color":"#666","borderRadius":"30px","textAlign":"right","background":"#eee","display":"inline-block","width":"auto","lineHeight":"1","fontSize":"14px","float":"right"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            xueshengxingbieOptions: [],
            xueshengbanjiOptions: [],
            jiaoshixingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='xuesheng'){
				this.ruleForm = {
					xuehao: '',
					mima: '',
					xueshengxingming: '',
					touxiang: '',
					xingbie: '',
					youxiang: '',
					shoujihaoma: '',
					banji: '',
				}
			}
			if(this.tableName=='jiaoshi'){
				this.ruleForm = {
					jiaoshizhanghao: '',
					jiaoshixingming: '',
					mima: '',
					xingbie: '',
					touxiang: '',
					dianhuahaoma: '',
					youxiang: '',
				}
			}
			if ('xuesheng' == this.tableName) {
				this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.rules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.jiaoshizhanghao = [{ required: true, message: '请输入教师账号', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			this.xueshengxingbieOptions = "男,女".split(',')
			this.$http({
				url: `option/banji/banji`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.xueshengbanjiOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			this.jiaoshixingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xueshengtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        jiaoshitouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
						this.$message.error(`学号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xuesheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.xueshengxingming) && `xuesheng` == this.tableName){
						this.$message.error(`学生姓名不能为空`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`xuesheng` == this.tableName && this.ruleForm.youxiang &&(!this.$validate.isEmail(this.ruleForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					if(`xuesheng` == this.tableName && this.ruleForm.shoujihaoma &&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
					if((!this.ruleForm.jiaoshizhanghao) && `jiaoshi` == this.tableName){
						this.$message.error(`教师账号不能为空`);
						return
					}
					if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
						this.$message.error(`教师姓名不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiaoshi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`jiaoshi` == this.tableName && this.ruleForm.dianhuahaoma &&(!this.$validate.isMobile(this.ruleForm.dianhuahaoma))){
						this.$message.error(`电话号码应输入手机格式`);
						return
					}
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230801/32b4f74e92264544ab6120b7d03e7f3e.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 30px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: rgba(255,255,255,.9);
						width: calc(100% - 0px);
						font-size: 14px;
						border-color: #ccc;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 30px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: rgba(255,255,255,.9);
						width: 100%;
						font-size: 14px;
						border-color: #ccc;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 30px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: rgba(255,255,255,.9);
						width: 288px;
						font-size: 14px;
						border-color: #ccc;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 30px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: rgba(255,255,255,.9);
						width: 288px;
						font-size: 14px;
						border-color: #ccc;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 0px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 30px;
		  		  color: #666;
		  		  background: rgba(255,255,255,.9);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 0px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 30px;
		  		  color: #666;
		  		  background: rgba(255,255,255,.9);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 0px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 30px;
		  		  color: #666;
		  		  background: rgba(255,255,255,.9);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: -10px;
				position: absolute;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
