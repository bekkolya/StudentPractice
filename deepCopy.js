function main() {
    function deepClone(theObj) {
        let clone = {};
        for (let i in theObj) {
            if (typeof theObj[i] == 'object') {
                clone[i] = deepClone(theObj[i]);
            } else {
                clone[i] = theObj[i];
            }
        }
        return clone;
    };


    let Obj = {
        x: 1,
        y: 2,
        z: { q: 3, t: 4 }
    };
    let simpleCopyObj = Obj;
    let deepCopyObj = deepClone(Obj);
    Obj.w = 5;
    console.log(Obj);
    console.log(simpleCopyObj);
    console.log(deepCopyObj);
}
window.onload = main;