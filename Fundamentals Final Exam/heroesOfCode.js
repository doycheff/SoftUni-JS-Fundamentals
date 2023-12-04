function heroesOfCode(input) {
    let num = Number(input.shift());
    let line = input.shift();

    let heroes = {};

    for (let i = 0; i < num; i++) {
        let [hero, hp, mp] = line.split(" ");
        hp = Number(hp);
        mp = Number(mp);

        heroes[hero] = { hp, mp };

        line = input.shift();
    }

    while (line != "End") {
        let tokens = line.split(" - ");
        let action = tokens[0];
        let heroName = tokens[1];

        if (action == "CastSpell") {
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];

            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                console.log(
                    `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`
                );
            } else {
                console.log(
                    `${heroName} does not have enough MP to cast ${spellName}!`
                );
            }
        } else if (action == "TakeDamage") {
            let damage = Number(tokens[2]);
            let attacker = tokens[3];

            heroes[heroName].hp -= damage;

            if (heroes[heroName].hp <= 0) {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            } else {
                console.log(
                    `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`
                );
            }
        } else if (action == "Recharge") {
            let mpToRestore = Number(tokens[2]);

            if (heroes[heroName].mp + mpToRestore > 200) {
                mpToRestore = 200 - heroes[heroName].mp;
            }

            heroes[heroName].mp += mpToRestore;

            console.log(`${heroName} recharged for ${mpToRestore} MP!`);
        } else if (action == "Heal") {
            let hpToRestore = Number(tokens[2]);

            if (heroes[heroName].hp + hpToRestore > 100) {
                hpToRestore = 100 - heroes[heroName].hp;
            }

            heroes[heroName].hp += hpToRestore;

            console.log(`${heroName} healed for ${hpToRestore} HP!`);
        }

        line = input.shift();
    }

    for (let name in heroes) {
        console.log(name);
        console.log(`  HP: ${heroes[name].hp}`);
        console.log(`  MP: ${heroes[name].mp}`);
    }
}
// heroesOfCode([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End",
// ]);
heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
]);
