
# 1、什么是Hive？
Hive是有Facebook开源，基于Hadoop的一个`数据仓库工具`，可以将`结构化的数据文件映射为一张表`，并提供`类SQL`的查询功能。

# 2、Hive本质?
Hive本质是一个Hadoop客户端，用于将HSQL（Hive SQL）转化为MapReduce程序。
（1）Hive中的每张表的数据存储在HDFS
（2）Hive分析数据底层的实现是MapReduce（也可以配置为Spark或Tez）
（3）执行程序运行在Yarn上
# 3、Hive架构原理
![输入图片说明](/imgs/2024-03-12/f2w9CwxeO1hqtRKV.png)



<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM4MDgyNTg2OSwxNjUzOTI0MTAxXX0=
-->