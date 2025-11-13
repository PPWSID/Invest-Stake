package database

import (
	"context"
	"fmt"
	"invest-stake-golang/config"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectMongo(cfg config.Config) (*mongo.Database, error) {

	mongoURI := cfg.Database.Connection
	dbName := cfg.Database.DbName
	fmt.Println("Database_url:", mongoURI)
	// ✅ Connect to MongoDB
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		panic("failed to connect to MongoDB: " + err.Error())
	}

	// ตรวจสอบการเชื่อมต่อ
	if err = client.Ping(ctx, nil); err != nil {
		return nil, fmt.Errorf("MongoDB ping failed: %w", err)
	}
	fmt.Println("connect to MongoDB Success✅")

	db := client.Database(dbName)
	return db, nil
}
