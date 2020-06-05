
interface IOwnersUser
{
    id: string;
    owner?: boolean;
}


interface IRoom
{
    [propName: string]: IOwnersUser[];
}


class Room
{
    private room = new Map<string, IOwnersUser[]>();
    private user: (id: string)=>Array<IOwnersUser>;
    public constructor() {}

    set Owner(id: string)
    {
        this.room[id] = this.user(id);
    }

    set User( OwnersUser:(id: string)=>Array<IOwnersUser> )
    {
        this.user = OwnersUser;
    }
}

const room = new Room;

room.User = (id: string): Array<IOwnersUser> => { return [{id : "123"}]; };
room.Owner = "33";

console.log(room)