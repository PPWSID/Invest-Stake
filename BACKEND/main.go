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

	// ✅ เพิ่ม CORS middleware โดยใช้ config จาก .env
	app.Use(cors.New(cors.Config{
		AllowOrigins: cfg.App.Cors.AllowOrigins,
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
	}))

	// ✅ Connect MongoDB
	db, err := database.ConnectMongo(*cfg)
	if err != nil {
		log.Fatalf("MongoDB connection error: %v", err)
	}

	testRepo := repository.NewtestRepositoryDB(db)
	testService := service.NewtestService(testRepo)
	testHandler := controller.NewtestController(testService)
	routes.TestRoutes(app, cfg, testHandler)

	port := cfg.App.Port
	fmt.Println("Start the server on port :" + port + " ✅")
	fmt.Println("Checking TEST Controller ON : http://localhost:8806/test")
	app.Listen(":" + port)

}
