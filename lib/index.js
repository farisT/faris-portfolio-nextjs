
export function headerSelector (path){
    let modifier = ''
    let sanitzedPath = path.substr(1);
    if(path !== '/'){
        modifier = '--'
    }
    let modifiedPath = modifier + sanitzedPath;
    console.log(modifiedPath)
    return modifiedPath;
}
