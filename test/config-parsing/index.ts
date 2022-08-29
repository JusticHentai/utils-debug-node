import configParsing from '@justichentai/config-parsing'

export default async function configParsingTest() {
  const path = './test/config-parsing/activity.config.ts'

  const res = await configParsing(path)

  console.log(res.default)
}
