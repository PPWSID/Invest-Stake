package repository

// import "invest-stake-golang/dto"

type TestRepository interface {
	TestConnectDB() (any, error)
}
