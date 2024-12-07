const Midtrans = require("midtrans-client");

const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SERVER_KEY,
});

async function createTransaction(firstName, email, invoice, gross_amount, data_seat, price, film, time, phone) {
    const transactionParams = {
        transaction_details: {
            order_id: invoice,
            gross_amount: gross_amount,
        },
        credit_card: {
            secure: true,
        },
        customer_details: {
            first_name: firstName,
            email: email,
            phone: phone
        },
        item_details: [
            ...data_seat.map((item, index) => ({
                id: index,          
                name: `${film} - ${time} | Seat ${item}`,      
                quantity: 1,  
                price: price,    
            }))
        ]
    };

    try {
        const transaction = await snap.createTransaction(transactionParams);
        return transaction;
    } catch (error) {
        console.error('Error creating transaction:', error);
    }
}

async function createTransactionFNB(firstName, email, invoice, gross_amount, data_food, time, phone) {
    const transactionParams = {
        transaction_details: {
            order_id: invoice,
            gross_amount: gross_amount,
        },
        credit_card: {
            secure: true,
        },
        customer_details: {
            first_name: firstName,
            email: email,
            phone: phone
        },
        item_details: data_food.map((item, index) => ({
            id: index,          
            name: `${time} - ${item.name}`,      
            quantity: item.quantity,  
            price: item.price,    
        })),
    };

    try {
        const transaction = await snap.createTransaction(transactionParams);
        return transaction;
    } catch (error) {
        console.error('Error creating transaction:', error);
    }
}


module.exports = {
    midtrans: {
        createTransaction,
        createTransactionFNB
    }
}