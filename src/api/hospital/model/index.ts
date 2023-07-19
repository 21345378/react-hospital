export interface hospitalData{
    id:number,
    createTime?:string,
    updateTime?:string
    isDeleted:number,
    hasChildren:boolean,
    dictCode:string|null,
    param: object,
    parentId: number,
    name: string,
    value: string,
}

export interface scheduleDataMapItem{
    bigname:string,
    depname:string,
    hosname:string,
    releaseTime:string,
    stopTime:string,
    workDateString:string
}
export interface scheduleDatabookingScheduleListItem{
    availableNumber:number,
    dayOfWeek:string,
    docCount: number,
    reservedNumber: number,
    status: number,
    workDate: string,
    workDateMd: string,
}


interface reserveObject{
    dayOfWeek:string,
    depname:string,
    hosname:string
}

export interface reserveDateItem{
    amount: number,
    availableNumber: number,
    createTime: string,
    depcode:string,
    docname:string,
    hosScheduleId:string,
    hoscode:string,
    id:string,
    isDeleted: number,
    param:reserveObject,
    reservedNumber:number,
    skill:string,
    status:number,
    title:string,
    updateTime:string
    workDate:string,
    workTime:number
}
