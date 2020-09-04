const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testing resolve an reject', () => {
  it('testing resolve', () => {
    return getUserName(4).then(name => {
      expect(name).toEqual('Mark');
    });
  });

  it('testing reject', () => {
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    });
  });
});
