const GlosToTopBut = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button id="returnToTopGlos" onClick={scrollToTop}>
        ⬆
      </button>
    </div>
  );
};
export default GlosToTopBut;
