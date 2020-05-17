const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.nickname,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  // errorLogs: state => state.errorLog.logs,
  ws_msg: state => state.socket.ws_msg,
  qn_url: state => state.qiniu.qn_url,
  qn_token: state => state.qiniu.qn_token,
}
export default getters
