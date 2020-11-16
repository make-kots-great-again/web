export default function makeFakeGroup (name, descrition) {
   
    const group = {
        groupName : name,
        groupDescription : descrition 
    };

    return {
        ...group
    }
}

