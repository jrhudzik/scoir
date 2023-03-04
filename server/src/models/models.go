package models

type Credentials struct {
	Password string
	Username string
}

func (c *Credentials) IsMissingFields() bool {
	return c.Password == "" || c.Username == ""
}

type User struct {
	FavoriteColor string
	*Credentials
}

func NewUser(username, password, favoriteColor string) *User {
	return &User{
		FavoriteColor: favoriteColor,
		Credentials: &Credentials{
			Password: password,
			Username: username,
		},
	}
}

func (u *User) VerifyPassword(password string) bool {
	return password == u.Password
}
