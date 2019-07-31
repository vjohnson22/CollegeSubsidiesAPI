const rawSchoolData = require('./subsidies.json')


// cleaning data for seeding
const school = rawSchoolData.map(data =>{
    let object = {}
    let institution = data.Institution
    let position = institution.indexOf(`_`)
    let name = institution
    if(position != -1){
        name = institution.slice(0,position)
    }
    object.institution = name
    object.conference = data.Conference
    object.percentFromSubsidies = data['% of revenue from subsidies']
    object.subsidies = data.Subsidies
    object.athleticsRevenue = data['Athletics revenue']
    object.headCoach = null
    object.headCoachPay = null
    object.asstCoachs = []
    object.asstCoachPay = null 
    return object    
})
console.log(school)
