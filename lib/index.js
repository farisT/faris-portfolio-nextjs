
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
    if(currentPath === '/' || currentPath === '/projects'){
        className = 'header--fixed';
        return className;
    }
    else {
        className = 'header';
        return className;
    }
}
