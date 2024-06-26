# Struct(结构体)

## 简述

`Go` 语言中的基础数据类型可以表示一些事物的基本属性，但是当我们想表达一个事物的全部或部分属性时，这时候再用单一的基本数据类型明显就无法满足需求了，`Go` 语言提供了一种自定义数据类型，可以封装多个基本数据类型，这种数据类型叫结构体，英文名称 `struct`。 也就是我们可以通过 `struct` 来定义自己的类型了。

`Go` 语言中通过 `struct` 来实现面向对象。

## 引言

`Go` 语言中没有“类”的概念，也不支持“类”的继承等面向对象的概念。`Go` 语言中通过结构体的内嵌再配合接口比面向对象具有更高的扩展性和灵活性。

## 自定义类型和类型别名

### 自定义类型

在 `Go` 语言中有一些基本的数据类型，如字符、整型、浮点型、布尔等数据类型，`Go` 语言中可以使用 `type` 关键字来定义自定义类型。

自定义类型是定义了一个全新的类型。我们可以基于内置的基本类型定义，也可以通过 struct 定义。例如：

```go
// 将MyInt定义为int类型
type MyInt int
```

通过 Type 关键字的定义，MyInt 就是一种新的类型，它具有 int 的特性。

### 类型别名

类型别名是 Go1.9 版本添加的新功能。

类型别名规定：`TypeAlias`只是`Type`的别名，本质上`TypeAlias`与`Type`是同一个类型。就像一个孩子小时候有小名、乳名，上学后用学名，英语老师又会给他起英文名，但这些名字都指的是他本人

```go
type TypeAlias = Type

// 我们之前见过的rune和byte就是类型别名，他们的定义如下：
type byte = uint8
type rune = int32
```

## 两者区别

类型别名与类型定义表面上看只有一个等号的差异，我们通过下面的这段代码来理解它们之间的区别

```go
//类型定义
type NewInt int

//类型别名
type MyInt = int

func main() {
    var a NewInt
    var b MyInt

    fmt.Printf("type of a:%T\n", a) //type of a:main.NewInt
    fmt.Printf("type of b:%T\n", b) //type of b:int
}
```

结果显示 a 的类型是 `main.NewInt`，表示 `main` 包下定义的 `NewInt` 类型。b 的类型是 `int`。`MyInt` 类型只会在代码中存在，编译完成时并不会有 `MyInt` 类型。

## 结构体

### 定义

使用 `type` 和 `struct` 关键字来定义结构体，具体代码格式如下：

```go
type 类型名 struct {
    字段名 字段类型
    字段名 字段类型
    …
}
```

- 1.类型名：标识自定义结构体的名称，在同一个包内不能重复;
- 2.字段名：表示结构体字段名。结构体中的字段名必须唯一;
- 3.字段类型：表示结构体字段的具体类型。

举个例子，我们定义一个 Person（人）结构体，代码如下：

```go
type person struct {
    name string
    city string
    age  int8
}
// 同样类型的字段也可以写在一行
type person1 struct {
    name, city string
    age        int8
}
```

这样我们就拥有了一个 person 的自定义类型，它有 name、city、age 三个字段，分别表示姓名、城市和年龄。这样我们使用这个 person 结构体就能够很方便的在程序中表示和存储人信息了。

语言内置的基础数据类型是用来描述一个值的，而结构体是用来描述一组值的。比如一个人有名字、年龄和居住城市等，本质上是一种聚合型的数据类型

### 实例化

只有当结构体实例化时，才会真正地分配内存。也就是必须实例化后才能使用结构体的字段。

结构体本身也是一种类型，我们可以像声明内置类型一样使用 `var` 关键字声明结构体类型。

```go
type person struct {
    name string
    city string
    age  int8
}

func main() {
    var p1 person
    p1.name = "pprof.cn"
    p1.city = "北京"
    p1.age = 18
    fmt.Printf("p1=%v\n", p1)  //p1={pprof.cn 北京 18}
    fmt.Printf("p1=%#v\n", p1) //p1=main.person{name:"pprof.cn", city:"北京", age:18}
}
```

我们通过.来访问结构体的字段（成员变量）,例如 p1.name 和 p1.age 等。
