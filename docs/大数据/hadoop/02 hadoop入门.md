# 1、概念
## hadoop是什么？
- hadoop是有apache基金会所开发的**分布式系统基础架构**
- 主要解决，海量数据存储与分析
## hadoop发展历史
![输入图片说明](/imgs/2024-04-18/FekFu6GKqLZNXydK.png)![输入图片说明](/imgs/2024-04-18/0SuXDo8pDBVbFTI8.png)
## hadoop三大发行版本
![输入图片说明](/imgs/2024-04-18/OukLamKv1ahfnVPP.png) 
## hadoop优势
![输入图片说明](/imgs/2024-04-18/RCtu0Ry8eni9jgxo.png)![输入图片说明](/imgs/2024-04-18/m5AYTdyOxRfGSzd0.png)
## hadoop组成
![输入图片说明](/imgs/2024-04-18/NpnyvKLYEcKi4SV9.png)
### HDFS
Hadoop Distributed File System 简称 HDFS，是一个分布式的文件系统。

1） NameNode （nn）: 存储文件的**元数据**，如文件名、文件目录结构、文件属性（生成时间、副本数、文件权限），以及每个文件的块列表和块所在的**DataNode**等

2）DataNde（dn）: 在本地文件系统存储文件块数据，以及块数据的校验。

3）Secondary NameNode（2nn）：每隔一段时间对NameNode元数据备份

![输入图片说明](/imgs/2024-04-18/yWc6hyx96WVuKTVR.png)
### YARN
Yet  Another Resource Negotiator 简称YRAN，另一种资源协调者，是Hadoop的资源管理器。，主要管理CPU和内存。
   ![输入图片说明](/imgs/2024-04-18/dMPUGtVRTLPw2kr2.png)
###   MapReduce
MapReduce将计算分为两个阶段：Map 和Reduce

1）Map阶段并行处理输入数据

2）Reduce节点对Map结果进行汇总

### 三者的关系
![输入图片说明](/imgs/2024-04-18/fhHlirWRNEOy9ltJ.png)

## 大数据技术生态体系

![输入图片说明](/imgs/2024-04-18/qv58vGqJH91rAS8h.png) 
# 2、环境准备
## 模板虚拟机准备
为了后续能克隆出多台虚拟机。
### 安装操作系统
- 自定义
- 稍后安装操作系统
- Linux
- 虚拟机名称
- 处理器2核4g
- 内存4g
- 50g
- 设置主机名称
- 开启网络
### 网络设置
VM Ware / 编辑 / 虚拟网络编辑器

![输入图片说明](/imgs/2024-05-24/hrp9wf0OG4iQ3tEc.png)
Windows上设置网络适配器
![输入图片说明](/imgs/2024-05-24/1LYOFHSOEhGMRjhi.png)
![输入图片说明](/imgs/2024-05-24/bBfxwSgXnZKb3QfL.png)
设置虚拟机网络

```bash
vim /etc/sysconfig/network-scripts/ifcfg-ens33

# 修改
BOOTPROTO="static"
# 添加
IPADDR=192.168.10.100
GATEWAY=192.168.10.2
DNS1=192.168.10.2
```

修改主机名
```bash
vim /etc/hostname
```

设置ip映射
 ```bash
vim /etc/hosts
# 添加 
192.168.10.100 hadoop100
192.168.10.101 hadoop101
192.168.10.102 hadoop102
192.168.10.103 hadoop103
 ```

修改windows hosts文件
C:\Windows\System32\drivers\etc\hosts

## 安装准备
### 安装epel-release
Extra Packages for Enterprise Linux 是为“红帽系“的操作系统提供的额外软件包，适用于RHEL、CentOS和Scientific Linux。相当于是一个软件仓库，大多数rmp包在官方repository中是找不到的。
```bash
yum install -y epel-release
```
如果Linux安装的是最小系统版，还需要安装如下工具
- net-tool: 工具包集合，包含ifconfig命令 `yum install -y net-tools`
- vim 编辑器 `yum install -y vim`
> `-y`: 这是一个选项，表示自动确认所有的提示。在执行安装过程中，YUM有时会询问用户是否确认安装即将进行的操作。加上`-y`参数后，YUM会默认回答“是”（yes）对所有提问，从而使得整个安装过程自动化，无需人工干预。这对于脚本自动化安装特别有用，避免了在无人值守的情况下需要手动确认每一个步骤。

### 关闭防火墙
```bash
# 关闭防火墙
systemctl stop firewalld
# 关闭防火墙开机自启
systemctl disaable firewalld.service
```
在企业内部，一般内部的机子都不开防火墙，只在公司对外网络使用防火墙。

![输入图片说明](/imgs/2024-05-26/BJ8EH1YZa1uG7QCf.png)![输入图片说明](/imgs/2024-05-26/3q46u9GldiPkvrSj.png)![输入图片说明](/imgs/2024-05-26/VhuobnbzGtjO0YiF.png)
## 克隆
分别基于hadoop100克隆出 hadoop102、hadoop103、hadoop104
并分别修改主机名与IP地址
## 安装JDK、Hadoop
> 在hadoop102上安装。
> 在/opt 下创建module 和 software 文件夹用于安装软件
> 将jdk和hadoop上传到虚拟机/opt/software目录下
## JDK
解压文件
```bash
tar -zxvf jdk1.8.0_212.tar.gz -C /opt/module
```
> `tar -zxvf xx -C xxx` 是一个在Linux或类Unix系统中用来解压并提取tar文件的常用命令。这个命令的具体组成部分含义如下：
> -   `tar`：是tape archive（磁带归档）的缩写，是Linux系统中用于归档和压缩文件的工具。 
> -   `-z`：这个选项告诉tar命令使用gzip压缩算法来解压文件。当你看到文件名以`.tar.gz`或`.tgz`结尾时，通常需要使用这个选项。
>-   `-x`：表示要执行解压（extract）操作。也就是说，这个命令是要从归档文件中提取文件，而不是创建一个新的归档文件。
>-   `-v`：表示verbose模式，即详细模式。使用这个选项后，tar在执行操作时会显示更详细的信息，如正在处理的文件名等。
>-   `-f`：后面跟要操作的归档文件名。在这个命令中，`xx`代表你要解压的.tar.gz或.tgz文件的名称。需要注意，`-f`必须是最后一个选项，后面紧跟着归档文件名。
>-   `-C`：这个选项指定了解压的目标目录。后面的`xxx`是你希望解压后文件存放的目录路径。使用`-C`可以让tar在指定目录下解压文件，而不是当前工作目录。 
>综上所述，`tar -zxvf xx -C xxx` 命令的意思是：使用gzip解压方式，详细模式下解压名为`xx`的gzip压缩的tar文件，并将解压出来的文件放到`xxx`目录下。

配置jdk环境变量
（1）新建/etc/profile.d/my_env.sh 文件
```bash
sudo vim /etc/profile.d/my_env.sh

# 添加以下内容
#JAVA_HOME
export JAVA_HOME=/opt/module/jdk1.8.0_212
export PATH=$PATH:$JAVA_HOME/bin
```
> linux环境变量在 `/etc/profile` 文件中，最后有一段脚本会遍历`/opt/profile.d`目录下的sh脚本，因此只需要在这个目录下创建一个sh脚本定义环境变量即可

让环境变量生效
```bash
source /etc/profile
```
### hadoop

```bash
# 解压
tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/

# 配置环境变量
#HADOOP_HOME
export HADOOP_HOME=/opt/module/hadoop-3.1.3
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
```
记得source一下

目录结构：
- bin 存放Hadoop相关服务（hdfs、yarn、mapred）
- etc 存放hadoop配置文件
- lib 存放Hadoop本地库
- sbin 存放启动或停止hadoop相关服务的脚本
- share 存放hadoop依赖jar包、文档和官方案例

# 3、Hadoop生成环境集群搭建
## 本地模式
## 完全分布式集群

<!--stackedit_data:
eyJoaXN0b3J5IjpbODIwNzM0NDQwLDIwNjg4NTI4MjgsLTM3MT
Y3NjM2MiwtMTExNjg0ODIyMCwxMDUxNDYzNTkwLDE0NTA4MTk0
NTAsMjE0MTQ4NDk4NiwtMTMyOTA3OTYzNCwxNzQwNTE5MTcyLC
0yMDE5NDM5ODEwLDExNTAwODc0MDMsLTgzOTgzNjA1NCwtMjEz
ODEyMzUzMCwyMDYwOTYzMzAzLDE0NTQzOTA2OTgsMjA1NTMyND
MwMCwyMDA3MTUxMzI2LC0xODE0OTYzNzQsLTExMTQyNjA4ODAs
LTE1NzcxNzYzODFdfQ==
-->