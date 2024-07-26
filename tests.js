const { ethers } = require('ethers');

// Параметры для подключения к сети
const provider = new ethers.providers.JsonRpcProvider('https://arbitrum.llamarpc.com');

async function main() {
    try {
        // Ваша подписанная транзакция
        const signedTransaction = "0xe120c4ed29cf85835dfc02f9facb8ae22374b0058b2b1dcb387ce18d2d8809324be02b09c7197d0daa03905646f79dbdc3cf04836b9f0e90858453e7b2d872e21b";
        const parsedTx = ethers.utils.parseTransaction(signedTransaction);
        console.log('Parsed Transaction:', parsedTx);
        // Отправляем подписанную транзакцию в сеть
        //const txResponse = await provider.sendTransaction(signedTransaction);
        //console.log('Отправленная транзакция:', txResponse.hash);

        //// Ожидаем подтверждения транзакции
        //const receipt = await txResponse.wait();
        //console.log('Транзакция подтверждена в блоке:', receipt.blockNumber);
    } catch (error) {
        console.error('Ошибка при отправке транзакции:', error);

        // Дополнительная информация об ошибке
        if (error.transaction) {
            console.error('Данные транзакции:', error.transaction);
        }
        if (error.reason) {
            console.error('Причина ошибки:', error.reason);
        }
    }
}

main().catch(console.error);