module.exports = {
    name: 'clean',
    description: 'Borra mensajes en un canal. Hasta 100 dentro de los últimos 14 días.',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply(`"${amount}" no es un número.`);
        } else if (amount < 2 || amount > 100) {
            return message.reply('Necesito un valor mayor a 2 y menor a 100.');
        } else {
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('Ha habido un error, por favor inténtalo de nuevo.');
            });
            message.channel.send(`Se borraron ${amount} mensajes en el canal de ${message.channel}`);
        };
    },
};