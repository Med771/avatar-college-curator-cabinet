export function transformation_json(json: any, students: any, lessons: any){
    let result: any = [];

    for(let value of json){
        students[value["studentName"]][value["lessonTitle"]] = `${value["stepsFullySolvedRatio"]}%`;
    }

    for(let student in students){
        let arr: any = [];

        arr.push(student);

        for(let lesson of lessons){
            if(students[student][lesson]){
                arr.push(students[student][lesson]);
            }
            else{
                arr.push("no info")
            }
        }

        result.push(arr);
    }
    return result;
}