# swaggerDocs
swagger-ui-express 根据json文件生成web文档


（1）window server 2008 iis 部署node应用
	注意事项
		1安装url rewrite组件 iisnode组件 查看  https://github.com/tjanczuk/iisnode 步骤
		2测试 iisnode是否能正常运行 %programfiles%\iisnode\setupsamples.bat
		3程序池启用32位程序 为所在文件夹加权限 可能 node iisnode 都需要加权限  https://github.com/tjanczuk/iisnode/issues/548
（2）部署swagger doc 文档 http://*:9370/api-docs/#/ 可以查看各个环境的swagger文档
