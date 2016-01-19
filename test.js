var editorconfig = require('editorconfig');
var fs = require('fs');
var path = require('path');
var configPath = path.join(__dirname, '/.editorconfig');
var configs = [
	{
    name: configPath,
    contents: fs.readFileSync(configPath, 'utf8')
	}
];
var filePath = path.join(__dirname, '/sample.js');
var promise = editorconfig.parseFromFiles(filePath, configs);
promise.then(function onFulfilled(result) {
  console.log(result)
});
/*
  {
    indent_style: 'space',
    indent_size: 2,
    end_of_line: 'lf',
    charset: 'utf-8',
    trim_trailing_whitespace: true,
    insert_final_newline: true,
    tab_width: 2
  };
*/
