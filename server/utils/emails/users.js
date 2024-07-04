const userOne_mail_slurp = {
  host: "mxslurp.click",
  port: 2525,
  secure: false,
  auth: {
    user: "22b767dc-0ee1-4792-ae28-4328e4b49cd0@mailslurp.net",
    pass: process.env.M_S_PASS,
  },
};

const userOne_gmail = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "info.novalinkin@gmail.com",
    pass: process.env.M_PASS,
  },
};

const userTwo_gmail = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "believeosawaru2@gmail.com",
    pass: process.env.U_II_M_PASS,
  },
};

export { userOne_gmail, userOne_mail_slurp, userTwo_gmail };
