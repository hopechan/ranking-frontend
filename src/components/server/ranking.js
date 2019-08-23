import API from "./api";

class Ranking{
    obtenerRanking(anio){
        return API.get(`Nota/ranking/${anio}`)
        .then(res => {
            const notas = res.data;
            console.log(notas);
        })
    }
}

export default Ranking;