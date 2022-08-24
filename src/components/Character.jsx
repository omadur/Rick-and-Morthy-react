function Character({ character }) {
  return (
    <article className="card-container">
      <h2>{character.name}</h2>
      <figure className="container-image">
        <img src={character.image}></img>
      </figure>
    </article>
  );
}

export default Character;
