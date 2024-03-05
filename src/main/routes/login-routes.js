const LoginRouter = require('../../presentation/routers/login-router')
const AuthUseCase = require('../../domain/usecases/auth-usecase')
const EmailValidator = require('../../utils/helpers/email-validator')
const EmailValidator = require('../../utils/helpers/email-validator')

module.exports = router => {
  const EmailValidator = new EmailValidator()
  const authUseCase = new AuthUseCase()
  const loginRouter = new LoginRouter(authUseCase, EmailValidator)
  router.post('/login', loginRouter)
}