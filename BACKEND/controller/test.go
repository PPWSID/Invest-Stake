package controller

import (
	"invest-stake-golang/service"

	"github.com/gofiber/fiber/v2"
)

type TestController struct {
	testService service.TestService
}

func NewtestController(testService service.TestService) *TestController {
	return &TestController{testService: testService}
}

func (h *TestController) TestController(c *fiber.Ctx) error {
	data, err := h.testService.TestConnectService()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(data)
}
