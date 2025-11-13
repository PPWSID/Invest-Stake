package service

import (
	"invest-stake-golang/repository"
)

type testService struct {
	testRepo repository.TestRepository
}

func NewtestService(testRepo repository.TestRepository) TestService {
	return &testService{testRepo: testRepo}
}

func (s *testService) TestConnectService() (result any, err error) {
	result, err = s.testRepo.TestConnectDB()
	// a, _ := json.MarshalIndent(result, "", "  ")
	// fmt.Println(string(a))
	if err != nil {
		return nil, err
	}

	return result, nil
}
