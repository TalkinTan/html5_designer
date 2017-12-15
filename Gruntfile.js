module.exports = function(grunt) {

  grunt.initConfig({
     //读取package.json文件
    pkg: grunt.file.readJSON('package.json'),
    //jshint用来检查js代码规范
    jshint: { 
      files: ['Gruntfile.js', 'app/src/**/*.js'], //要进行js检查的文件
      options: {
        //这里是覆盖JSHint默认配置的选项
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    //watch用来监听文件，当文件发生变化时会执行tasks中指定的任务
    watch: {
      //监听的文件
      files: ['<%= jshint.files %>','app/index.html'],
      tasks: ['jshint'],
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },
        files: [  //下面文件的改变就会实时刷新网页
          'app/*.html',
          'app/style/{,*/}*.css',
          'app/scripts/{,*/}*.js',
          'app/images/{,*/}*.{png,jpg}'
        ]
      }
    },
    //服务器连接服务
    connect: {  
        options: {
          port: 9000,
          hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
          livereload: 35729  //声明给 watch 监听的端口
          },
        server: {
          options: {
          open: true, //自动打开网页 http://
          base: [
              './'  //主目录
                ]
            }
        }
      
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('serve', ['connect','watch']);
};
