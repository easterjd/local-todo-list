const fs = require('fs')
const path = require('path')
const command = process.argv[2]
const command2 = parseInt(process.argv[3])

const list = path.join(__dirname, 'list.txt')
if (command) {
  const old = fs.readFileSync(list, 'utf-8')
  const oldArr = old.split('\n')
  const oldParse = []

  if (command === 'show') {
    const edit = old.split('\n')
    const numbered = []
    for (let i = 0; i < edit.length; i++) {
      let task = edit[i]
      numbered.push(`${i + 1}\t${task}\n`)
    }
    const show = numbered.join('')
    // console.log(fs.readFileSync(list, 'utf-8'))
    console.log(show)
    return
  }

  // if (command === 'remove') {
  //   if (!command2) return
  //   const edit = old.split('\n')
  //   const removed = []
  //   for (let i = 0; i < edit.length; i++) {
  //     let task = edit[i]
  //     if (i === command2 - 2) {
  //       i++
  //     }
  //     removed.push(`${task}`)
  //   }
  //   fs.writeFileSync(list, removed.join('\n'))
  //   return
  // }

  if (command === 'remove') {
    if (!command2) return
    const edit = old.split('\n')
    edit.splice(command2 - 1, 1)
    fs.writeFileSync(list, edit.join('\n'))
    return
  }

  fs.writeFileSync(list, `${old}\n${command}`)
}
