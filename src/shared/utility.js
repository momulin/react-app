
export const updateObject = (object,newobject)=>{
    return {
        ...object,
        ...newobject
    };
};