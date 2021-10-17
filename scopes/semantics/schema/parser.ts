import { Module, SemanticSchema } from '@teambit/semantics.entities.semantic-schema';

export interface Parser {
  /**
   * regex to apply on which components compiler applies.
   */
  extension: RegExp;

  /**
   * parse a module.
   */
  parseModule(modulePath: string): Module;
}
