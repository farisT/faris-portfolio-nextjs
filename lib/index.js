
export function headerSelector (path){
    let modifier = ''
    let sanitzedPath = path.substr(1);
    if(path !== '/'){
        modifier = '--'
    }
    let modifiedPath = modifier + sanitzedPath;
    return modifiedPath;
}

export function headerClass (path){
    let currentPath = path;
    let className;
    if(currentPath === '/'){
        className = 'header--fixed';
        return className;
    }
    else {
        className = 'header';
        return className;
    }
}

export function windowSize (){
    console.log(global.innerWidth)
}