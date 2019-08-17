const vscode = require('vscode');
const path   = require('path');
const fs     = require('fs');

const install_dir = path.dirname(require.main.filename);
const css_name    = (vscode.version >= "1.38") ? 'workbench.desktop.main.css' : 'workbench.main.css';
const css_path    = path.join(install_dir, 'vs', 'workbench', css_name);
const ext_path    = vscode.extensions.getExtension('EdOverride.full-darcula-theme').extensionPath;
const image_path  = path.join(ext_path, 'themes', 'bg1.jpg').replace(/\\+/g, '/')
const css_regex   = new RegExp(/(\/\*full-darcula-theme-start\*\/.+\/\*full-darcula-theme-end\*\/)/g);
const css         = `/*full-darcula-theme-start*/body{background-repeat:repeat;background-image:url('${image_path}');opacity:0.72;background-size: 550px;}/*full-darcula-theme-end*/`

function activate(context) {

  let activate_bg = vscode.commands.registerCommand('full-darcula-theme-activate-bg', function () {
    let content = fs.readFileSync(css_path, 'utf-8');
    content     = content.replace(css_regex, '');
    content     = content + css;
    fs.writeFileSync(css_path, content, 'utf-8');
    vscode.commands.executeCommand('workbench.action.reloadWindow');
  });

  let deactivate_bg = vscode.commands.registerCommand('full-darcula-theme-deactivate-bg', function () {
    let content = fs.readFileSync(css_path, 'utf-8');
    content     = content.replace(css_regex, '');
    fs.writeFileSync(css_path, content, 'utf-8');
    vscode.commands.executeCommand('workbench.action.reloadWindow');
  });

  context.subscriptions.push(activate_bg, deactivate_bg);
}

function deactivate() { }

exports.activate = activate;
module.exports = {activate, deactivate};
