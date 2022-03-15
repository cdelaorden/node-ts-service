function env(key:string, defaultValue?:string):string|undefined {
  return process.env[key] ?? defaultValue ?? undefined
}

env.int = (key:string, defaultValue = 0):number => {
  return process.env[key] != null ? parseInt(process.env[key] as string, 10): defaultValue
}

env.bool = (key:string, defaultValue?:boolean):boolean => {
  const value = process.env[key]
  if (value == null) return defaultValue ?? false
  // parse strings true/TRUE, false/FALSE
  if (value.toString().toLocaleLowerCase() === 'true') return true
  if (value.toString().toLocaleLowerCase() === 'false') return false
  // parse numbers
  return Boolean(env.int(key, Number(defaultValue)))
}

env.array = (key:string, defaultValue: string[] = [], separator = ','): string[] => {
  const value = process.env[key]
  if (value == null) return defaultValue
  return value.split(separator).map(x => x.trim())
}

export default env