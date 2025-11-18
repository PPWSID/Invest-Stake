package repository

import (
	"go.mongodb.org/mongo-driver/mongo"
)

type investRepositoryDB struct {
	db             *mongo.Database
	collectiontest *mongo.Collection
}

func NewinvestRepositoryDB(db *mongo.Database) InvestRepository {
	return &investRepositoryDB{
		db:             db,
		collectiontest: db.Collection("investments"),
	}
}

func (db *investRepositoryDB) TestInvestConnectDB() (result any, err error) {
	return "Test APi SUCCESS", nil
}
