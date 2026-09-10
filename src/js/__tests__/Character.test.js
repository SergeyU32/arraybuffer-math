import Character from '../Character';

test('attack at distance 1', () => {
  const character = new Character('Test');
  character.attack = 100;
  character.distance = 1;

  expect(character.attack).toBe(100);
});

test('attack at distance 2', () => {
  const character = new Character('Test');
  character.attack = 100;
  character.distance = 2;

  expect(character.attack).toBe(90);
});

test('attack at distance 5', () => {
  const character = new Character('Test');
  character.attack = 100;
  character.distance = 5;

  expect(character.attack).toBe(60);
});

test('stoned attack at distance 2', () => {
  const character = new Character('Test');
  character.attack = 100;
  character.distance = 2;
  character.stoned = true;

  expect(character.attack).toBe(85);
});

import Magician from '../Magician';
import Daemon from '../Daemon';

test('Magician has correct type', () => {
  const magician = new Magician();

  expect(magician.type).toBe('Magician');
});

test('Daemon has correct type', () => {
  const daemon = new Daemon();

  expect(daemon.type).toBe('Daemon');
});

test('attack setter changes base attack', () => {
  const character = new Character('Test');

  character.attack = 200;

  expect(character.attack).toBe(200);
});