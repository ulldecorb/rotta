const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./lessonsController')();
const Lesson = require('../model/lessonsModel');

jest.mock('../model/lessonsModel');

describe('getAll', () => {
  test('shoud get all lessons', async () => {
    const res = {
      json: jest.fn(),
    };
    Lesson.find.mockResolvedValueOnce([{ title: 'random' }]);

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

    const newLesson = new MockProject('random');
    Lesson.mockReturnValueOnce(newLesson);

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
    Lesson.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createOne(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update one lesson', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        lessonID: null,
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
        lessonID: null,
      },
      body: null,
    };
    Lesson.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a lesson by id', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: {
        lessonID: null,
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
        lessonID: null,
      },
    };
    Lesson.findByIdAndDelete.mockRejectedValueOnce('error');
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
        lessonID: null,
      },
    };

    Lesson.findById.mockRejectedValueOnce();

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
        lessonID: null,
      },
    };

    Lesson.findById.mockRejectedValueOnce('error');

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
        lessonID: null,
      },
    };

    Lesson.findById.mockResolvedValueOnce('random');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('random');
  });
});
