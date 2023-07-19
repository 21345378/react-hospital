export const getFormatTime = () =>{
    const  nowDate = new Date()
    let Year:string | number = nowDate.getFullYear()
    let Mouth:string | number = nowDate.getMonth()+1
    let Day:string | number = nowDate.getDate()
    Day = Day < 10 ? `0${Day}` : Day
    Mouth = Mouth < 10 ? `0${Mouth}` : Mouth

    return `${Year}-${Mouth}-${Day}`
}

