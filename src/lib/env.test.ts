import env from './env'

describe('Env helpers', () => {
  describe('env', () => {
    it('returns value if defined', () => {
      process.env['TEST'] = 'value'
      expect(env('TEST')).toBe('value')
    })
    it('returns default value if not present in process.env', () => {
      expect(env('FOOBAR', 'default')).toBe('default')
    })

    it('returns undefined if not present and no default value', () => {
      expect(env('not_found')).toBeUndefined()
    })
  })

  describe('env.int', () => {
    it('returns parsed integer if present', () => {
      process.env['TEST'] = "25"
      expect(env.int('TEST')).toBe(25)
    })

    it('returns default value if env var is missing', () => {
      expect(env.int('PORT', 3000)).toBe(3000)
    })
  })

  describe('env.bool', () => {
    it('parses true/false', () => {
      process.env['BOOL_TEST'] = 'true'
      expect(env.bool('BOOL_TEST')).toBe(true)
      process.env['BOOL_TEST'] = 'TRUE'
      expect(env.bool('BOOL_TEST')).toBe(true)
      process.env['BOOL_TEST'] = 'false'
      expect(env.bool('BOOL_TEST')).toBe(false)
      process.env['BOOL_TEST'] = 'FALSE'
      expect(env.bool('BOOL_TEST')).toBe(false)
    })

    it('parses numbers as booleans', () => {
      process.env['BOOL_TEST_NUM'] = '1'
      process.env['BOOL_TEST_NUM2'] = '0'
      expect(env.bool('BOOL_TEST_NUM')).toBe(true)
      expect(env.bool('BOOL_TEST_NUM2')).toBe(false)
    })

    it('returns default value if var not present', () => {
      expect(env.bool('NOT_FOUND', true)).toBe(true)
      expect(env.bool('NOT_FOUND', false)).toBe(false)
      expect(env.bool('NOT_FOUND')).toBe(false)
    })
  })

  describe('env.array', () => {
    it('returns default value if var not present', () => {
      expect(env.array('not_found', ['1', '2', '3'])).toEqual(['1', '2', '3'])
      expect(env.array('not_found')).toEqual([])
    })
    it('splits by comma by default', () => {
      process.env['ARRAY_TEST'] = '1,2,3, 4, 5,     6,  7'
      expect(env.array('ARRAY_TEST')).toEqual([
        '1', '2', '3', '4', '5', '6', '7'
      ])
    })
  })

})