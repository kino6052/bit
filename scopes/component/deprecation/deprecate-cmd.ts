import chalk from 'chalk';
import R from 'ramda';
import { Command, CommandOptions } from '@teambit/cli';
import { DeprecationMain } from './deprecation.main.runtime';

export default class DeprecateCmd implements Command {
  name = 'deprecate <ids...>';
  description = 'deprecate a component (local/remote)';
  group = 'collaborate';
  skipWorkspace = true;
  alias = 'd';
  options = [['', 'new-id <string>', 'if replaced by another component, enter the new component id']] as CommandOptions;
  loader = true;
  migration = true;
  remoteOp = true;

  constructor(private deprecation: DeprecationMain) {}

  async report([id]: [string], { newId }: { newId?: string }): Promise<string> {
    const result = await this.deprecation.deprecate(id, newId);
    if (result) {
      return `the component "${id}" has been deprecated successfully`;
    }
    return `the component "${id}" is already deprecated. no changes have been made`;
  }
}
