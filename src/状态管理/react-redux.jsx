const getuser = (params: unknown)=>{
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                username: "Tom",
                userId: 0,
              });
        },500)
    })
}

type UserAction = Action<ValueOf<typeof USER_MODIFY_ACTION>> & {
    payload: any;
  };

  
ee