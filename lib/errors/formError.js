class formError extends Error {
  constructor({ message, target } = {}) {
    super(message)
    this.name = "Form Error"
    this.target = target
  }
}

export default formError
