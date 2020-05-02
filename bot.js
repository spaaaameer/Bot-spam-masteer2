const Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const prefix = "#";
const channelid = "706168295010861056";
const id = "706264064548012054";
const Sniper = [
  "7a7a",
  "zaza",
  "mama",
  "boomer",
  "sniper",
  "niceoooo",
  "mhmmmmmmm",
  "reeeeeeeeeeeeeeeeeeeeeeeetarded",
  "There was once a guy",
  "420",
  "69",
  "69420",
  "UOU",
  "uWu",
  "0w0",
  "owo",
  "sniper is gay",
  "sniper is lesbian",
  "there was once a gay",
  "snooper",
  "Sniperboomer",
  "join the godliest hentai clan High School Dxd Hero",
  "ok boomer",
  "Doc, I cant stop singing The Green, Green Grass of Home. That sounds like Tom Jones Syndrome.Is it common? Well, Its Not Unusual.",
  "Two cannibals are eating a clown. One says to the other: Does this taste funny to you?",
  "A man walks into a bar with a slab of asphalt under his arm and says: A beer please and one for the road.",
  "A dyslexic man walks into a bra.",
  "A woman has twins and gives them up for adoption. One of them goes to a family in Egypt and is named Ahmal. The other goes to a family in Spain; they name him Juan. Years later, Juan sends a picture of himself to his birth mother. Upon receiving the picture, she tells her husband that she wishes she also had a picture of Ahmal. Her husband responds, Theyre twins If youve seen Juan, youve seen Ahmal.",
  "A jumper cable walks into a bar. The bartender says, Ill serve you, but dont start anything.",
  "Two antennas met on a roof, fell in love and got married. The Ceremony wasnt much, but the reception was excellent.",
  "channel or panel",
  "s7s7sa",
  "ProBot Sucks",
  "ProBot is godlike",
  "subscribe to Ahmed or i will fuck your mama",
  "Sniper more like ggayber"
];

client.on("ready", () => {
  setTimeout(() => {
    console.log(`${client.user.username} 1`);
  }, 1000);
  setInterval(() => {
    client.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client2.on("ready", () => {
  setTimeout(() => {
    console.log(`${client2.user.username} 2`);
  }, 2000);
  setInterval(() => {
    client2.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client3.on("ready", () => {
  setTimeout(() => {
    console.log(`${client3.user.username} 3`);
  }, 3000);
  setInterval(() => {
    client3.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client4.on("ready", () => {
  setTimeout(() => {
    console.log(`${client4.user.username} 4`);
  }, 4000);
  setInterval(() => {
    client4.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client5.on("ready", () => {
  setTimeout(() => {
    console.log(`${client5.user.username} 5`);
  }, 5000);
  setInterval(() => {
    client5.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client6.on("ready", () => {
  setTimeout(() => {
    console.log(`${client6.user.username} 6`);
  }, 6000);
  setInterval(() => {
    client6.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client7.on("ready", () => {
  setTimeout(() => {
    console.log(`${client7.user.username} 7`);
  }, 7000);
  setInterval(() => {
    client7.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client8.on("ready", () => {
  setTimeout(() => {
    console.log(`${client8.user.username} 8`);
  }, 8000);
  setInterval(() => {
    client8.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client.on("ready", () => {
  setTimeout(() => {
    client.channels.get(channelid).send("#daily");
    setTimeout(() => {
      client2.channels.get(channelid).send("#daily");
    }, 3600 + 1600);
    setTimeout(() => {
      client3.channels.get(channelid).send("#daily");
    }, 3600 + 2600);
    setTimeout(() => {
      client4.channels.get(channelid).send("#daily");
    }, 3600 + 3600);
    setTimeout(() => {
      client5.channels.get(channelid).send("#daily");
    }, 3600 + 4600);
    setTimeout(() => {
      client6.channels.get(channelid).send("#daily");
    }, 3600 + 5600);
    setTimeout(() => {
      client7.channels.get(channelid).send("#daily");
    }, 3600 + 6600);
    setTimeout(() => {
      client8.channels.get(channelid).send("#daily");
    }, 3600 + 7600);
  }, 3600000 * 6);
});


client.on("message", msg => {
  if (msg.content.startsWith("1give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("1say")) {
      msg.channel.send(args);
    }
  }
});

client2.on("message", msg => {
  if (msg.content.startsWith("2give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("2say")) {
      msg.channel.send(args);
    }
  }
});

client3.on("message", msg => {
  if (msg.content.startsWith("3give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("3say")) {
      msg.channel.send(args);
    }
  }
});

client4.on("message", msg => {
  if (msg.content.startsWith("4give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("4say")) {
      msg.channel.send(args);
    }
  }
});

client5.on("message", msg => {
  if (msg.content.startsWith("5give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("5say")) {
      msg.channel.send(args);
    }
  }
});

client6.on("message", msg => {
  if (msg.content.startsWith("6give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("6say")) {
      msg.channel.send(args);
    }
  }
});

client7.on("message", msg => {
  if (msg.content.startsWith("7give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("7say")) {
      msg.channel.send(args);
    }
  }
});

client8.on("message", msg => {
  if (msg.content.startsWith("8give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("8say")) {
      msg.channel.send(args);
    }
  }
});




client.login(process.env.SECRET1);

client2.login(process.env.SECRET2);

client3.login(process.env.SECRET3);

client4.login(process.env.SECRET4);

client5.login(process.env.SECRET5);

client6.login(process.env.SECRET6);

client7.login(process.env.SECRET7);

client8.login(process.env.SECRET8);
