import style from '../src'

(async () => {
  const res = await style({
    text: 'example',
  })
  console.log(res)
})()