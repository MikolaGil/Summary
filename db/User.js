
class User{
    //constructor();

    getInfo(){
        const User = {
            firstName: 'Mikalai',
            secondName: 'Hil',
            contacts: [
                {
                    type: '',
                    data: ''
                },
                {
                    type: '',
                    data: ''
                },
                {
                    type: '',
                    data: ''
                },
                {
                    type: '',
                    data: ''
                },
                {
                    type: '',
                    data: ''
                }
            ]
        }

        return User;
    }
}

module.exports = User;