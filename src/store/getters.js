const getters = {
  accountId: state => state.app.model.accountId,
  accountName: state => state.app.model.accountName,
  accountDate: state => state.app.model.accountDate,
  loginName: state => state.app.model.loginName,
  loginUserId: state => state.app.model.loginUserId,
  pwd: state => state.app.model.pwd,
  key: state => state.app.model.key,
  model: state => state.app.model,

  showRb: state => state.runtime.showRedBlue,
  targetUrl: state => state.runtime.targetUrl,

  addRoutes: state => state.app.menus,

  wareHouseList: state => state.base.wareHouseList,

  numProps: state => ['iChangRate', 'iNum'],
  defWhCode: state => state.runtime.defWhCode
}
export default getters
