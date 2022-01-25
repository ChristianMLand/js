const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Explains the mechanics of the Squirdle game'),
    async execute(interaction) {
        interaction.reply({
            ephemeral: true,
            embeds: [{
                "type": "rich",
                "title": `Help`,
                "description": `**Commands:**\n\n*Terms that have a ? at the end are optional (don't actually type the ?)\n\n\`/play genStart? genStop? \` Starts a new game of Squirdle for a range of generations if given, defaulting to all gens\n\n\`/info pokemon\` Displays detailed info for a specific Pokemon\n\n\`/search gen? type1? type2? height? weight?\` Displays a list of Pokemon that match the given parameters\n\n**Emoji Key:**\n\n🟩 : Correct\n🟥 : Incorrect\n🟨 : Wrong Order\n🔼 : Too Low\n🔽 : Too High\n\n**How to Play:**\n\n1) Start a new game with the \`/play\` slash command\n\n2)  Open the thread automatically generated by the bot\n\n3) Send a message in the thread for the name of the Pokemon you guessed\n\n4) SquirdleBot will then reply to you with some emoji hints for how close you are in the following order: generation/dex number, type1, type2, height, weight\n\n5) Keep guessing until you get the right answer! \n\n\n`,
                "color": 0x09a210
            }]
        });
    }
};