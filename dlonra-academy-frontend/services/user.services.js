import axios from 'axios';

class UserService{
  async create(user) {
    return axios
      .post('signup', {
        name: user.name,
        surname: user.surname,
        email: user.email
      })
  }
};

export default new UserService();