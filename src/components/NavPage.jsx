function NavPage(props) {
  return (
    <section className="nav-section">
      <span>Página: {props.page}</span>
      <button
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Siguiente página
      </button>
    </section>
  );
}

export default NavPage;
