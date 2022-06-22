const MissingParamError = require('../errors/missing-param-error')

class TokenGenerator {
  async generate (id) {
    if (!id) {
      throw new MissingParamError('id')
    }
    return null
  }
}

const makeSut = () => {
  return new TokenGenerator()
}

describe('Token Generator', () => {
  test('Should return null if JWT returns null', async () => {
    const sut = makeSut()
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })
})
