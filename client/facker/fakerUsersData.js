class FakerUsersData {

    constructor() {
        this.users = []
        this.usersName = ['Patrick', 'Harold', 'Nick', 'Jessy', 'Mike', 'Nike', 'Winston', 'Next']
    }

    usersData() {
        this.users = []

        for(let i = 0; i < this.usersName.length; i++) {
            this.users.push({
                id: Date.now(),
                name: this.usersName(i)
            })
        }
    }
}

module.exports = FakerUsersData