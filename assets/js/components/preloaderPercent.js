// eslint-disable-next-line no-unused-vars
export function loader(_success) {
  const inner = this.$refs.percent
  let w = 0;
  const t = setInterval(function () {
    w = w + 5
    inner.textContent = w + '%'
    if (w === 100) {
      clearInterval(t)
      w = 0
      if (_success) {
        return _success()
      }
    }
  }, 200)
}
