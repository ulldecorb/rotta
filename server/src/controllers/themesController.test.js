const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./themesController')();
const Theme = require('../model/themeModel');

jest.mock('../model/themeModel');

describe('getAll', () => {
  test('shoud get all themes', async () => {
    const res = {
      json: jest.fn(),
    };
    Theme.find.mockResolvedValueOnce([{ title: 'random' }]);

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

    const newProject = new MockProject('random');
    Theme.mockReturnValueOnce(newProject);

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
    Theme.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createOne(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update one theme', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        themesId: null,
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
        themesId: null,
      },
      body: null,
    };
    Theme.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a theme by id', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: {
        themesId: null,
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
        themesId: null,
      },
    };
    Theme.findByIdAndDelete.mockRejectedValueOnce('error');
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
        themeId: null,
      },
    };

    Theme.findById.mockRejectedValueOnce();

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
        themeId: null,
      },
    };

    Theme.findById.mockRejectedValueOnce('error');

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
        themeId: null,
      },
    };

    Theme.findById.mockResolvedValueOnce('random');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('random');
  });
});
