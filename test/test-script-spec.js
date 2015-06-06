var zombies = require("../zombies.js");

var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

describe('Item', function() {

  it('should be a function', function() {

      expect(zombies.Item).to.be.a('function');

  });

  describe('constructor', function() {

    var item = new zombies.Item('Water Bottle');

    it('should create a new Item with a name', function() {

      item.should.have.property('name');
      item.name.should.be.equal('Water Bottle');
    });

  });
});

describe('Weapon', function() {

  it('should be a function', function() {

      expect(zombies.Weapon).to.be.a('function');
    });

  describe('constructor', function() {

    var weapon = new zombies.Weapon('Sword', 25);

    it('should be an instance of Item', function() {

      expect(weapon).to.be.an.instanceof(zombies.Item);
    });

    it('should create a new Weapon with a name and damage', function() {

      weapon.should.have.property('name');
      weapon.should.have.property('damage');
      weapon.name.should.be.equal('Sword');
      weapon.damage.should.be.equal(25);
    });
  });
});

describe('Food', function() {

  it('should be a function', function() {

      expect(zombies.Food).to.be.a('function');
    });

  describe('constructor', function() {

    var food = new zombies.Food('Cheetos', 25);

    it('should be an instance of Item', function() {

      expect(food).to.be.an.instanceof(zombies.Item);
    });

    it('should create a new Food with a name and energy', function() {

      food.should.have.property('name');
      food.should.have.property('energy');
      food.name.should.be.equal('Cheetos');
      food.energy.should.be.equal(25);
    });
  });
});

describe('Player', function() {

  it('should be a function', function() {

      expect(zombies.Player).to.be.a('function');
    });

  describe('constructor', function() {

    var player = new zombies.Player('Taran', 25, 50, 75);

    it('should create a new Player with a name, health, strength, speed, isAlive, equipped', function() {

      player.should.have.property('name');
      player.should.have.property('health');
      player.should.have.property('strength');
      player.should.have.property('speed');
      player.should.have.property('isAlive');
      player.should.have.property('equipped');
      player.name.should.be.equal('Taran');
      player.health.should.be.equal(25);
      player.strength.should.be.equal(50);
      player.speed.should.be.equal(75);
      player.isAlive.should.be.equal(true);
      player.equipped.should.be.equal(false);
    });

    it('should have private variables pack and maxHealth', function() {

      expect(player.pack).to.be.undefined;
      expect(player.maxHealth).to.be.undefined;
    });

    it('should have method getPack that returns pack',function() {

      expect(player.getPack).to.be.a('function');
      expect(player.getPack()).to.be.an('Array');
    });

    it('should have method getMaxHealth that returns the initial player health'), function() {

      expect(player.getMaxHealth).to.be.a('function');
      //expect(player.getMaxHealth()).to.be.equal(25);
    };

    player.health = 10;

    it('getMaxHealth returns the initial health'), function() {

      //expect(player.getMaxHealth()).to.be.equal(25);
      player.getMaxHealth().should.be(25);
    };

    it('should have a method checkpack that logs the pack contents', function() {

      expect(player.checkPack).to.be.a('function');
      //expect(player.checkPack()).to.be.an('Array');
    });

    var candlestick = new zombies.Item("Candlestick");
    var rock = new zombies.Item("Rock");
    var tooth = new zombies.Item("Tooth");
    var torch = new zombies.Item("Torch");

    it('should have a method takeItem that adds item to pack', function() {

      expect(player.takeItem).to.be.a('function');

      player.takeItem(torch);

      player.getPack().should.contain(torch);

      player.takeItem(candlestick);
      player.takeItem(rock);
      player.takeItem(tooth);

      player.getPack().should.contain(candlestick);
      player.getPack().should.contain(rock);
      player.getPack().should.not.contain(tooth);
    });

    it('should have a method discardItem that removes items from pack', function() {

      player.takeItem(torch);
      player.getPack().should.contain(torch);
      player.discardItem(torch).should.be.true;
      player.getPack().should.not.contain(torch);
      player.discardItem(torch).should.be.false;
    });

    var sword = new zombies.Weapon("Sword",100);
    var mace = new zombies.Weapon("Mace", 80);

    it('should have a method equip that sets equip to a given Weapon', function() {

      player.equip(candlestick);
      player.equipped.should.not.be.a(candlestick);
      player.equip(sword);
      player.equipped.should.be.a(sword);
      player.equip(mace);
      player.equipped.should.be.a(mace);
      player.getPack().should.contain(sword);
    });
  });
});



  //var zombies = require("./../zombies.js");

//   it('should be a function', function() {

//     expect(Item).to.be.a('function');
//   });
// });

// describe('Add()', function () {
//   var add = require('./../js/add.js');

//   it('should add two numbers', function () {
//     var result = add(3, 4);

//     expect(result).to.equal(7);
//   });
//   it('should pass validations', function () {
//     var result = add('8', {});

//     expect(result).to.not.be.a('number');
//     expect(result).to.be.an('error');
//   });
//});