import React from 'react';

 
    /* The first method we will look into is the setItem(). We use this method to add an item to the Storage object. This method accepts two arguments – the key name and value. */

    localStorage.setItem("key", "value") 

    /* To retrieve or read data from the local storage, you’ll need to invoke the getItem() method and pass along the data key. */

    localStorage.getItem("key") 

    const obj = {
        id: 1,
        title: "Setup development environment",
        completed: true,
    }

    localStorage.setItem("myItem", JSON.stringify(obj))

    localStorage.getItem("myItem") 

    /* Remember, the storage always returns a string. So we need to make use of the JSON.parse() method to parse the string and returns a JavaScript object. */

    JSON.parse(localStorage.getItem("myItem"))