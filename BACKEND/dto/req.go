package dto

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type QueryParser struct {
	Symbol string `json:"symbol" bson:"symbol"`
}

type BodyParser struct {
	Symbol string `json:"symbol" bson:"symbol"`
}

type QuerySearch struct {
	Search *string `query:"search"`
}

type PaginationPage struct {
	Page  int `query:"page"`
	Limit int `query:"limit" bson:"limit"`
	Skip  int `query:"skip" bson:"skip"`
}

type CommentReq struct {
	ID       primitive.ObjectID `json:"id" bson:"_id"`
	Message  string             `json:"message" bson:"message" validate:"required"`
	CreateAt time.Time          `json:"create_at" bson:"create_at"`
}
