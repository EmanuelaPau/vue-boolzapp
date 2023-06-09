console.log('hello JS');
const { createApp } = Vue;

createApp({
    data() {

        return {
            // now: DateTime.local(),
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropDownMenu: false,
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropDownMenu: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropDownMenu: false,
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dropDownMenu: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            dropDownMenu: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropDownMenu: false,
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            dropDownMenu: false,
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            dropDownMenu: false,
                        }
                    ],
                },

                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            dropDownMenu: false,
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dropDownMenu: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            dropDownMenu: false,
                        }
                    ],
                }
            ],

            contactIndex: 0,
            // myMessages: contacts[contactIndex].messages
            receivedClasses: 'my_bg-color-lt-white',

            myNewMessage: "",

            search: "",

            // dropDownMenu: false,
        }
    },
    methods: {


        sendMessage() {
            myMessageObject = {
                // date: messageTime,
                message: this.myNewMessage,
                status: 'sent'
            };

            this.contacts[this.contactIndex].messages.push(myMessageObject);

            myReplyObject = {
                date: '10/01/2020 15:30:55',
                message: 'ok',
                status: 'received'
            };

            setTimeout(() => {
                this.contacts[this.contactIndex].messages.push(myReplyObject);
            }, 1000);

            this.myNewMessage = '';
        },

        searchLetters() {
            // let namesList = [];
            this.contacts.forEach((element) => {
                // namesList.push(element.name);
                if (!element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    element.visible = false;
                }
                else {
                    element.visible = true;
                }
            })
        },

        AddMessageData(dataToReturn) {
            if (this.contacts[this.contactIndex].messages.length < 1) {
                console.log('there is no message')
            } else {
                let myData = this.contacts[this.contactIndex].messages.at(-1).dataToReturn;
                return myData
            }
        }
        ,
        turnOnMenu(menu) {
            if (menu.dropDownMenu == false) {
                menu.dropDownMenu = true;
            } else {
                menu.dropDownMenu = false;
            }
            // console.log(menu.dropDownMenu);
        },

        deleteMessage(myMessage, messageIndex) {
            console.log('rip')
            if (this.contacts[this.contactIndex].messages.length < 1) {
                console.log('there are no more messages')
                this.contacts[this.contactIndex].visible = false
                this.contactIndex--;
            } else {
                this.contacts[this.contactIndex].messages.splice(messageIndex, 1)
            }
        }
    }
}).mount('#app') 