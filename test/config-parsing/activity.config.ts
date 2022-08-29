// 页面活动ID设置
const activityId: ActivityID = {
  pc: 51395,
  h5: 51396,
  code: 55693,
}

// 网页配置 代码块模式不需要
const browserConfig: BrowserConfig = {
  title: '活动开发页',
  keywords: '活动页自定义 keyword',
  description: '活动页自定义 desction',
  filename: 'index.html',
}

// 活动页面基础配置
const config: Config<ActivityID> = {
  pc: {
    ...browserConfig,
    activityId: activityId.pc,
    entry: 'src/pages/pc/index.ts',
    template: 'src/pages/pc/index.html',
  },
  h5: {
    ...browserConfig,
    entry: 'src/pages/h5/index.ts',
    template: 'src/pages/h5/index.html',
    activityId: activityId.h5,
    useRem: true,
    useVConsole: true,
  },
  code: {
    activityId: activityId.code,
    entry: 'src/pages/code-block/index.ts',
    template: 'src/pages/code/index.html',
    useRem: true,
  },
}

export default config

/**
 * 活动开发基础配置
 */
type Config<T extends { [key: string]: number }> = {
  [Key in keyof T]: PageConfig // 获取来自 activityID 里的 key
}

/**
 * 代码推到对应活动页面 ID 的配置
 * [key: string] 对应 pages 里的目录内容
 */
interface ActivityID {
  [key: string]: number
}

/**
 * 每个页面的配置
 */
interface PageConfig extends BrowserConfig {
  activityId: number // 活动 id 例如 51396
  entry: string // 页面入口文件 例如 src/pages/h5/index.ts
  template: string // html 页面入口文件 例如 src/pages/h5/index.html
  useRem?: boolean // 页面是否用 rem 自适应
  useVConsole?: boolean // 页面是否用 vconsole 移动端开发时需要 后面用环境变量替代
}

/**
 * 网页配置
 */
interface BrowserConfig {
  title?: string // 网页标题名
  keywords?: string
  description?: string
  filename?: string
}
