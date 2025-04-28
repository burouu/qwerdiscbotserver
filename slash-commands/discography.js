const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


// HARMONY FROM DISCORD

const Embed = new EmbedBuilder()
    .setColor('#E9A5C8')
    .setTitle('Harmony From Discord')
    .setImage('https://i.scdn.co/image/ab67616d0000b273351111222cac1ac5a566b24f')
    .setDescription(`1st Single Album\n\n**Release Date: October 18th, 2023**
        
**1 - [별의 하모니 (Harmony of Stars)](https://www.youtube.com/watch?v=On6Pm4M-dQQ)**
**2 - [Discord](https://www.youtube.com/watch?v=WGm2HmXeeRI)**
**3 - [Secret Diary](https://www.youtube.com/watch?v=WGm2HmXeeRI)**
**4 - Discord (Inst.)**

    `)
    .addFields(
        { name: 'Album Links', value: '[Spotify](https://open.spotify.com/intl-pt/album/0AmeepTU81c9ghVpJpacNc)\n[Apple Music](https://music.apple.com/album/1st-single-album-harmony-from-discord-ep/1711740153)\n[Youtube Music](https://music.youtube.com/playlist?list=OLAK5uy_n2INgTDglXi1A6HxbxywBRntPsFi82bVI)\n[Deezer](https://www.deezer.com/album/501747161)' }
    )

// EMBRANCING ME

const Embed2 = new EmbedBuilder()
    .setColor('#A01709')    
    .setTitle('Embracing me')
    .setImage('https://media.discordapp.net/attachments/1283990642183245875/1325245672743501834/qwerembracingme.png?ex=677b16b6&is=6779c536&hm=7e6ee5cd402f13a73d452f6a8e5d8c273f6db221b11a95c2738243220de81685&=&format=webp&quality=lossless&width=577&height=577')
    .setDescription(`1st OST\n\n**Release Date: November 8th, 2023**
        
**1 - [Embrancing Me](https://www.youtube.com/watch?v=zVyGw2j-t4g)**

    `)
    .addFields(
        { name: 'Song Link', value: '[Youtube](https://www.youtube.com/watch?v=zVyGw2j-t4g)'}
    )
    .setFooter(
        { text: 'QWER x DNFM' }
    )

// DISCORD (TAK REMIX)    

const Embed3 = new EmbedBuilder()
    .setColor('#7D52ED')
    .setTitle('Discord (TAK Remix)')
    .setImage('https://e-cdn-images.dzcdn.net/images/cover/c0d14cca214c847afca3377b86068b9a/500x500-000000-80-0-0.jpg')
    .setDescription(`1st Remix Single\n\n**Release Date: December 12th, 2023**

**1 - [Discord (TAK Remix)](https://www.youtube.com/watch?v=MZ5lkYhm6xQ&pp=ygUVUVdFUiBESVNDT1IgVEFLIFJFTUlY)**

    `)
    .addFields(
        { name: 'Album Links', value: '[Spotify](https://open.spotify.com/intl-pt/album/52wHoxgw9rL3uRO4nJvaXL)\n[Apple Music](https://music.apple.com/album/discord-tak-remix-single/1719744613)\n[Youtube Music](https://music.youtube.com/playlist?list=OLAK5uy_lziCN8_Ys1ABxF-pqZHOwYSsues_UdaOI)\n[Deezer](https://www.deezer.com/album/522825252)' }
    )

// SHINE ALL NIGHT    

const Embed4 = new EmbedBuilder()
    .setColor('#2D5471')
    .setImage('https://media.discordapp.net/attachments/1283990642183245875/1324979317440254063/qwerwasarwas.png?ex=677a1ea6&is=6778cd26&hm=964bbdd9c33b927ba7b0cf04605287c39a5554cfd8f87fbe559479a989321f17&=&format=webp&quality=lossless&width=577&height=577')
    .setTitle('Shine All Night')
    .setDescription(`2nd OST\n\n**Release Date: March 2nd, 2024**
        
**1 - [Shine All Night](https://www.youtube.com/watch?v=WErehcuzF_g)**

    `)
    .addFields(
        { name: 'Song Link', value: '[Youtube](https://www.youtube.com/watch?v=WErehcuzF_g)' }
    )
    .setFooter(
        { text: 'QWER x STARSEED' }
    )

// MANITO

const Embed5 = new EmbedBuilder()
    .setColor('#4B9BCE')
    .setImage('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/75/54/38/75543853-92c7-064c-fe26-2cbf5eecc6d8/cover_KM0019655_1.jpg/592x592bb.webp')
    .setTitle('MANITO')
    .setDescription(`1st Mini Album\n\n**Release Date: April 1st, 2024**

**1 - [고민중독 (T.B.H)](https://www.youtube.com/watch?si=naRp5vCaknl6kYa6&v=ImuWa3SJulY&feature=youtu.be)**
**2 - [SODA](https://www.youtube.com/watch?v=SKztjYndS_s&pp=ygUJUVdFUiBTb2Rh)**
**3 - [자유선언 (Free-Dumb)](https://www.youtube.com/watch?v=Tor2ElSVEAk&pp=ygUOUVdFUiBmcmVlIGR1bWI%3D)**
**4 - [지구정복 (G9JB)](https://www.youtube.com/watch?v=a0OkChjJWl8&pp=ygUERzlKQg%3D%3D)**
**5 - [대관람차 (Ferris Wheel)](https://www.youtube.com/watch?v=cmnJZFlKXUU&pp=ygUTcXdlciAoRmVycmlzIFdoZWVsKQ%3D%3D)**
**6 - [불꽃놀이 (Make Our Highlight)](https://www.youtube.com/watch?v=HBsU1GpsGKw&pp=ygUXcXdlciBtYWtlIG91ciBoaWdobGlnaHQ%3D)**
**7 - [마니또 (Manito)](https://www.youtube.com/watch?v=bjq3GHO_Cc0&pp=ygULcXdlciBtYW5pdG8%3D)**

    `)
    .addFields(
        { name: 'Album Links', value: '[Spotify](https://open.spotify.com/intl-pt/album/58749dw7F011CU9lRmX0MO)\n[Apple Music](https://music.apple.com/album/1st-mini-album-manito/1737366584)\n[Youtube Music](https://music.youtube.com/playlist?list=OLAK5uy_nwHZWrd9VrRPEL7rLfT3iA8DreUqZ6bEY)\n[Deezer](https://www.deezer.com/album/567597791)' }
    )

// ANIMA POWER    

const Embed6 = new EmbedBuilder()
    .setColor('#AC71FD')
    .setImage('https://t2.genius.com/unsafe/378x378/https%3A%2F%2Fimages.genius.com%2F61307433526f41798597edbd660dc7ad.1000x563x1.jpg')
    .setTitle('Anima Power')
    .setDescription(`3rd OST\n\n**Release Date: July 12th, 2024**
        
**1 - [Anima Power](https://www.youtube.com/watch?v=BLnkLdzlCx4)**

    `)
    .addFields(
        { name: 'Song Link', value: '[Youtube](https://www.youtube.com/watch?v=BLnkLdzlCx4)' }
    )
    .setFooter(
        { text: 'QWER x League of Legends' }
    )
    
// FAKE IDOL    

const Embed7 = new EmbedBuilder()
    .setColor('#DA223E')
    .setImage('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d0/a8/51/d0a851ab-061e-115c-7264-b198fa7f2e19/cover_KM0020310_1.jpg/592x592bb.webp')
    .setTitle('FAKE IDOL')
    .setDescription(`1st Single\n\n**Release Date: September 2nd, 2024**

**1 - [가짜 아이돌 (FAKE IDOL)](https://youtu.be/JFGRPgYeu38?si=AUJ3Gj19qfe1sKGd)**

    `)
    .addFields(
        { name: 'Album Links', value: '[Spotify](https://open.spotify.com/intl-pt/album/6it990sp2jw29IlDjFpO26)\n[Apple Music](https://music.apple.com/album/fake-idol-single/1765233146)\n[Youtube Music](https://music.youtube.com/playlist?list=OLAK5uy_mpfldPieMZBvmMihh_3IgzY0_6eZ1mBg8)\n[Deezer](https://www.deezer.com/album/637466871)' }
    )

// ALGORITHM'S BLOSSOM

const Embed8 = new EmbedBuilder()
    .setColor('#F9DF74')
    .setImage('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/15/00/62/150062e8-fd58-5dc2-bfea-f0e502e0957a/cover_KM0020310_1.jpg/592x592bb.webp')
    .setTitle('Algorithm’s Blossom ')
    .setDescription(`2nd Mini Album\n\n**Release Date: September 23th, 2024**

**1 - [INTRO](https://www.youtube.com/watch?v=Lb3mQdm-UHs&pp=ygUKcXdlciBpbnRybw%3D%3D)**
**2 - [가짜 아이돌 (FAKE IDOL)](https://www.youtube.com/watch?si=AUJ3Gj19qfe1sKGd&v=JFGRPgYeu38&feature=youtu.be)**
**3 - [내 이름 맑음 (My Name is Malguem)](https://www.youtube.com/watch?si=Z4MGc4HJNQ_5xOuX&v=AlirzLFEHUI&feature=youtu.be)**
**4 - [사랑하자 (Let’s Love)](https://www.youtube.com/watch?v=91Mn22CFvCE&pp=ygUOcXdlciBsZXRzIGxvdmU%3D)**
**5 - [달리기 (run! run! run!)](https://www.youtube.com/watch?v=txAakIbx4lA&pp=ygUQcXdlciBydW4gcnVuIHJ1bg%3D%3D)**
**6 - [안녕, 나의 슬픔 (Goodbye My Sadness)](https://www.youtube.com/watch?v=5riuR07c8Dc&pp=ygUXcXdlciBnb29kYnllIG15IHNhZG5lc3M%3D)**
**7 - [메아리 (REBOUND)](https://www.youtube.com/watch?v=5kf41s91RE8&pp=ygUT66mU7JWE66asIChSRUJPVU5EKQ%3D%3D)**
**8 - [OUTRO](https://www.youtube.com/watch?v=1xEYv_fd-II&pp=ygUKUVdFUiBPVVRSTw%3D%3D)**

    `)
    .addFields(
        { name: 'Album Links', value: '[Spotify](https://open.spotify.com/intl-pt/album/4i0rZXe1lgKDzJ8LkueifT)\n[Apple Music](https://music.apple.com/album/2nd-mini-album-algorithms-blossom/1769572152)\n[Youtube Music](https://music.youtube.com/playlist?list=OLAK5uy_kK6vIP_WyJy6VduG7U7MH4nqpqbATKs2A)\n[Deezer](https://www.deezer.com/album/646809201)' }
    )

// HALFTIME

const Embed9 = new EmbedBuilder()
    .setColor('#D7EFF6')
    .setImage('https://media.discordapp.net/attachments/1283990642183245875/1325251498203938907/fqwfafwafasfwasda2.png?ex=677b1c23&is=6779caa3&hm=d0cb0fe51d0db86ae00b38dac0680efd1fa137d4204d17edb7237703ef0112f7&=&format=webp&quality=lossless&width=577&height=577')
    .setTitle('HalfTime')
    .setDescription(`4th OST\n\n**Release Date: November 20th, 2024**

**1 - [HalfTime](https://www.youtube.com/watch?v=CPHjgfDNRCM)**

    `)
    .addFields(
        { name: 'Song Link', value: '[Youtube](https://www.youtube.com/watch?v=CPHjgfDNRCM)'}
    )
    .setFooter(
        { text: 'QWER x EA Sports FC'}
    )

const Embed10 = new EmbedBuilder()
    .setColor('#05B5CC')
    .setImage('https://cdn.discordapp.com/attachments/1283990642183245875/1346333460603736075/qwer2.png?ex=67c7ce3e&is=67c67cbe&hm=f0971b7adb8f6b92fe46dfba8f34658c38ec972be27aef835865a2be12eeb0e0&')
    .setTitle('Youth Pledge')
    .setDescription(`2nd Single\n\n**Release Date: February 28th, 2025**

**1 - [Youth Pledge](https://www.youtube.com/watch?v=CGvqj7bzCVY)**

    `)
    .addFields(
        { name: 'Song Link', value: '[Youtube](https://www.youtube.com/watch?v=CGvqj7bzCVY)'}
    )
    
module.exports = {
    data: new SlashCommandBuilder()
        .setName("discography")
        .setDescription("discography"),

    async execute(interaction) {
        await interaction.reply({ embeds: [Embed, Embed2, Embed3, Embed4, Embed5, Embed6, Embed7, Embed8, Embed9, Embed10] })
    }
}