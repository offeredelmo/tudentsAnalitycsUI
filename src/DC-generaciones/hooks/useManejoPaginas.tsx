import { useState } from "react";



export const useManejoPaginas = (pageinit: number = 1, perPageinit: number = 10) => {

    const [page, setPage] = useState(pageinit);
    const [perPage, setPerPage] = useState(perPageinit);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPerPage(parseInt(event.target.value, perPageinit));
        setPage(0); // Resetear a la primera página
    };

    return {
        page,
        perPage,
        handleChangePage,
        handleChangePerPage,
    }
}