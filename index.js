const menubar = require('menubar');
const path = require('path');

const appInfo = {
  index: 'https://todoist.com/app',
  icon: path.join(__dirname, '/assets/logo.png'),
  title: 'Todobar',
};

var menu = menubar({
  index: appInfo.index,
  icon: appInfo.icon,
  tooltip: appInfo.title,
  width: 400,
  height: 600
});