# Presto入门

# 1、什么是Presto？

Presto由Facebook设计，是一个开源的分布式SQL查询引擎，它是为了高效查询不同系统和各个规模的数据源而设计的一套系统，它使得用SQL访问任何数据源成为可能，可以通过水平扩展的方式来查询大型数据集。

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/QvjnAAQ55G64nXo5/img/af7413ee-a253-4af2-9a53-14525db73446.png)

尽管Presto能理解并高效的查询SQL，但它并不是一个数据库，因为它不包含自己的数据存储系统，此外Presto也不适合联机事务处理（OLTP）。

Presto包含两个分支：PrestoDB和PrestoSQL。2020年12月PrestoSQL更名为Trino 

|   |  **PrestoDB**  |  **Trino**  |
| --- | --- | --- |
|  **维护者与社区**  |  维护者和主要贡献者群体包括Starburst、Facebook以及开源社区成员，侧重于企业级特性和服务  |  由一个独立的开源社区维护，包括Dain Sundstrom、David Phillips、Martin Traverso等原Presto的创建者，强调开源社区的开放性和独立性。  |
|  **功能与支持**  |  持续接收新的功能开发和优化，尤其是在与AWS生态系统的集成方面更为紧密，如对Amazon S3的优化支持。  |  同样在不断发展中，致力于提供广泛的连接器支持，提升查询性能和用户体验，同时保持与各种数据源的良好集成，包括Hadoop、Kafka、Cassandra等  |
|  **生态系统与集成**  |  由于得到AWS的支持，与AWS的服务集成更加紧密，如Athena、Glue等  |  虽然没有直接的云服务商背书，但其社区驱动的特性使其在多种云环境和本地部署中都有良好的适应性  |
|  **链接**  |  Github：[https://github.com/prestodb/presto](https://github.com/prestodb/presto) （star 15.7k） 官网：[https://prestodb.io/](https://prestodb.io/) 使用文档：[https://prestodb.io/docs/current/](https://prestodb.io/docs/current/)  |  Github:[https://github.com/trinodb/trino](https://github.com/trinodb/trino)（star 9.8k） 官网：[https://trino.io/](https://trino.io/) 使用文档：[https://trino.io/docs/current](https://trino.io/docs/current)  |

        PrestoDB和Trino各自遵循独立的版本发布计划，这意味着两者的新功能、性能优化和bug修复进度可能不同。总结来说，尽管两者在技术基础上高度相似，都提供了高性能的分布式SQL查询能力，但它们的发展方向、社区支持和生态系统集成有明显的差异。选择哪个版本取决于用户的特定需求，比如是否需要与特定云服务深度集成，或是更倾向于社区驱动的项目等。

:::
SmartbiPresto目前用的是PrestoDB-0.275，因此主要也是学习PrestoDB
:::

# 2、安装Presto

## （1）下载

可以直接在官网下载最新版本：[https://prestodb.io/getting-started/](https://prestodb.io/getting-started/)

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/QvjnAAQ55G64nXo5/img/d8fc0aa3-e2bd-4ce9-8a0f-a2b8c4c40a1e.png)

（下载速度非常感人，好人不推荐）

Presto的二进制包使用Maven中心仓库分发，不过在国内Maven中心仓库通常也很慢，因此，好人推荐直接在阿里的maven仓库中搜索并下载：[https://developer.aliyun.com/mvn/search](https://developer.aliyun.com/mvn/search)

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/QvjnAAQ55G64nXo5/img/14928992-83ed-45e1-af3f-0e75ef0facc8.png)

其他的镜像仓库应该也是可以找到的。

## （2）安装

在linux安装演示

```shell
# 进入到软件安装目录，并将presto-server-0.278.tar.gz上传到此目录中
cd /opt/software
# 解压缩
tar -zxvf presto-server-0.278.tar.gz
# 进入presto安装目录
cd presto-server-0.278
```


![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/QvjnAAQ55G64nXo5/img/a3603a7c-e316-489a-96b3-081f4df62845.png)

子目录组成：

*   bin: 包含Presto的启动脚本，这些脚本用于启动、停止、重启、终止、获取Presto进程。
    
*   lib: 包含Presto服务端及其全部依赖关系的jar包。
    
*   plugins: 包含Presto插件及其依赖关系，默认包含了许多插件，你也可以添加第三方插件。Presto允许多种可插拔的组件，如连接器、函数和安全访问控制等与其集成。
    
*   etc（默认没有，由用户创建）: 提供Presto必需的配置文件。
    
*   var（默认没有，第一次启动时由Presto创建）: 存放日志信息和数据的目录。
    

## （3）配置

启动Presto前需要准备一些配置文件：

*   Presto日志配置
    
*   Presto节点配置
    
*   JVM配置
    

除JVM配置外，其他配置文件都遵循Java properties标准，即.properties文件。

etc/confg.properties

```properties
coordinator=true
node-scheduler.include-coordinator=true
http-server.http.port=8080
query.max-memory=5GB
query.max-memory-per-node=1GB
query.max-total-memory-per-node=2GB
discovery-server.enabled=true
discovery.uri=http://localhost:8080
```

etc/node.properties

```properties
node.environment=demo
node.id=ffffffff-ffff-ffff-ffff-ffffffffffff
```

etc/jvm.config

```shell
-server
-mx16G
-XX:+UseG1GC
-XX:G1HeapRegionSize=32M
-XX:+UseGCOverheadLimit
-XX:+ExplicitGCInvokesConcurrent
-XX:+HeapDumpOnOutOfMemoryError
-XX:+ExitOnOutOfMemoryError
-Djdk.attach.allowAttachSelf=true
```

参照：[https://prestodb.io/docs/current/installation/deployment.html](https://prestodb.io/docs/current/installation/deployment.html)

上述配置都完成后，理论上就可以启动Presto了，但目前还没有数据源，需要配置一下。

## （4）添加数据源

数据源需要配置在**etc/catalog**目录下，其中定义了用户可用的数据源，每个数据源都是一个properties文件，后面再细嗦。

可以使用TPC-H连接器探索Presto

```properties
connector.name=tpch
```

# 3、运行Presto

运行之前，需要保证服务器已经安装了JDK，并配置了相关的环境变量，要求是java8及以上版本，否则Presto启动会报错的。

```shell
 bin/launcher run
```

前台运行可以观察日志输出，可以验证Presto是否启动成功。

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/QvjnAAQ55G64nXo5/img/355c770a-0638-4813-a6f9-a258d1bffbd9.png)

     bin/launcher start