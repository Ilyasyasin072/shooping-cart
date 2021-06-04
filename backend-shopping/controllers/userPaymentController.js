const UserPayment = require('../models/user_payment')

const index = async (req, res) => {
    
    try {
        
        const user_payment_ = await UserPayment.find({})

        res.json({

            'result' : user_payment_

        })

    } catch (error) {
        
        res.json(error.message)

    }
    
}


const store = async (req, res) => {
    try {

        const payment_form = {
            user_id: '60b70e7ad124ad3906d15b93',
            payment_type: 'Transfer',
            provider: 'BCA',
            account_no:'123234',
            expiry_at: '20/12/2020',
        }

        const payment = UserPayment.create(payment_form);

        res.json({
            'status': 'success',
            'data' : payment
        })
        
    } catch (error) {
        
        res.json(error.message)
    }
}

module.exports = {
    index,
    store
}
