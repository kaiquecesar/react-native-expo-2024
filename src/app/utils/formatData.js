export function formatDataToBrazilian(date) {
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    return new Date(date).toLocaleDateString('pt-BR', options);
}