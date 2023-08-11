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
			console.log(chalk.yellow('BotLog » ') + data);
			break;
		case "error":
			console.log(chalk.red('BotLog » ') + data);
			break;
		default:
			console.log(chalk.green(`BotLog » `) + data);
			break;
	}
}