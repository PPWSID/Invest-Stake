package config

import (
	"fmt"
	"strings"

	"github.com/spf13/viper"
)

type Config struct {
	App       App       `mapstructure:",squash"`
	Database  Database  `mapstructure:",squash"`
	Jwt       Jwt       `mapstructure:",squash"`
	SecretKey SecretKey `mapstructure:",squash"`
}

type App struct {
	Name                  string `mapstructure:"APP_NAME"`
	Port                  string `mapstructure:"PORT"`
	Prefork               bool   `mapstructure:"APP_PREFORK"`
	DisableStartupMessage bool   `mapstructure:"APP_DISABLE_STARTUP_MESSAGE"`
	Env                   string `mapstructure:"APP_ENV"`
	Cors                  Cors   `mapstructure:",squash"`
}

type Cors struct {
	AllowOrigins string `mapstructure:"APP_CORS_ALLOW_ORIGINS"`
}

type Database struct {
	Connection string `mapstructure:"MONGO_URI"`
	DbName     string `mapstructure:"MONGO_DB"`
}

type Jwt struct {
	Jwt string `mapstructure:"JWT_SECRET"`
}

type SecretKey struct {
	Alphavantage string `mapstructure:"ALPHAVANTAGE_KEY"`
}

func SetConfig() (*Config, error) {
	viper.SetConfigFile(".env")
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println("Error reading config:", err)
	}

	// อ่านค่าด้วย viper.GetString() เพื่อตรวจสอบหรือ debug
	// fmt.Println("APP_NAME:", viper.GetString("APP_NAME"))
	// fmt.Println("PORT:", viper.GetString("PORT"))
	// fmt.Println("APP_PREFORK:", viper.GetBool("APP_PREFORK"))
	// fmt.Println("APP_ENV:", viper.GetString("APP_ENV"))
	// fmt.Println("APP_CORS_ALLOW_ORIGINS:", viper.GetString("APP_CORS_ALLOW_ORIGINS"))
	// fmt.Println("MONGO_URI:", viper.GetString("MONGO_URI"))
	// fmt.Println("MONGO_DB:", viper.GetString("MONGO_DB"))
	// fmt.Println("Jwt:", viper.GetString("JWT_SECRET"))

	var cfg Config

	cfg.App = App{
		Name:                  viper.GetString("APP_NAME"),
		Port:                  viper.GetString("PORT"),
		Prefork:               viper.GetBool("APP_PREFORK"),
		DisableStartupMessage: viper.GetBool("APP_DISABLE_STARTUP_MESSAGE"),
		Env:                   viper.GetString("APP_ENV"),
		Cors: Cors{
			AllowOrigins: viper.GetString("APP_CORS_ALLOW_ORIGINS"),
		},
	}

	cfg.Database = Database{
		Connection: viper.GetString("MONGO_URI"),
		DbName:     viper.GetString("MONGO_DB"),
	}

	cfg.Jwt = Jwt{
		Jwt: viper.GetString("JWT_SECRET"),
	}

	// err = viper.Unmarshal(&cfg)
	// if err != nil {
	// 	return nil, fmt.Errorf("unable to decode config into struct: %w", err)
	// }
	return &cfg, nil
}

func SetSecretKey() (*Config, error) {
	viper.SetConfigFile(".env")
	// viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println("Error reading config:", err)
	}

	var cfg Config

	cfg.SecretKey = SecretKey{
		Alphavantage: viper.GetString("ALPHAVANTAGE_KEY"),
	}

	return &cfg, nil
}
