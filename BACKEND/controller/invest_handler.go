package controller

import (
	"invest-stake-golang/service"

	"github.com/gofiber/fiber/v2"
)

type InvestController struct {
	investService service.InvestService
}

func NewinvestController(investService service.InvestService) *InvestController {
	return &InvestController{investService: investService}
}

func (h *InvestController) TestInvestController(c *fiber.Ctx) error {
	data, err := h.investService.TestInvestConnectService()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(data)
}
