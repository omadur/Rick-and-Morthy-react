function NavPage(props) {
  return (
    <div>
      <span>Pagina: {props.page}</span>
      <button
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Siguiente pagina
      </button>
    </div>
  );
}

export default NavPage;
