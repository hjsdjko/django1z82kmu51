<template>
<div :style='{"width":"100%","padding":"20px 10%","margin":"20px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="教室编号" prop="jiaoshibianhao">
            <el-input v-model="ruleForm.jiaoshibianhao" 
                placeholder="教室编号" clearable :disabled=" false  ||ro.jiaoshibianhao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="教室名称" prop="jiaoshimingcheng">
            <el-input v-model="ruleForm.jiaoshimingcheng" 
                placeholder="教室名称" clearable :disabled=" false  ||ro.jiaoshimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="教室容量" prop="jiaoshirongliang">
            <el-input v-model="ruleForm.jiaoshirongliang" 
                placeholder="教室容量" clearable :disabled=" false  ||ro.jiaoshirongliang"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="封面" v-if="type!='cross' || (type=='cross' && !ro.fengmian)" prop="fengmian">
            <file-upload
            tip="点击上传封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
            @change="fengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' class="upload" v-else label="封面" prop="fengmian">
                <img v-if="ruleForm.fengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="教室位置" prop="jiaoshiweizhi">
            <el-input v-model="ruleForm.jiaoshiweizhi" 
                placeholder="教室位置" clearable :disabled=" false  ||ro.jiaoshiweizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="登记日期" prop="dengjiriqi">
              <el-date-picker
				  :disabled=" false  ||ro.dengjiriqi"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.dengjiriqi" 
                  type="date"
                  placeholder="登记日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="设备信息" prop="shebeixinxi">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="设备信息"
              v-model="ruleForm.shebeixinxi">
            </el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="教室详情" prop="jiaoshixiangqing">
            <editor 
                :style='{"minHeight":"300px","padding":"0","boxShadow":"0 0 6px #E2E3E5","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.jiaoshixiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#75664D","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #75664D","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#75664D","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				jiaoshibianhao : false,
				jiaoshimingcheng : false,
				jiaoshirongliang : false,
				fengmian : false,
				jiaoshiweizhi : false,
				shebeixinxi : false,
				dengjiriqi : false,
				jiaoshixiangqing : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          jiaoshibianhao: '',
          jiaoshimingcheng: '',
          jiaoshirongliang: '',
          fengmian: '',
          jiaoshiweizhi: '',
          shebeixinxi: '',
          dengjiriqi: '',
          jiaoshixiangqing: '',
        },


        rules: {
          jiaoshibianhao: [
            { required: true, message: '教室编号不能为空', trigger: 'blur' },
          ],
          jiaoshimingcheng: [
          ],
          jiaoshirongliang: [
            { required: true, message: '教室容量不能为空', trigger: 'blur' },
          ],
          fengmian: [
            { required: true, message: '封面不能为空', trigger: 'blur' },
          ],
          jiaoshiweizhi: [
          ],
          shebeixinxi: [
          ],
          dengjiriqi: [
          ],
          jiaoshixiangqing: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.dengjiriqi = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='jiaoshibianhao'){
              this.ruleForm.jiaoshibianhao = obj[o];
              this.ro.jiaoshibianhao = true;
              continue;
            }
            if(o=='jiaoshimingcheng'){
              this.ruleForm.jiaoshimingcheng = obj[o];
              this.ro.jiaoshimingcheng = true;
              continue;
            }
            if(o=='jiaoshirongliang'){
              this.ruleForm.jiaoshirongliang = obj[o];
              this.ro.jiaoshirongliang = true;
              continue;
            }
            if(o=='fengmian'){
              this.ruleForm.fengmian = obj[o].split(",")[0];
              this.ro.fengmian = true;
              continue;
            }
            if(o=='jiaoshiweizhi'){
              this.ruleForm.jiaoshiweizhi = obj[o];
              this.ro.jiaoshiweizhi = true;
              continue;
            }
            if(o=='shebeixinxi'){
              this.ruleForm.shebeixinxi = obj[o];
              this.ro.shebeixinxi = true;
              continue;
            }
            if(o=='dengjiriqi'){
              this.ruleForm.dengjiriqi = obj[o];
              this.ro.dengjiriqi = true;
              continue;
            }
            if(o=='jiaoshixiangqing'){
              this.ruleForm.jiaoshixiangqing = obj[o];
              this.ro.jiaoshixiangqing = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`jiaoshixinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('jiaoshixinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`jiaoshixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`jiaoshixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      fengmianUploadChange(fileUrls) {
          this.ruleForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 150px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #75664D;
	  width: 220px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #E2E3E5;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #75664D;
	  width: 220px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #75664D;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #75664D;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #75664D;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #75664D;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #75664D;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #75664D;
	  width: 400px;
	  font-size: 14px;
	  height: 150px;
	}
</style>
