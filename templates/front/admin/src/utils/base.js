const base = {
    get() {
        return {
            url : "http://localhost:8080/django1z82kmu5/",
            name: "django1z82kmu5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于django的学生选课系统的设计与实现"
        } 
    }
}
export default base
