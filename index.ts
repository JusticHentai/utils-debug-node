#! /usr/bin/env node

const a = (n: number) => {
  const args = Array.prototype.slice.call(arguments)
  console.log(args)
  console.log('分割线')
  console.log(...arguments)
}

a(5)
