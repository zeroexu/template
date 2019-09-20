const allCards = () => {
    return `{
        allCards{
          imgUrl,
          link,
          description,
          price,
          stayId,
          imgUrl
        }
      }`;
}

const allCardsByStayId = (stayId) => {
    return `{
        allCards(filter:{ stayId:"${stayId}" }){
          imgUrl,
          link,
          description,
          price,
          stayId,
          imgUrl
          }
      }`;
}

const allStayDatasByLabelStart = (partial) => {
    return `{
        allStayDatas(filter:{ label_starts_with:"${partial}"}){
          label,bestPrice,customId
        }
      }`;
}
const stayDataByCustomID = (id) => {
    return `{
        StayData(customId:"${id}"){
          bestPrice,label,customId
        }
      }`;
}

module.exports = {
    allCards, allCardsByStayId, allStayDatasByLabelStart, stayDataByCustomID
};
