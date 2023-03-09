import * as core from '@actions/core'
import * as util from 'util'

async function run(): Promise<void> {
  core.info('complete env:')
  core.info(util.inspect(process.env))
  core.info('##############################################')
  core.info(`GITHUB_ACTION_PATH: ${process.env['GITHUB_ACTION_PATH']}`)
  core.info(`that:simple? ${__dirname}`)
}

run()
