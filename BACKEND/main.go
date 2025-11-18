package main

import (
	"fmt"
	"invest-stake-golang/config"
	"invest-stake-golang/controller"
	"invest-stake-golang/database"
	"invest-stake-golang/repository"
	"invest-stake-golang/routes"
	"invest-stake-golang/service"

	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	cfg, _ := config.SetConfig()
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: cfg.App.Cors.AllowOrigins,
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
	}))

	db, err := database.ConnectMongo(*cfg)
	if err != nil {
		log.Fatalf("MongoDB connection error: %v", err)
	}
	
	investRepo := repository.NewinvestRepositoryDB(db)
	investService := service.NewinvestService(investRepo)
	investHandler := controller.NewinvestController(investService)
	routes.InvestRoutes(app, cfg, investHandler)
	port := cfg.App.Port
	fmt.Println("Start the server on port :" + port + "Success")
	fmt.Println("Checking INVEST Controller ON : http://localhost:" + port + "/api")
	app.Listen(":" + port)

}
