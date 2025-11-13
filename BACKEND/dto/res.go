package dto

import "time"

type Response struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
	Data    any    `json:"data,omitempty"`
	Error   any    `json:"error,omitempty"`
	Status  bool   `json:"status"`
}
type CommentRes struct {
	ID       string    `json:"id" bson:"_id"`
	Message  string    `json:"message" bson:"message"`
	CreateAt time.Time `json:"create_at" bson:"create_at"`
}

type CandleDataResponse struct {
	MetaData        map[string]interface{}       `json:"Meta Data"`
	TimeSeriesDaily map[string]map[string]string `json:"Time Series (Daily)"`
}
