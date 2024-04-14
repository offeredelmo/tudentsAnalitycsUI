import { useState } from "react";

export const useManejoPaginas = (perPageinit: number = 10) => {
    const [page, setPage] = useState(0); // Cambio aquí, iniciar en 0
    const [perPage, setPerPage] = useState(perPageinit);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPerPage(parseInt(event.target.value, 10));
      setPage(0); // Cambio aquí, reiniciar a 0
    };
  
    return {
      page,
      perPage,
      handleChangePage,
      handleChangePerPage,
    }
  };
  