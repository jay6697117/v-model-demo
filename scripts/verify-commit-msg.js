const chalk = require('chalk');
const msgPath = process.env.GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE =
  /^((?<!([A-Z]{1,10})-?)[A-Z]+-\d+): \[(feature|fix|docs|style|refactor|test|chore)\] [A-Za-z0-9|\s]{1,80}$/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('invalid commit message format.')}\n\n` +
      chalk.red('  Proper commit message format is required for automated changelog generation. Examples:\n\n') +
      `    ${chalk.green("feat(compiler): add 'comments' option")}\n` +
      `    ${chalk.green('fix(v-model): handle events on blur (close #28)')}\n\n` +
      chalk.red('  See .gitlab/COMMIT_CONVENTION.md for more details.\n') +
      chalk.red(`  You can also use ${chalk.cyan('git cz')} to interactively generate a commit message.\n`)
  );
  process.exit(1);
}
