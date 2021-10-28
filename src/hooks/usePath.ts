import { IBreadcrumbItem } from "src/components/Breadcrumb/breadcrumb.interfaces";

export function usePath(path : string) : any {
    let breadcrumbPath : string[] = [];
    const breadcrumbItems : IBreadcrumbItem[] = [];
    
    breadcrumbPath = path.split("/");
    breadcrumbPath.shift();
    
    for(let i = 0; i < breadcrumbPath.length; i++){
        let word = breadcrumbPath[i];
        breadcrumbPath[i] = (word.charAt(0)).toUpperCase() + word.substr(1);
    };

    breadcrumbPath.map((word : string, i : number) => {
        let active = false;
        let link = "";
        let lastPosition = breadcrumbPath[breadcrumbPath.length-1];
        let pathLink = [];

        (lastPosition === word) ? active = true : active = false;

        if(word === breadcrumbPath[i]){
            pathLink = path.split("/");
            pathLink.shift();

            link = `/${pathLink.slice(0,i+1)}`;
            link = link.replace(/,/g, "/");
        }

        breadcrumbItems.push({
            link: (`${link}`),
            textKey: word,
            active: active
        });
    })

    console.log(breadcrumbItems);
    

    return breadcrumbItems;
}