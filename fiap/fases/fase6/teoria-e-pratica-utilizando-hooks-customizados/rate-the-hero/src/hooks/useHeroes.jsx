import useAxios from "axios-hooks";
import React from "react";

export function useHeroes(searchValue ){

      const [{ data: heroes, loading: isLoadingHeroes, error: requestError }, searchHero] = useAxios(
        `/search/${searchValue}`,
        { manual: true }
      );
    
      // 1. Busca inicial
      React.useEffect(() => {
        searchHero().catch((err) => console.log('Erro no disparo inicial:', err));
      }, []);
    
    return{
        heroes,
        isLoadingHeroes,
        searchHero,
        requestError
    }
}