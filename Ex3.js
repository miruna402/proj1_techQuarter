// 3. Write a function that takes an array of strings as argument. Group those strings by their first letter. 
//     Return an object that contains properties with keys representing first letters
//     The values should be arrays of strings containing only the corresponding strings
//     For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//     Ex: { a: ['Alf', 'Alice'], b: ['Ben']}
// -punem prima lit intr un array
// -eliminam dublicatele const b=newSet(a) ,in a erau dublicatele

const arr=['Alf','Alice','Ben'];

function GroupBy(arr){

    const result={};
    const firstLetter = arr.map(([v])=> v);
    const newFirstLetter=new Set(firstLetter);


    newFirstLetter.forEach(el=>{ 
        result[el.toLowerCase()]=[]
      })
     newFirstLetter.forEach(char=>{
        for(let word of arr) {
              if(word[0]==char) {
                      result[char.toLowerCase()].push(word)
                  }
            }
        })
    
    // for(let j=0;j<newFirstLetter.length;j++){
    //     for(let i=0;i<arr.length;i++)
    //     {
    //         const name=arr[i];
    //         if(name[0]==newFirstLetter[j]) result[newFirstLetter].push(name);
    //     }
    // }

//     for(let i = 0; i < arr.length ; i++) {
//         const item = arr[i];
//     if(!result[newFirstLetter]) {
//         result[newFirstLetter] = [];
//     }

//     if(result[newFirstLetter].indexOf(item) < 0) {
//         result[newFirstLetter].push(item);
//     }
// }

    return result;
}
console.log(GroupBy(arr));


