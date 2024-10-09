<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231207/1a3c4a6d9c824c7ab9101ac03edf36bd.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"minHeight":"80vh","width":"80%","padding":"30px 50% 20px 4%","margin":"20px 0","borderRadius":"30px","background":"url(http://codegen.caihongy.cn/20231202/d54b390d4ff5431489bd8433ce7a7351.png) no-repeat right center / 50% 100%,#fff"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"0","lineHeight":"32px","fontSize":"30px","color":"#75664D","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"24px","color":"#75664D","textAlign":"center"}'>基于django的学生选课系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xuehao">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('xuehao')?'required':''">学号：</div>
				<el-input v-model="registerForm.xuehao"  placeholder="请输入学号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima2">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengxingming">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('xueshengxingming')?'required':''">学生姓名：</div>
				<el-input v-model="registerForm.xueshengxingming"  placeholder="请输入学生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="youxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="shoujihaoma">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('shoujihaoma')?'required':''">手机号码：</div>
				<el-input v-model="registerForm.shoujihaoma"  placeholder="请输入手机号码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshizhanghao">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('jiaoshizhanghao')?'required':''">教师账号：</div>
				<el-input v-model="registerForm.jiaoshizhanghao"  placeholder="请输入教师账号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshixingming">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
				<el-input v-model="registerForm.jiaoshixingming"  placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima2">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xingbie">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiaoshixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="touxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiaoshitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="dianhuahaoma">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('dianhuahaoma')?'required':''">电话号码：</div>
				<el-input v-model="registerForm.dianhuahaoma"  placeholder="请输入电话号码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 0 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="youxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 8px 0 0","lineHeight":"44px","fontSize":"14px","color":"#75664D","textAlign":"right"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px 0 5px","outline":"none","color":"#fff","borderRadius":"8px","background":"#75664D","display":"block","width":"80%","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"none","outline":"none","borderRadius":"8px","background":"rgba(64, 158, 255, 1)","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0","color":"rgba(159, 159, 159, 1)","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            xueshengxingbieOptions: [],
            xueshengbanjiOptions: [],
            jiaoshixingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			
			this.tableName = this.$route.query.role;
			if(this.tableName=='xuesheng'){
				this.registerForm = {
					xuehao: '',
					mima: '',
					mima2: '',
					xueshengxingming: '',
					touxiang: '',
					xingbie: '',
					youxiang: '',
					shoujihaoma: '',
					banji: '',
				}
			}
			if(this.tableName=='jiaoshi'){
				this.registerForm = {
					jiaoshizhanghao: '',
					jiaoshixingming: '',
					mima: '',
					mima2: '',
					xingbie: '',
					touxiang: '',
					dianhuahaoma: '',
					youxiang: '',
				}
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.jiaoshizhanghao = [{ required: true, message: '请输入教师账号', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('xuesheng' == this.tableName) {
			this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }];
		  }
			this.xueshengxingbieOptions = "男,女".split(',');
		  if ('xuesheng' == this.tableName) {
			this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.shoujihaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
			this.$http({
			  url: `option/banji/banji`,
			  method: "get",
			  params: {}
			}).then(({ data }) => {
			  if (data && data.code === 0) {
				  this.xueshengbanjiOptions = data.data;
			  }
			});
		  if ('jiaoshi' == this.tableName) {
			this.rules.jiaoshizhanghao = [{ required: true, message: '请输入教师账号', trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.jiaoshixingbieOptions = "男,女".split(',');
		  if ('jiaoshi' == this.tableName) {
			this.rules.dianhuahaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jiaoshitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.xuehao) && `xuesheng` == this.tableName){
					this.$message.error(`学号不能为空`);
					return
				}
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xuesheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.xueshengxingming) && `xuesheng` == this.tableName){
					this.$message.error(`学生姓名不能为空`);
					return
				}
					if(`xuesheng` == this.tableName && this.registerForm.youxiang &&(!this.$validate.isEmail2(this.registerForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					if(`xuesheng` == this.tableName && this.registerForm.shoujihaoma &&(!this.$validate.isMobile2(this.registerForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
				if((!this.registerForm.jiaoshizhanghao) && `jiaoshi` == this.tableName){
					this.$message.error(`教师账号不能为空`);
					return
				}
				if((!this.registerForm.jiaoshixingming) && `jiaoshi` == this.tableName){
					this.$message.error(`教师姓名不能为空`);
					return
				}
               if(`jiaoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `jiaoshi` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`jiaoshi` == this.tableName && this.registerForm.dianhuahaoma &&(!this.$validate.isMobile2(this.registerForm.dianhuahaoma))){
						this.$message.error(`电话号码应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231207/1a3c4a6d9c824c7ab9101ac03edf36bd.png);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #E3E3E3;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #75664D;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #E3E3E3;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #75664D;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #E3E3E3;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #75664D;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #E3E3E3;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #75664D;
						width: 288px;
						font-size: 14px;
						height: 44px;
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
		  		  border: 1px solid #E3E3E3;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #75664D;
		  		  width: 60px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #E3E3E3;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #75664D;
		  		  width: 60px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #E3E3E3;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #75664D;
		  		  width: 60px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 90px;
				position: absolute;
				content: "*";
			}
</style>
