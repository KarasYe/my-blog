# Function(函数)

## 简述

在 Go 语言中，函数（Function）是一种可重用的代码块，用于执行特定的任务。函数可以接受输入参数，并返回一个或多个结果。

## 完整实例

当然，下面给出一个经典的函数例子，展示了函数在编程中的常见用法和实际应用。

```go
package main

import (
 "fmt"
 "math"
)

// 计算两个数的最大值
func max(a, b int) int {
 if a > b {
 return a
 }
 return b
}

// 计算一个数的平方根
func sqrt(x float64) float64 {
 return math.Sqrt(x)
}

func main() {
 // 使用自定义的max函数
 fmt.Println(max(3, 7))      // 输出: 7
 fmt.Println(max(0, -1))     // 输出: 0
 fmt.Println(max(-10, -5))   // 输出: -5

 // 使用内置的sqrt函数
 fmt.Println(sqrt(25))        // 输出: 5
 fmt.Println(sqrt(16))        // 输出: 4
}
```

在上述例子中，我们定义了一个名为`max`的函数，它接受两个整数参数，并返回它们中的最大值。然后，在`main`函数中，我们调用了`max`函数，并传递不同的整数参数来测试它的功能。

此外，我们还使用了 Go 语言标准库中的`math.Sqrt`函数来计算一个浮点数的平方根。这个函数是内置的，可以直接在代码中使用。

这个例子展示了函数在实际编程中的应用。通过定义自己的函数，我们可以封装可重用的代码块，提高代码的可读性和可维护性。同时，使用内置函数可以方便地处理一些常见的任务。
