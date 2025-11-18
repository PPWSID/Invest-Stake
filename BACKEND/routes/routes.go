package routes

import (
	"invest-stake-golang/config"
	"invest-stake-golang/controller"

	"github.com/gofiber/fiber/v2"
)

func InvestRoutes(app fiber.Router, cfg *config.Config, investHandler *controller.InvestController) {
	investGroup := app.Group("/invest")
	investGroup.Get("", investHandler.TestInvestController)
}