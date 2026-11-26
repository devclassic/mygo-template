package main

import (
	"fmt"
	"log"

	"github.com/egoist/mygo"
)

type Native struct{}

func (Native) Hello(name string) any {
	return fmt.Sprintf("你好，%s", name)
}

func main() {
	mygo.Bind(&Native{})

	mygo.App.WhenReady(func() {
		win := mygo.NewWindow(mygo.WindowOptions{
			Width:  960,
			Height: 640,
			URL:    "/",
			Hidden: true,
		})
		win.OnReadyToShow(win.Show)
	})

	if err := mygo.App.Run(); err != nil {
		log.Fatal(err)
	}
}
