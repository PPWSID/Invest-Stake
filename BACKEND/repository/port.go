package repository

// import "invest-stake-golang/dto"

type InvestRepository interface {
	TestInvestConnectDB() (any, error)
}