const fetch = require("node-fetch2");

it("Should get a login token",async ()=>{

    let token = "";//this is an emptry string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"ivyrobinson@gmail.com",
            "password":"P@ssw0rd"
        })
    }


    const response = await fetch('http://localhost:3000/leah');

    const name = await response.text();

    expect(name).toBe("leah");
})