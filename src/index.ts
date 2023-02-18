import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

export const player1 = new Character('Ar Dualin'); // baseado no meu personagem de um rpg
export const player2 = new Character('Coën'); // outro personagem meu de um rpg
export const player3 = new Character('Mah Lukah');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

export const monster1 = new Monster();
export const monster2 = new Dragon();

export const pvp = new PVP(player2, player3);

export const pve = new PVE(player1, [monster1, monster2]);

export const runBattles = (battles: Array<Battle>) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};