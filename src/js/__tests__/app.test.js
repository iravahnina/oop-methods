import Character from '../app';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('класс Character имя не является строкой', () => {
  expect(() => {
    const recieved = new Character(123, 'Bowman');
    return recieved;
  }).toThrow();
});

test('класс Character имя короче 2 символов', () => {
  expect(() => {
    const recieved = new Character('F', 'Bowman');
    return recieved;
  }).toThrow();
});

test('класс Character имя больше 10 символов', () => {
  expect(() => {
    const recieved = new Character('Foooooooooo', 'Bowman');
    return recieved;
  }).toThrow();
});

test('класс Character несуществующий тип персонажа', () => {
  expect(() => {
    const recieved = new Character('Fio', 'SuperMario');
    return recieved;
  }).toThrow();
});

test('класс Bowman', () => {
  const recieved = new Bowman('Fio', 'Bowman');
  expect(recieved).toEqual({
    type: 'Bowman',
    name: 'Fio',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('класс Swordsman', () => {
  const recieved = new Swordsman('Fio', 'Swordsman');
  expect(recieved).toEqual({
    type: 'Swordsman',
    name: 'Fio',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('класс Magician', () => {
  const recieved = new Magician('Fio', 'Magician');
  expect(recieved).toEqual({
    type: 'Magician',
    name: 'Fio',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('класс Daemon', () => {
  const recieved = new Daemon('Fio', 'Daemon');
  expect(recieved).toEqual({
    type: 'Daemon',
    name: 'Fio',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('класс Undead', () => {
  const recieved = new Undead('Fio', 'Undead');
  expect(recieved).toEqual({
    type: 'Undead',
    name: 'Fio',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('класс Zombie', () => {
  const recieved = new Zombie('Fio', 'Zombie');
  expect(recieved).toEqual({
    type: 'Zombie',
    name: 'Fio',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('метод levelUp', () => {
  const recieved = new Bowman('Fio', 'Bowman');
  recieved.damage(20);
  recieved.levelUp();
  expect(recieved).toEqual({
    type: 'Bowman',
    name: 'Fio',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('метод damage', () => {
  const recieved = new Bowman('Fio', 'Bowman');
  recieved.damage(20);
  expect(recieved).toEqual({
    type: 'Bowman',
    name: 'Fio',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('метод levelUp умершего персонажа', () => {
  expect(() => {
    const recieved = new Bowman('Fio', 'Bowman');
    recieved.damage(999);
    recieved.levelUp();
    return recieved;
  }).toThrow();
});