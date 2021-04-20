export default class Character {
  constructor(name, type) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

      if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
        throw new Error('Неправильное имя персонажа');
      }
  
      if (!typeArr.includes(type)) {
        throw new Error('Задан несуществующий тип персонажа');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  }

 levelUp() {
   if (this.health <= 0) {
     throw new Error('Невозможно повысить уровень умершего персонажа');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}