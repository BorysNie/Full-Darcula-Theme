# Full Darcula theme

#### My version of Darcula theme for VS Code, inspired by [JetBrains IDE](https://www.jetbrains.com), with some personal touches.


## Languages included:
* Ruby
* JavaScript
* CSS
* SCSS
* YAML
* JSON
* Nginx config
* PHP
* HTML
* XML
* Python


## Code Highlight

<img src="https://raw.githubusercontent.com/EdOverride/Full-Darcula-Theme/master/examples/code_scss.png" height="400px">

##### More code syntax highligh examples in [Examples](examples) folder.


## Editor Theme

Theme also comes with dark visual styles with two different styles,
 with background image:

![](https://raw.githubusercontent.com/EdOverride/Full-Darcula-Theme/master/examples/1.png)

or without:

![](https://raw.githubusercontent.com/EdOverride/Full-Darcula-Theme/master/examples/2.png)

To activate/deactivate background image, open Command Palette (default: `ctrl+shift+p`)
and execute commands:

* Activate Background Image: `Full Darcula Theme: Activate Background Image`
* Deactivate Background Image: `Full Darcula Theme: Deactivate Background Image`

# ⚠️ **Warning**: If you have enabled background image, you must disable it, before uninstalling extension, or it will stay active.


## TODO's:
* Add languages:
  * Java
  * TypeScript
  * C++
  * C#
  * Bash
  * VB.Net
  * VBS


## How to Debug
Press CTRL+SHIFT+P and type `Developer: Inspect TM Scopes`


## How to generate package file
```bash
npm install -g vsce
vsce package
```

## How to publish
```bash
npm install -g vsce
vsce package
vsce publish
```


#### Most likely it's not perfect/complete. Feel free to submit suggestions on what's missing.


## Resources
* https://marketplace.visualstudio.com/VSCode
