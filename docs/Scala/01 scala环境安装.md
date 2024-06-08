
> 关于Scala3
> 官网地址：https://www.scala-lang.org/

# 1、安装Scala
 - https://github.com/scala/scala3/releases 下载压缩包后，解压到目录
 - 环境变量配置 `SCALA_HOME`
 - 环境变量path 配置 `%SCALA_HOME%\bin`
> PS: 安装前需要保证Java已经安装完毕，并且配置了JAVA_HOME与path，否则可能会出现错误：`scala Error: Java executable not found ()`
> 使用IDEA 编写scala，需要安装插件

# 2、hello world

```scala
object HelloScala {  
  def main(args: Array[String]): Unit = {  
    print("hello scala")  
  }  
}
```
伴生对象，实现类似静态属性的功能
```scala
class Student (name: String, age: Int){  
  def printInfo(): Unit = {  
    println(s"name=$name,age=$age,school=${Student.school}")  
  }  
}  
  
object Student {  
  private val school = "中国科技大学"  
  
  def main(args: Array[String]): Unit = {  
    val student = new Student("张三", 12)  
    student.printInfo()  
  }  
}
```




<!--stackedit_data:
eyJoaXN0b3J5IjpbNDEyNzQwMjk2LDE2NjgzNDY4MzQsLTE5NT
Q2MDM0MTYsLTE5Njg2MTMxMjJdfQ==
-->