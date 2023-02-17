import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff between json - json, stylish format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('stylish_expected_file.txt'));
});

test('gendiff between yaml - yml, stylish format', () => {
  expect(genDiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'))).toEqual(readFile('stylish_expected_file.txt'));
});

test('gendiff between json - json, plain format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('plain_expected_file.txt'));
});

test('gendiff between yaml - yml, plain format', () => {
  expect(genDiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'))).toEqual(readFile('plain_expected_file.txt'));
});
