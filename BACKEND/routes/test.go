package routes

import (
	"invest-stake-golang/config"
	"invest-stake-golang/controller"

	"github.com/gofiber/fiber/v2"
)

func TestRoutes(app fiber.Router, cfg *config.Config, testHandler *controller.TestController) {
	testGroup := app.Group("/test")
	testGroup.Get("", testHandler.TestController)

}
