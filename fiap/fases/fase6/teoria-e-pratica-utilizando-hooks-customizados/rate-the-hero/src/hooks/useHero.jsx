import useAxios from "axios-hooks";

export function useHero(heroId){
    const [{data: hero, loading: isLoadingHeroes}, getHero ] = useAxios (`/${heroId}`,{
        manual: heroId == null,
    })

    return {
        hero,
        isLoadingHeroes,
        getHero
    };
}