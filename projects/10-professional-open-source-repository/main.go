package main

import "fmt"

func main() {
	fmt.Println("Hello from Go!")
}

func greet(name string) string {
	return fmt.Sprintf("Hello, %s!", name)
}
