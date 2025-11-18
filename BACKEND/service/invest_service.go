package service

import (
	"invest-stake-golang/repository"
)

type investService struct {
	investRepo repository.InvestRepository
}

func NewinvestService(investRepo repository.InvestRepository) InvestService {
	return &investService{investRepo: investRepo}
}

func (s *investService) TestInvestConnectService() (result any, err error) {
	result, err = s.investRepo.TestInvestConnectDB()
	// a, _ := json.MarshalIndent(result, "", "  ")
	// fmt.Println(string(a))
	if err != nil {
		return nil, err
	}

	return result, nil
}
