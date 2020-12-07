import sgMail from '@sendgrid/mail'
import mailTemplate from './sendMailTemplate'
import env from '../config/environment'

export default function sendMail (key, username, groupName) {
  sgMail.setApiKey(env.SENDGRID_API_KEY)

  const msg = {
    to: 'toto@gmail.com',
    from: 'he201718@students.ephec.be',
    subject: 'Group Invitation',
    html: mailTemplate
      .replace('XXXusernameXXX', `${username}`)
      .replace('XXXusernameXXX', `${username}`)
      .replace('XXXgroupXXX', `${groupName}`)
      .replace('link@link1',
                    `https://kotsapp.herokuapp.com/group/invitation/${key}`)
      .replace('link@link2',
                    `https://kotsapp.herokuapp.com/group/invitation/${key}`)
      .replace('link@link3',
                    `https://kotsapp.herokuapp.com/group/invitation/${key}`)
  };

  (async () => {
    try {
      await sgMail.send(msg)
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })()
}
