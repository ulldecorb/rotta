const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./usersController')();
const User = require('../model/userModel');

jest.mock('../model/userModel');

describe('getAll', () => {
  test('shoud get all Users', async () => {
    const res = {
      json: jest.fn(),
    };
    User.find.mockResolvedValueOnce([{ title: 'random' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ title: 'random' }]);
  });
});

describe('createOne', () => {
  class MockProject {
    constructor(title) {
      this.name = title;
    }

    // eslint-disable-next-line class-methods-use-this
    save() { }
  }
  test('should call json', async () => {
    // arrange
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
    };

    const newUser = new MockProject('random');
    User.mockReturnValueOnce(newUser);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'random' });
  });
  test('should send error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    User.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createOne(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update one User', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        UserID: null,
      },
      body: null,
    };
    await updateById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send an error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        UserID: null,
      },
      body: null,
    };
    User.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a user by id', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: {
        UserID: null,
      },
    };
    await deleteById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send a error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: {
        UserID: null,
      },
    };
    User.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        userID: null,
      },
    };

    User.findById.mockRejectedValueOnce();

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should call res.send with error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        userID: null,
      },
    };

    User.findById.mockRejectedValueOnce('error');

    await getById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });

  test('should call res.json ', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        userID: null,
      },
    };

    User.findById.mockResolvedValueOnce('random');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('random');
  });
});
