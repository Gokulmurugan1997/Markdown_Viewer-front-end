const ApiRoutes = {
    LOGIN:{
        path:"/user/login",
        authenticate:false
    },
    SIGNUP:{
        path:"/user/signup",
        authenticate:false
    },
    RESETPASSWORD:{
        path:"/user/resetpassword",
        authenticate:false
    },
    FORGETPASSWORD:{
        path:"/user/forgetpassword",
        authenticate:false
    },
    MARKDOWNLIST:{
        path:"/user/getMarkdownlist",
        authenticate:false
    },
    MARKDOWNFINDBYID:{
        path:"/user",
        authenticate:false
    },
    CREATEMARKDOWN:{
        path:"/user/createMarkdown",
        authenticate:false
    },
    UPDATEMARKDOWN:{
        path:"/user",
        authenticate:false
    },
    DELETEMARKDOWN:{
        path:"/user",
        authenticate:false
    },
    COUNTALL:{
        path:"/user",
        authenticate:false
    },
    }

export default ApiRoutes