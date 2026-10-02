export function formatDate(date){
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
    // return new Date(date).toLocaleString('pt-BR',{
    //     month: 'long',
    //     day: '2-digit',
    //     hour: '2-digit',
    //     minute: '2-digit'

    
    // }
    // )
}