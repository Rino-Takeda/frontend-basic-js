const character = {
    "id" : 1,
    "name" : "スライム",
    "hp" : 50,
};

const addMP = (x) => {
    return{ ...character, mp:x};
};

const updateHP = () => {
    const UpdateHp = (character.hp -= 15);
    return { ...character, hp:UpdateHp};
};

const LookUpName = () => {
    return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
