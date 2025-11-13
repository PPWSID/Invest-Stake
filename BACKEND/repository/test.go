package repository

import (
	"go.mongodb.org/mongo-driver/mongo"
)

type testRepositoryDB struct {
	db             *mongo.Database
	collectiontest *mongo.Collection
}

func NewtestRepositoryDB(db *mongo.Database) TestRepository {
	return &testRepositoryDB{
		db:             db,
		collectiontest: db.Collection("test"),
	}
}

func (db *testRepositoryDB) TestConnectDB() (result any, err error) {
	return "Test APi SUCCESS", nil
}
