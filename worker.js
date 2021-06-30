onmessage = async e => {
  const scriptUrl = e.data
  const resp = await fetch(scriptUrl)
  const code = await resp.text()

  with ({
    code,
    console: {
      log(...msg) {
        postMessage({ type: 'output', msg: msg.join(' ') + '\n' })
      },
    },
  }) {
    postMessage({ type: 'start' })
    try {
      eval(code)
      postMessage({ type: 'done' })
    } catch (err) {
      postMessage({ type: 'error', error: err.message })
    }
  }
}
