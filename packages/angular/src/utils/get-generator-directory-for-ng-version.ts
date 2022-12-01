import type { Tree } from '@nrwl/devkit';
import { readJson } from '@nrwl/devkit';
import { coerce, major } from 'semver';

export function getGeneratorDirectoryForInstalledAngularVersion(tree: Tree) {
  const pkgJson = readJson(tree, 'package.json');
  const angularVersion = pkgJson.dependencies['@angular/core'];

  const majorAngularVersion = major(coerce(angularVersion));

  const directoryDictionary = {
    14: 'angular-v14',
  };

  return directoryDictionary[majorAngularVersion] ?? null;
}