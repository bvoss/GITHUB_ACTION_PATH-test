import * as core from '@actions/core'

async function run(): Promise<void> {
  core.info(`GITHUB_ACTION_PATH: ${process.env['GITHUB_ACTION_PATH']}`)
}

run()
