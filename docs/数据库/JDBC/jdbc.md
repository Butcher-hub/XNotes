# 1、主键回显
-   在数据中，执行新增操作时，主键列为自动增长，可以在表中直观的看到，但是在Java程序中，我们执行完新增后，只能得到受影响行数，无法得知当前新增数据的主键值。在Java程序中获取数据库中插入新数据后的主键值，并赋值给Java对象，此操作为主键回显。
```java
@Test
public void testReturnPK() throws SQLException {
	//1.注册驱动
	// Class.forName("com.mysql.cj.jdbc.Driver");
	//2.获取数据库连接
	Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/atguigu", "root", "atguigu");

	//3.创建preparedStatement对象，传入需要主键回显参数Statement.RETURN_GENERATED_KEYS
	PreparedStatement preparedStatement = connection.prepareStatement("insert into t_emp (emp_name, emp_salary, emp_age)values (?, ?,?)",Statement.RETURN_GENERATED_KEYS);

	//4.编写SQL语句并执行，获取结果
	Employee employee = new Employee(null,"rose",666.66,28);

	preparedStatement.setString(1,employee.getEmpName());
	preparedStatement.setDouble(2,employee.getEmpSalary());
	preparedStatement.setDouble(3,employee.getEmpAge());
	int result = preparedStatement.executeUpdate();

	//5.处理结果
	if(result>0){
		System.out.println("添加成功");
	}else{
		System.out.println("添加失败");
	}

	//6.获取生成的主键列值，返回的是resultSet，在结果集中获取主键列值
	ResultSet resultSet = preparedStatement.getGeneratedKeys();
	if (resultSet.next()){
		int empId = resultSet.getInt(1);
		employee.setEmpId(empId);
	}
	System.out.println(employee.toString());

	//7.释放资源(先开后关原则)
	resultSet.close();
	preparedStatement.close();
	connection.close();
}

```
# 2、批量执行
- 插入多条数据时，一条一条发送给数据库执行，效率低下！
- 通过批量操作，可以提升多次操作效率！

```java

@Test
public void testBatch() throws Exception {
	//1.注册驱动
	// Class.forName("com.mysql.cj.jdbc.Driver");
	//2.获取连接
	Connection connection = DriverManager.getConnection("jdbc:mysql:///atguigu?rewriteBatchedStatements=true", "root", "atguigu");
	//3.编写SQL语句
	/*
	注意：1、必须在连接数据库的URL后面追加?rewriteBatchedStatements=true，允许批量操作
	2、新增SQL必须用values。且语句最后不要追加;结束
	3、调用addBatch()方法，将SQL语句进行批量添加操作
	4、统一执行批量操作，调用executeBatch()
	*/
	String sql = "insert into t_emp (emp_name,emp_salary,emp_age) values (?,?,?)";

	//4.创建预编译的PreparedStatement，传入SQL语句
	PreparedStatement preparedStatement = connection.prepareStatement(sql);
	//获取当前行代码执行的时间。毫秒值
	long start = System.currentTimeMillis();
	for(int i = 0;i<10000;i++){
		//5.为占位符赋值
		preparedStatement.setString(1, "marry"+i);
		preparedStatement.setDouble(2, 100.0+i);
		preparedStatement.setInt(3, 20+i);
		preparedStatement.addBatch();
	}

	//执行批量操作
	preparedStatement.executeBatch();
	long end = System.currentTimeMillis();
	System.out.println("消耗时间："+(end - start));
	preparedStatement.close();
	connection.close();
}

```
> MySQL Jdbc驱动在默认情况下会无视executeBatch()语句  ，把我们期望批量执行的一组sql语句拆散，一条一条地发给MySQL数据库，直接造成较低的性能。

rewriteBatchedStatements=true:数据库会更高性能的执行批量处理（并保证5.1.13以上版本的驱动，才能实现高性能的批量插入）
即使rewriteBatchedStatements=true, batchDelete()和batchUpdate()也不一定会走批量,但是有文章说：INSERT/UPDATE/DELETE都有效
当batchSize <= 3时，驱动会宁愿一条一条地执行SQL


# 3、数据库连接池

## 3.1 关于连接池  

### 3.1.1 现有问题
- 每次操作数据库都要获取新连接，使用完毕后就close释放，频繁的创建和销毁造成资源浪费。
- 连接的数量无法把控，对服务器来说压力巨大。

### 3.1.2 连接池
- 连接池就是数据库连接对象的缓冲区，通过配置，由连接池负责创建连接、管理连接、释放连接等操作。
- 预先创建数据库连接放入连接池，用户在请求时，通过池直接获取连接，使用完毕后，将连接放回池中，避免了频繁的创建和销毁，同时解决了创建的效率。

- 当池中无连接可用，且未达到上限时，连接池会新建连接。
- 池中连接达到上限，用户请求会等待，可以设置超时时间。

### 3.1.3 常见连接池

JDBC 的数据库连接池使用 javax.sql.DataSource接口进行规范，所有的第三方连接池都实现此接口，自行添加具体实现！也就是说，所有连接池获取连接的和回收连接方法都一样，不同的只有性能和扩展功能!

- DBCP 是Apache提供的数据库连接池，速度相对C3P0较快，但自身存在一些BUG。

- C3P0 是一个开源组织提供的一个数据库连接池，速度相对较慢，稳定性还可以。

- Proxool 是sourceforge下的一个开源项目数据库连接池，有监控连接池状态的功能， 稳定性较c3p0差一点

- **Druid 是阿里提供的数据库连接池，是集DBCP 、C3P0 、Proxool 优点于一身的数据库连接池，性能、扩展性、易用性都更好，功能丰富**。

- **Hikari（ひかり[shi ga li]） 取自日语，是光的意思，是SpringBoot2.x之后内置的一款连接池，基于 BoneCP （已经放弃维护，推荐该连接池）做了不少的改进和优化，口号是快速、简单、可靠。**
- 
## 3.1 Druid
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjM1NzM1NzY2LC0xODU2ODE2MDg2LC0xNj
EzMTIwOTc0LDEzMjMyODA3MTldfQ==
-->