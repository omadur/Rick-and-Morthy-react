function Character({ character }) {
  return (
    <article>
      <h2>{character.name}</h2>
      <img src={character.image}></img>
    </article>
  );
}

export default Character;
