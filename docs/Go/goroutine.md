# Goroutine(go 虚拟线程)

## goroutine

Go 语言的 goroutine 是一种轻量级的线程，用于支持并发编程。Goroutine 由 Go 运行时环境管理，比操作系统线程更轻量，启动更快，占用更少的资源。

在 Go 语言中，可以使用关键字`go`开启一个 goroutine。例如：

```go
go funcName(argumentList)
```

其中，`funcName`是要执行的函数名，`argumentList`是传递给函数的参数列表。当该语句被执行时，会在一个新的 goroutine 中调用该函数，并传递相应的参数。

Goroutine 的调度由 Go 运行时环境负责，多个 goroutine 可以共享同一个地址空间，相互之间的通信和数据交换可以通过 channel 实现。

相比传统的线程，goroutine 具有以下特点：

- 轻量级：相比线程的开销更小，可以创建大量的 goroutine。
- 并发性：多个 goroutine 可以同时执行，支持并发编程。
- 独立执行：每个 goroutine 都有自己的栈和局部变量，不会共享内存空间。
- 便捷的通信机制：通过 channel 可以实现 goroutine 之间的通信和数据交换。

使用 goroutine 可以方便地实现并发任务，提高程序的性能和效率。在 Go 语言中，goroutine 是实现并发编程的重要手段之一。

以下是一个使用 goroutine 的经典例子：

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    go printHello()
    go printWorld()
    time.Sleep(1 * time.Second) // 等待goroutine执行完成
}

func printHello() {
    fmt.Println("Hello")
}

func printWorld() {
    fmt.Println("World")
}
```

在这个例子中，我们定义了两个函数`printHello`和`printWorld`，分别用于输出"Hello"和"World"。在`main`函数中，我们使用`go`关键字分别启动了这两个函数作为 goroutine。然后，我们使用`time.Sleep`函数等待 1 秒钟，确保 goroutine 有足够的时间执行完成。

## 原子操作和锁

当该程序运行时，会同时执行`printHello`和`printWorld`两个函数，输出"Hello"和"World"。由于这两个函数是并发执行的，所以它们的输出顺序是不确定的，每次运行程序可能会得到不同的结果。

这个例子展示了如何使用 goroutine 来实现并发执行的任务，以及如何通过 time.Sleep 来等待 goroutine 执行完成。

Go 中的原子操作是指在并发编程中，多个 goroutine 可以同时访问共享资源，但它们对共享资源的操作不会被其他 goroutine 打断的操作。原子操作可以保证在执行期间不会被其他 goroutine 中断，从而避免竞态条件和数据竞争的问题。

而锁则是实现原子操作的一种方式。通过使用锁，可以保证在某个时刻只有一个 goroutine 可以执行某个临界区的代码，从而避免了多个 goroutine 同时访问共享资源的情况。锁可以保证原子性，即要么全部执行成功，要么全部执行失败，不会有中间状态。

原子操作和锁的区别在于，原子操作本身是原子的，不需要额外的同步机制来保证其原子性，而锁则需要通过加锁和解锁的操作来实现原子性。因此，在实现并发编程时，如果需要保证操作的原子性，可以使用原子操作，而如果需要实现更复杂的并发控制，例如控制多个 goroutine 对共享资源的访问，则可以使用锁。

以下是几个关于 Go 原子操作和锁的例子：

原子操作例子：

```go
func AtomicIncrement(addr *int) {
    atomic.AddInt32(addr, 1)
}
```

在这个例子中，我们使用`atomic.AddInt32`函数对一个整型变量进行原子性增加操作。该函数会以原子方式将指定的值增加指定的增量，并将结果存储回原始地址。这样就保证了在并发情况下，多个 goroutine 对同一个地址的增加操作不会相互干扰，确保了操作的原子性。

锁例子：

```go
func Counter(c chan int) {
    count := 0
    mutex := &sync.Mutex{}

    for i := 0; i < 10000; i++ {
        mutex.Lock()         // 加锁
        count++             // 临界区
        mutex.Unlock()       // 解锁
    }

    c <- count             // 将结果发送到通道
}
```

在这个例子中，我们使用`sync.Mutex`类型来实现互斥锁。在临界区前后，我们分别调用了`mutex.Lock()`和`mutex.Unlock()`函数来加锁和解锁，确保在加锁期间只有一个 goroutine 可以执行临界区代码。这样就避免了多个 goroutine 同时访问共享资源的情况，保证了并发安全。

需要注意的是，在实际应用中，我们应该根据具体的需求和场景来选择合适的并发控制方式，包括原子操作和锁等。同时，也需要考虑并发控制的性能和开销，避免过度使用锁等同步机制导致性能下降的问题。

## 为并发而生

在早期 CPU 都是以单核的形式顺序执行机器指令。Go 语言的祖先 C 语言正是这种顺序编程语言的代表。顺序编程语言中的顺序是指：所有的指令都是以串行的方式执行，在相同的时刻有且仅有一个 CPU 在顺序执行程序的指令。

随着处理器技术的发展，单核时代以提升处理器频率来提高运行效率的方式遇到了瓶颈，单核 CPU 发展的停滞，给多核 CPU 的发展带来了机遇。相应地，编程语言也开始逐步向并行化的方向发展。

虽然一些编程语言的框架在不断地提高多核资源使用效率，例如 Java 的 Netty 等，但仍然需要开发人员花费大量的时间和精力搞懂这些框架的运行原理后才能熟练掌握。

作为程序员，要开发出能充分利用硬件资源的应用程序是一件很难的事情。现代计算机都拥有多个核，但是大部分编程语言都没有有效的工具让程序可以轻易利用这些资源。编程时需要写大量的线程同步代码来利用多个核，很容易导致错误。

Go 语言正是在多核和网络化的时代背景下诞生的原生支持并发的编程语言。Go 语言从底层原生支持并发，无须第三方库，开发人员可以很轻松地在编写程序时决定怎么使用 CPU 资源。

Go 语言的并发是基于 goroutine 的，goroutine 类似于线程，但并非线程。可以将 goroutine 理解为一种虚拟线程。Go 语言运行时会参与调度 goroutine，并将 goroutine 合理地分配到每个 CPU 中，最大限度地使用 CPU 性能。

多个 goroutine 中，Go 语言使用通道（channel）进行通信，通道是一种内置的数据结构，可以让用户在不同的 goroutine 之间同步发送具有类型的消息。这让编程模型更倾向于在 goroutine 之间发送消息，而不是让多个 goroutine 争夺同一个数据的使用权。

程序可以将需要并发的环节设计为生产者模式和消费者的模式，将数据放入通道。通道另外一端的代码将这些数据进行并发计算并返回结果，如下图所示。

![goroutine](http://c.biancheng.net/uploads/allimg/180808/1-1PPQ001322K.jpg)

::: info
提示：Go 语言通过通道可以实现多个 goroutine 之间内存共享。
:::

【实例】生产者每秒生成一个字符串，并通过通道传给消费者，生产者使用两个 goroutine 并发运行，消费者在 main() 函数的 goroutine 中进行处理。

```go
package main

import (
        "fmt"
        "math/rand"
        "time"
)

// 数据生产者
func producer(header string, channel chan<- string) {
     // 无限循环, 不停地生产数据
     for {
            // 将随机数和字符串格式化为字符串发送给通道
            channel <- fmt.Sprintf("%s: %v", header, rand.Int31())
            // 等待1秒
            time.Sleep(time.Second)
        }
}

// 数据消费者
func customer(channel <-chan string) {
     // 不停地获取数据
     for {
            // 从通道中取出数据, 此处会阻塞直到信道中返回数据
            message := <-channel
            // 打印数据
            fmt.Println(message)
        }
}

func main() {
    // 创建一个字符串类型的通道
    channel := make(chan string)
    // 创建producer()函数的并发goroutine
    go producer("cat", channel)
    go producer("dog", channel)
    // 数据消费函数
    customer(channel)
}
```

```
dog: 2019727887
cat: 1298498081
dog: 939984059
cat: 1427131847
cat: 911902081
dog: 1474941318
dog: 140954425
cat: 336122540
cat: 208240456
dog: 646203300
```

对代码的分析：

- 第 03 行，导入格式化（fmt）、随机数（math/rand）、时间（time）包参与编译。
- 第 10 行，生产数据的函数，传入一个标记类型的字符串及一个只能写入的通道。
- 第 13 行，for{} 构成一个无限循环。
- 第 15 行，使用 rand.Int31() 生成一个随机数，使用 fmt.Sprintf() 函数将 header 和随机数格式化为字符串。
- 第 18 行，使用 time.Sleep() 函数暂停 1 秒再执行这个函数。如果在 goroutine 中执行时，暂停不会影响其他 goroutine 的执行。
- 第 23 行，消费数据的函数，传入一个只能写入的通道。
- 第 26 行，构造一个不断消费消息的循环。
- 第 28 行，从通道中取出数据。
- 第 31 行，将取出的数据进行打印。
- 第 35 行，程序的入口函数，总是在程序开始时执行。
- 第 37 行，实例化一个字符串类型的通道。
- 第 39 行和第 40 行，并发执行一个生产者函数，两行分别创建了这个函数搭配不同参数的两个 goroutine。
- 第 42 行，执行消费者函数通过通道进行数据消费。

整段代码中，没有线程创建，没有线程池也没有加锁，仅仅通过关键字 go 实现 goroutine，和通道实现数据交换。
