//data
const rawSchoolData = require('./schoolsFinal.json')
const rawHeadCoachData = require('./headCoach.json')
const rawAsstCoachData = require('./asstCoach.json')


//models
const School = require('./models/school')
const HeadCoach = require('./models/headCoach')
const AsstCoach = require('./models/asstCoach')



// cleaning school data for seeding
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
    return object    
})

// cleaning head coach data for seeding
const headCoach = rawHeadCoachData.map(data =>{
    let object = {}
    object.coach = data.COACH
    object.rank = data.RK
    object.school = data.SCHOOL
    object.totalPay = data['TOTAL PAY']
    object.asstPayTotal = data['ASST PAY TOTAL']
    object.schoolBuyout = data["SCHOOL BUYOUT AS OF 4/1/19"]
    return object    
})
//cleanig asst coach data for seeding
const asstCoach = rawAsstCoachData.map(data =>{
    let object = {}
    
    object.coach = data.COACH
    object.rank = data.RK
    object.school = data.SCHOOL
    object.totalPay = data['TOTAL PAY']
    object.asstPayTotal = data['ASST PAY TOTAL']
    return object    
})


School.deleteMany({}).then(d => { 
    School.create(school)
})

HeadCoach.deleteMany({}).then(d => { 
    HeadCoach.create(headCoach)
})

AsstCoach.deleteMany({}).then(d => { 
    AsstCoach.create(asstCoach)
})

module.exports = school