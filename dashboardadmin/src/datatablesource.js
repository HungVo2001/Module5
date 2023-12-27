export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230, 
    },
    {
        field: "age",
        headerName: "Age",
        width: 100, 
    },
    {
        field: "status",
        headerName: "Status",
        width: 160, 
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];



// temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F6jUDy3hTQ_6_RyvjOk8YNSEgo0J6zESPw&usqp=CAU",
        status: "active",
        email: "hung@gmail.com",
        age: 18,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F6jUDy3hTQ_6_RyvjOk8YNSEgo0J6zESPw&usqp=CAU",
        status: "passive",
        email: "hung2@gmail.com",
        age: 18,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F6jUDy3hTQ_6_RyvjOk8YNSEgo0J6zESPw&usqp=CAU",
        status: "pending",
        email: "hung3@gmail.com",
        age: 18,
    },
    {
        id: 4,
        username: "Lannister",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F6jUDy3hTQ_6_RyvjOk8YNSEgo0J6zESPw&usqp=CAU",
        status: "pending",
        email: "hung3@gmail.com",
        age: 18,
    },
    {
        id: 5,
        username: "Lannister",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F6jUDy3hTQ_6_RyvjOk8YNSEgo0J6zESPw&usqp=CAU",
        status: "pending",
        email: "hung3@gmail.com",
        age: 18,
    },
    {
        id: 6,
        username: "Lannister",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F6jUDy3hTQ_6_RyvjOk8YNSEgo0J6zESPw&usqp=CAU",
        status: "pending",
        email: "hung3@gmail.com",
        age: 18,
    },
]