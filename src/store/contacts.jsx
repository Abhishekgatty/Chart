import uuid4 from "uuid4";
const data = [
    {
        id: 'uid01',
        name:'Jasmine Thomp',
        handle: 'thomp_jasmine',
        mail: 'thomp@gmail.com',
        avatar: '/images/avatar/1.jpg',
        cover: '/images/cover/1.jpg',
        status: 'active',
        selected: false,
        last:'45 min',
        contacts:['uid02','uid03','uid04','uid05','uid06', 'uid07', 'uid08', 'uid09', 'uid10', 'uid11', ],
        bio:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
        gender:"female",
        dob:"June 26",
        phone:"+98 257 6985",
        city:["Paris", "France"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-1.jpg",
                src:"/images/gallery/contact/1.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-2.jpg",
                src:"/images/gallery/contact/2.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-3.jpg",
                src:"/images/gallery/contact/3.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-6.jpg",
                src:"/images/gallery/contact/6.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-15.jpg",
                src:"/images/gallery/contact/15.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-16.jpg",
                src:"/images/gallery/contact/16.jpg",
                height:"1200", width:"1000"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'link',
                        content:{
                            link: 'https://www.envato.com/atomic-power-plant-engine/',
                            title: 'Digital Marketing Guide line for dummies',
                            thumb:'/images/avatar/4.jpg',
                        },
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I need help.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'file',
                        content:[
                            {
                                ext:'docx',
                                size: '24.65 MB',
                                name:'Konstantin_cv',
                            }
                        ]
                    }
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'image',
                                src: '/images/gallery/chat/1.jpg',
                                thumb: '/images/gallery/chat/thumb-1.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/2.jpg',
                                thumb: '/images/gallery/chat/thumb-2.jpg',
                                height:"1080",
                                width:"1620"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/3.jpg',
                                thumb: '/images/gallery/chat/thumb-3.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/4.jpg',
                                thumb: '/images/gallery/chat/thumb-4.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/5.jpg',
                                thumb: '/images/gallery/chat/thumb-5.jpg',
                                height:"1620",
                                width:"1080"
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I hope these article helps.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'video',
                                src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                poster: '/images/gallery/video/hr-6.jpg'
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                new_date: 'May 10, 2022, 11:14 AM',
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'link',
                        content: {
                            link: 'https://www.envato.com/atomic-power-plant-engine/',
                        },
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I hope these article helps.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Do you know which App or feature it will require to set up.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                new_date: 'Aug 22, 2022, 3:05 PM',
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'call',
                        call: {
                            type: 'audio',
                            result: 'success'
                        },
                        time: '3:29 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'call',
                        call: {
                            type: 'audio',
                            result: 'missed'
                        },
                        time: '3:29 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'call',
                        call: {
                            type: 'video',
                            result: 'success'
                        },
                        time: '3:29 PM'
                    },
                ],
            },
        ],
    },
    {
        id: 'uid02',
        name:'Konstantin Frank',
        handle: 'konstatin_nk',
        mail: 'konstatin@gmail.com',
        avatar: '/images/avatar/2.jpg',
        cover: '/images/cover/2.jpg',
        selected: false,
        status: 'active',
        last:'1 days',
        contacts:['uid03','uid05','uid04','uid07','uid08', 'uid10',],
        bio:"I am Konstantin Frank, a Ukrainian-American winemaker who pioneered vinifera grape growing in New York's Finger Lakes region, founding Dr. Konstantin Frank Wine Cellars in 1962 against all odds.",
        gender:"female",
        dob:"May 19",
        phone:"+98 257 6985",
        city:["London"],
        language:["English"],
        varified: true,
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-15.jpg",
                src:"/images/gallery/contact/15.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-16.jpg",
                src:"/images/gallery/contact/16.jpg",
                height:"1200", width:"1000"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey! Hows it going?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'file',
                        content:[
                            {
                                ext:'docx',
                                size: '24.65 MB',
                                name:'Konstantin_cv',
                            }
                        ]
                    }
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey there!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Not too bad, just hanging out at home.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yourself?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I am doing well, thanks.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I was wondering if you wanted to get together later? ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Maybe grab some dinner or something? I am kind of bored just sitting around the house.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Dinner sounds good to me! What did you have in mind?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'image',
                                src: '/images/gallery/chat/6.jpg',
                                thumb: '/images/gallery/chat/thumb-6.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/7.jpg',
                                thumb: '/images/gallery/chat/thumb-7.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'video',
                                src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                poster: '/images/gallery/video/hr-6.jpg'
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Well, I was thinking we could try that new Mexican place downtown that everyone has been raving about. Their tacos are supposed to be amazing.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'But Im open to other ideas too if you had something else in mind!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid03',
        name:'Mathias Devos',
        handle: 'mathias_devos',
        mail: 'mathias@gmail.com',
        avatar: '/images/avatar/3.jpg',
        cover: '/images/cover/3.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid10','uid11','uid04','uid06','uid07','uid08'],
        bio:"I am Mathias Devos, a passionate entrepreneur who founded a successful tech startup that revolutionized the way people interact with artificial intelligence.",
        gender:"female",
        dob:"January 08",
        phone:"+98 257 6985",
        city:["UAE", "Texas"],
        language:["English", "Arabic"],
        unread:true,

        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-6.jpg",
                src:"/images/gallery/contact/6.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
        ],
        chats: [
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey, hows it going?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Not too bad, just trying to make it through this week. Work has been crazy.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Tell me about it',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I feel like Ive been living at the office lately.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'No kidding.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'We seriously need to take a break and do something fun this weekend.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Im down for that! What did you have in mind?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I feel like Ive been living at the office lately.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Maybe we could go for a hike or just hang out at the park?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'link',
                        content:{
                            link: 'https://www.envato.com/atomic-power-plant-engine/',
                        },
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid04',
        name:'Marie George',
        handle: 'marie_george',
        mail: 'marie@gmail.com',
        avatar: '/images/avatar/4.jpg',
        cover: '/images/cover/4.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid11','uid09','uid07','uid01','uid03'],
        bio:"Marie George, a renowned artist whose vibrant abstract paintings have captured the essence of human emotion and pushed the boundaries of modern art.",
        gender:"male",
        dob:"December 12",
        phone:"+98 257 6985",
        city:["California"],
        language:["English"],
        gallery:[
            
            {
                thumb:"/images/gallery/contact/thumb-3.jpg",
                src:"/images/gallery/contact/3.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yo, did you finish that paper for Prof. Smiths class yet?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Not yet, man. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Im struggling to get through all the research he wanted us to include.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Same here. This has to be the toughest assignment we have had all semester.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Tell me about it ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I was up until like 3 am last night trying to make sense of all these journal articles.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'No way',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I finally crashed around 2.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Were going to be zombies in class tomorrow.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'image',
                                src: '/images/gallery/chat/8.jpg',
                                thumb: '/images/gallery/chat/thumb-8.jpg',
                                height:"1620",
                                width:"1620"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/7.jpg',
                                thumb: '/images/gallery/chat/thumb-7.jpg',
                                height:"1620",
                                width:"1080"
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'For real. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Maybe we can sneak in some energy drinks before the lecture.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
        ],
    },
    {
        id: 'uid05',
        name:'Phillip Burke',
        handle: 'phillip_burke',
        mail: 'phillip@gmail.com',
        avatar: '/images/avatar/5.jpg',
        cover: '/images/cover/5.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid12','uid13','uid14','uid15','uid16','uid03'],
        bio:"A trailblazing environmental scientist whose groundbreaking research on sustainable energy solutions has paved the way for a greener future.",
        gender:"male",
        dob:"November 11",
        phone:"+98 257 6985",
        city:["Portugal"],
        language:["Portoghese"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-2.jpg",
                src:"/images/gallery/contact/2.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-3.jpg",
                src:"/images/gallery/contact/3.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
        ],
        chats: [
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hay, Seriously. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Lets plan to meet there around 7 after we grab dinner?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    }
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Sounds like a plan.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Ill see if I can make any more progress before then.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Same. Oh man, I cant wait for this semester to be over.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Youre telling me. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Just a few more weeks though, we can get through this!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid06',
        name:'Romy Schulte',
        handle: 'romy_schulte',
        mail: 'romy@gmail.com',
        avatar: '/images/avatar/6.jpg',
        cover: '/images/cover/6.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid11','uid17','uid06','uid01','uid02','uid12','uid13','uid14','uid16'],
        bio:"Celebrated chef whose innovative fusion cuisine has delighted palates around the world, blending flavors from diverse cultures in a harmonious symphony.",
        gender:"male",
        dob:"May 29",
        phone:"+98 257 6985",
        city:["Los Angeles"],
        language:["English"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-6.jpg",
                src:"/images/gallery/contact/6.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-15.jpg",
                src:"/images/gallery/contact/15.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-16.jpg",
                src:"/images/gallery/contact/16.jpg",
                height:"1200", width:"1000"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey son,',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'how was school today?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'It was okay, I guess.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'We had a math test that was pretty hard.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Im sure you did your best. Math can be challenging sometimes.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yeah, I studied a lot but there were still some tricky problems.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: ' I am not sure how well I did.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Well, the important thing is that you put in the effort to prepare. Thats what counts.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Thats what counts.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I know, but I still want to get good grades.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'video',
                                src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                poster: '/images/gallery/video/hr-6.jpg'
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid07',
        name:'Frances Arnold',
        handle: 'frances_arnold',
        mail: 'frances@gmail.com',
        avatar: '/images/avatar/7.jpg',
        cover: '/images/cover/7.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid19','uid18','uid17','uid16','uid15','uid14','uid13','uid12','uid11','uid10','uid09','uid08'],
        bio:"Pioneering biochemical engineer whose directed evolution methods for modifying enzymes revolutionized protein engineering and earned me the 2018 Nobel Prize in Chemistry.",
        gender:"female",
        dob:"March 14",
        phone:"+98 257 6985",
        city:["New York"],
        language:["English"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-15.jpg",
                src:"/images/gallery/contact/15.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-16.jpg",
                src:"/images/gallery/contact/16.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-6.jpg",
                src:"/images/gallery/contact/6.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
        ],
        chats: [
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey bro,',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Can I borrow your laptop for a bit?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I need to finish this essay for English class.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Again? Didnt you just use it yesterday?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yeah, but then I spilled my coffee all over my computer this morning.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Please? ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I promise Ill be really careful with yours.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'sighs Alright, fine',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'But just for an hour or two',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I need it back before my game tonight.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Dont worry, Ill be quick! Youre the best.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yeah, yeah. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Just try not to get any food or drinks near it this time.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'image',
                                src: '/images/gallery/chat/4.jpg',
                                thumb: '/images/gallery/chat/thumb-4.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/6.jpg',
                                thumb: '/images/gallery/chat/thumb-6.jpg',
                                height:"1620",
                                width:"1080"
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Scouts honor! Thanks a million.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid08',
        name:'Nina Dubois',
        handle: 'nina_dubois',
        mail: 'nina@gmail.com',
        avatar: '/images/avatar/8.jpg',
        cover: '/images/cover/8.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid17','uid13','uid02','uid12','uid11'],
        bio:"Nina Dubois, a trailblazing investigative journalist whose fearless reporting has exposed corruption at the highest levels and given a voice to the voiceless.",
        gender:"male",
        dob:"April 04",
        phone:"+98 257 6985",
        city:["Alabama"],
        language:["English", "French"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-3.jpg",
                src:"/images/gallery/contact/3.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-1.jpg",
                src:"/images/gallery/contact/1.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-2.jpg",
                src:"/images/gallery/contact/2.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hello, this is Jamie from JV Clothing Company.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I wanted to follow up about our previous order for 500 units of your cotton t-shirts in assorted sizes.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hi Jamie,',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'This is Alex from Apparel Suppliers Inc. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Let me pull up that order here...ah yes, we have that shipment ready to go.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Excellent.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I also wanted to inquire about possibly increasing the order quantity',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Our new marketing campaign is going really well and were seeing much higher demand than projected.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Thats great news! ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'We should be able to accommodate an increased order. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'How many additional units were you looking to add?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'link',
                        content:{
                            link: 'https://www.envato.com/atomic-power-plant-engine/',
                            title: 'Digital Marketing Guide line for dummies',
                            thumb:'/images/avatar/4.jpg',
                        },
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid09',
        name:'Albert Henderson',
        handle: 'albert_henderson',
        mail: 'albert@gmail.com',
        avatar: '/images/avatar/9.jpg',
        cover: '/images/cover/9.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid16','uid15','uid14','uid11','uid04'],
        bio:"Visionary architect whose sustainable and innovative designs have redefined urban landscapes, blending form and function in harmony with the natural environment.",
        gender:"female",
        dob:"July 18",
        phone:"+98 257 6985",
        city:["Paris"],
        language:["English", "French"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-15.jpg",
                src:"/images/gallery/contact/15.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-16.jpg",
                src:"/images/gallery/contact/16.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-1.jpg",
                src:"/images/gallery/contact/1.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-2.jpg",
                src:"/images/gallery/contact/2.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-3.jpg",
                src:"/images/gallery/contact/3.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey babe, how was your day?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hi! It was okay, just really busy at work.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'There were so many meetings today',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I felt like I was going from one to the next all day long.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'image',
                                src: '/images/gallery/chat/3.jpg',
                                thumb: '/images/gallery/chat/thumb-3.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/4.jpg',
                                thumb: '/images/gallery/chat/thumb-4.jpg',
                                height:"1620",
                                width:"1080"
                            },
                            {
                                type:'image',
                                src: '/images/gallery/chat/5.jpg',
                                thumb: '/images/gallery/chat/thumb-5.jpg',
                                height:"1620",
                                width:"1080"
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Ugh, I know the feeling',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Those back-to-back meetings are the worst.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'At least the day is over now though!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yeah, thank goodness.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Im so ready to just relax tonight. Any fun plans?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'video',
                                src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                poster: '/images/gallery/video/hr-6.jpg'
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Actually, I was thinking we could go grab an early dinner?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Theres a new Mexican place that just opened up downtown that Ive been wanting to try.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Ooooh that sounds amazing!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I could definitely go for some chips, salsa, and a margarita about now.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid10',
        name:'Maxim Werner',
        handle: 'maxim_werner',
        mail: 'maxim@gmail.com',
        avatar: '/images/avatar/10.jpg',
        cover: '/images/cover/10.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid12','uid13','uid09','uid15','uid16'],
        bio:"Renowned astrophysicist whose groundbreaking discoveries have expanded our understanding of the cosmos and challenged long-held theories about the origins of the universe.",
        gender:"male",
        dob:"March 23",
        phone:"+98 257 6985",
        city:["Dubai"],
        language:["English"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-6.jpg",
                src:"/images/gallery/contact/6.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-11.jpg",
                src:"/images/gallery/contact/11.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-15.jpg",
                src:"/images/gallery/contact/15.jpg",
                height:"1200", width:"800"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Omg, hi!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Im such a huge fan of your travel vlogs!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Aw, thank you so much! ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Im always excited to meet viewers.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Your videos make me want to just quit my job and start traveling the world.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'How do you decide where to go next?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'video',
                                src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                poster: '/images/gallery/video/hr-4.jpg'
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I try to mix it up between places Ive been dying to visit and destinations my followers recommend. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'But I also look for unique cultural experiences or beautiful nature spots that will make great vlog content.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'That makes total sense.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Your footage from Bali was just breathtaking!',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'How did you find that hidden waterfall?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'media',
                        content: [
                            {
                                type:'video',
                                src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                poster: '/images/gallery/video/hr-1.jpg'
                            },
                        ],
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'A lot of research ahead of time, but I also try to connect with locals whenever I can. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'They always know the off-the-beaten-path gems.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Smart! And how do you handle the logistics of constantly being on the move? ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'But I also look for unique cultural experiences or beautiful nature spots that will make great vlog content',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid11',
        name:'Nolan Etienne',
        handle: 'nolan_etienne',
        mail: 'nolan@gmail.com',
        avatar: '/images/avatar/11.jpg',
        cover: '/images/cover/11.jpg',
        selected: false,
        status: 'active',
        last:'2 days',
        contacts:['uid08','uid09','uid02','uid11','uid12'],
        bio:"Celebrated French chef whose innovative farm-to-table cuisine has revolutionized the culinary world, celebrating local and seasonal ingredients with creativity and passion.",
        gender:"female",
        dob:"August 17",
        phone:"+98 257 6985",
        city:["Paris"],
        language:["French"],
        gallery:[
            {
                thumb:"/images/gallery/contact/thumb-3.jpg",
                src:"/images/gallery/contact/3.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-4.jpg",
                src:"/images/gallery/contact/4.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-5.jpg",
                src:"/images/gallery/contact/5.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-6.jpg",
                src:"/images/gallery/contact/6.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-7.jpg",
                src:"/images/gallery/contact/7.jpg",
                height:"1200", width:"800"
            },
            {
                thumb:"/images/gallery/contact/thumb-8.jpg",
                src:"/images/gallery/contact/8.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-9.jpg",
                src:"/images/gallery/contact/9.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-10.jpg",
                src:"/images/gallery/contact/10.jpg",
                height:"1200", width:"1000"
            },
            {
                thumb:"/images/gallery/contact/thumb-12.jpg",
                src:"/images/gallery/contact/12.jpg",
                height:"1200", width:"900"
            },
            {
                thumb:"/images/gallery/contact/thumb-13.jpg",
                src:"/images/gallery/contact/13.jpg",
                height:"1200", width:"1600"
            },
            {
                thumb:"/images/gallery/contact/thumb-14.jpg",
                src:"/images/gallery/contact/14.jpg",
                height:"1200", width:"1000"
            },
        ],
        chats: [
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Hey, did you catch the homework assignment for Mrs. Thomas class? ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I must have zoned out when she gave it.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Yeah, Ive got it written down. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'We have to read chapters 10-12 and answer the discussion questions at the end.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Ugh, those discussion questions are always so tedious. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I hate trying to come up with insightful responses.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Tell me about it.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'But at least this reading assignment doesnt seem too bad. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'The last book she assigned was such a slog.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'So true. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: ' Hey, did you end up joining that new club I mentioned last week?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'The first meeting is tomorrow after school.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'incoming',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'You know, I forgot all about it! What was it for again?',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
            {
                direction: 'outgoing',
                messages: [
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'Its the photography club. ',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'They have got darkroom access and everything.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                    {
                        id: uuid4(),
                        type: 'text',
                        content: 'I thought it could be a fun creative outlet.',
                        time: 'Aug 22, 2022, 3:05 PM'
                    },
                ]
            },
        ],
    },
    {
        id: 'uid12',
        name:'Martha Barnett',
        handle: 'martha_barnett',
        mail: 'martha@gmail.com',
        avatar: '/images/avatar/12.jpg',
        cover: '/images/cover/2.jpg',
    },
    {
        id: 'uid13',
        name:'Mark Mitchell',
        handle: 'mark_mitchell',
        mail: 'mark@gmail.com',
        avatar: '/images/avatar/13.jpg',
        cover: '/images/cover/3.jpg',
    },
    {
        id: 'uid14',
        name:'Julie Bouvier',
        handle: 'julie_bouvier',
        mail: 'julie@gmail.com',
        avatar: '/images/avatar/14.jpg',
        cover: '/images/cover/4.jpg',
    },
    {
        id: 'uid15',
        name:'Maelys Moulin',
        handle: 'maelys_moulin',
        mail: 'maelys@gmail.com',
        avatar: '/images/avatar/15.jpg',
        cover: '/images/cover/5.jpg',
    },
    {
        id: 'uid16',
        name:'Eva Aubry',
        handle: 'eva_aubry',
        mail: 'eva@gmail.com',
        avatar: '/images/avatar/16.jpg',
        cover: '/images/cover/6.jpg',
    },
    {
        id: 'uid17',
        name:'Mateo Thomas',
        handle: 'mateo_thomas',
        mail: 'mateo@gmail.com',
        avatar: '/images/avatar/17.jpg',
        cover: '/images/cover/7.jpg',
    },
    {
        id: 'uid18',
        name:'Michelle Strong',
        handle: 'michelle_strong',
        mail: 'michelle@gmail.com',
        avatar: '/images/avatar/18.jpg',
        cover: '/images/cover/8.jpg',
    },
    {
        id: 'uid19',
        name:'Manon Caron',
        handle: 'manon_caron',
        mail: 'manon@gmail.com',
        avatar: '/images/avatar/19.jpg',
        cover: '/images/cover/9.jpg',
    },
]

export default data;