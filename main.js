async function onMyBirthDayAsync(isKayoSick){
    if(isKayoSick) return 2;
    throw new Error('I am sick');
}

// async function f(){
//     try{
//         let result = await onMyBirthDayAsync(true);
//         console.log(`I have ${result} cakes`);
//     }catch(e){
//         console.log(e);
//     }finally{
//         console.log('Done');
//     }
// }
// f();

onMyBirthDayAsync(false).then(value => {console.log(value)}).catch(error => {console.log(error)}).finally(()=> {console.log('done')});