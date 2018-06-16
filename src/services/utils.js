
const ALL_AVATARS = [
  '001-snorlax',
  '002-psyduck',
  '003-pikachu',
  '004-jigglypuff',
  '005-bullbasaur'
];

export const getRandomAvatar = () => {
  const length = ALL_AVATARS.length;
  return ALL_AVATARS[Math.floor(Math.random() * length)];
}