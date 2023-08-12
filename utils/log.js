const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('LogError » ') + data);
			break;
		case "error":
			console.log(chalk.red('LogError » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('Bot Log » ') + data);
			break;
		case "error":
			console.log(chalk.red('Bot Log » ') + data);
			break;
		default:
			console.log(chalk.green(`Bot Log » `) + data);
			break;
	}
}