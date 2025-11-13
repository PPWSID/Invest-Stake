package dto

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ModelInvest struct {
	Symbol string `json:"symbol" bson:"symbol"`
	USD	string
}

