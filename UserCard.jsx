const userData=[
    {
        ename:"Sona M S",
        city:"Dubai",
        stream:"Python Full Stack Developer",
        skills:["Python","Sql","Web Technology","React","Django","Power BI"],
        online:true,
        profile:"Images/1.jpg"
    },
    {
        ename:"Sona M S",
        city:"Chennai",
        stream:"Python Full Stack Developer",
        skills:["Python","Sql","Web Technology","React","Django","Power BI"],
        online:true,
        profile:"Images/1.jpg"
    },
    {
        ename:"Sona M S",
        city:"Coimbatore",
        stream:"Python Full Stack Developer",
        skills:["Python","Sql","Web Technology","React","Django","Power BI"],
        online:false,
        profile:"Images/1.jpg"
    },
]


function    User(props){
    return <div className="card-contatiner">
        <span className={props.online ?"pro online": "pro offline"}>{props.online ?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.stream}</p>
        <div className="buttons">
            <button className="primary"> Messages</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>

}
const UserCard = () => {
return (
<>
    {userData.map((user,index)=>(
        <User key={index} name={user.ename} city={user.city} stream={user.stream} online={user.online} profile={user.profile} skills={user.skills}   />
    ))}
</>
)
}

export default UserCard
