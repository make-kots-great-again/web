const mailTemplate = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <title>Please confirm your e-mail</title>\n' +
    '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
    '    <style type="text/css">\n' +
    '        body, table, td, a {\n' +
    '            -webkit-text-size-adjust: 100%;\n' +
    '            -ms-text-size-adjust: 100%;\n' +
    '        }\n' +
    '\n' +
    '        table, td {\n' +
    '            mso-table-lspace: 0pt;\n' +
    '            mso-table-rspace: 0pt;\n' +
    '        }\n' +
    '\n' +
    '        img {\n' +
    '            -ms-interpolation-mode: bicubic;\n' +
    '        }\n' +
    '\n' +
    '        img {\n' +
    '            border: 0;\n' +
    '            height: auto;\n' +
    '            line-height: 100%;\n' +
    '            outline: none;\n' +
    '            text-decoration: none;\n' +
    '        }\n' +
    '\n' +
    '        table {\n' +
    '            border-collapse: collapse !important;\n' +
    '        }\n' +
    '\n' +
    '        body {\n' +
    '            height: 100% !important;\n' +
    '            margin: 0 !important;\n' +
    '            padding: 0 !important;\n' +
    '            width: 100% !important;\n' +
    '        }\n' +
    '\n' +
    '        a[x-apple-data-detectors] {\n' +
    '            color: inherit !important;\n' +
    '            text-decoration: none !important;\n' +
    '            font-size: inherit !important;\n' +
    '            font-family: inherit !important;\n' +
    '            font-weight: inherit !important;\n' +
    '            line-height: inherit !important;\n' +
    '        }\n' +
    '\n' +
    '        a {\n' +
    '            color: #00bc87;\n' +
    '            text-decoration: underline;\n' +
    '        }\n' +
    '\n' +
    '        * img[tabindex=\n' +
    '\n' +
    '\n' +
    '\n' +
    '        0\n' +
    '        ]\n' +
    '        + div {\n' +
    '            display: none !important;\n' +
    '        }\n' +
    '\n' +
    '        @media screen and (max-width: 350px) {\n' +
    '            h1 {\n' +
    '                font-size: 24px !important;\n' +
    '                line-height: 24px !important;\n' +
    '            }\n' +
    '        }\n' +
    '\n' +
    '        div[style*=margin:  16  px  0  ;  ]\n' +
    '        {\n' +
    '            margin: 0 !important\n' +
    '        ;\n' +
    '        }\n' +
    '        @media screen and (min-width: 360px) {\n' +
    '            .headingMobile {\n' +
    '                font-size: 40px !important;\n' +
    '            }\n' +
    '\n' +
    '            .headingMobileSmall {\n' +
    '                font-size: 28px !important;\n' +
    '            }\n' +
    '        }\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body bgcolor="#ffffff" style="background-color: #ffffff; margin: 0 !important; padding: 0 !important;">\n' +
    '<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">\n' +
    '    - to finish signing up, you just need to confirm that we got your e-mail right within 48 hours. To confirm please\n' +
    '    click the VERIFY button.\n' +
    '</div>\n' +
    '<center>\n' +
    '    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" valign="top">\n' +
    '        <tbody>\n' +
    '        <tr>\n' +
    '            <td>\n' +
    '                <table border="0" cellpadding="0" cellspacing="0" align="center" valign="top" bgcolor="#ffffff"\n' +
    '                       style="padding: 0 20px !important;max-width: 500px;width: 90%;">\n' +
    '                    <tbody>\n' +
    '                    <tr>\n' +
    '                        <td bgcolor="#ffffff" align="center" style="padding: 10px 0 0px 0;"><!--[if (gte mso 9)|(IE)]>\n' +
    '                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="350">\n' +
    '                                <tr>\n' +
    '                                    <td align="center" valign="top" width="350">\n' +
    '                            <![endif]-->\n' +
    '                            <table border="0" cellpadding="0" cellspacing="0" width="100%"\n' +
    '                                   style="max-width: 500px;border-bottom: 1px solid #e4e4e4 ;">\n' +
    '                                <tbody>\n' +
    '                                <tr>\n' +
    '                                    <td bgcolor="#ffffff" align="left" valign="middle"\n' +
    '                                        style="padding: 0px; color: #111111; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 62px;padding:0 0 15px 0;">\n' +
    '                                        <a href="https://kotsapp.herokuapp.com" target="_blank">\n' +
    '                                            <img width="20" height="30" alt="logo"\n' +
    '                                                 src="https://raw.githubusercontent.com/make-kots-great-again/web/sprint-3/server-side/helpers/favicon.ico"></a>\n' +
    '                                    </td>\n' +
    '                                    <td bgcolor="#ffffff" align="right" valign="middle"\n' +
    '                                        style="padding: 0px; color: #111111; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;padding:0 0 15px 0;">\n' +
    '                                        <a href="https://kotsapp.herokuapp.com" target="_blank"\n' +
    '                                           style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;color: #797979;font-size: 12px;font-weight:400;-webkit-font-smoothing:antialiased;text-decoration: none;">\n' +
    '                                            Kots App</a></td>\n' +
    '                                </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                            <!--[if (gte mso 9)|(IE)]></td></tr></table>\n' +
    '                            <![endif]-->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                    <tr>\n' +
    '                        <td bgcolor="#ffffff" align="center" style="padding: 0;"><!--[if (gte mso 9)|(IE)]>\n' +
    '                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="350">\n' +
    '                                <tr>\n' +
    '                                    <td align="center" valign="top" width="350">\n' +
    '                            <![endif]-->\n' +
    '                            <table border="0" cellpadding="0" cellspacing="0" width="100%"\n' +
    '                                   style="max-width: 500px;border-bottom: 1px solid #e4e4e4;">\n' +
    '                                <tbody>\n' +
    '                                <tr>\n' +
    '                                    <td bgcolor="#ffffff" align="left"\n' +
    '                                        style="padding: 20px 0 0 0; color: #666666; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400;-webkit-font-smoothing:antialiased;">\n' +
    '                                        <p class="headingMobile"\n' +
    '                                           style="margin: 0;color: #171717;font-size: 26px;font-weight: 200;line-height: 130%;margin-bottom:5px;">\n' +
    '                                            Group invitation by XXXusernameXXX </p>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td height="20"></td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td bgcolor="#ffffff" align="left"\n' +
    '                                        style="padding:0; color: #666666; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400;-webkit-font-smoothing:antialiased;">\n' +
    '                                        <p style="margin:0;color:#585858;font-size:14px;font-weight:400;line-height:170%;">\n' +
    '                                            Hello there,</p>\n' +
    '                                        <p style="margin:0;margin-top:20px;line-height:0;"></p>\n' +
    '                                        <p style="margin:0;color:#585858;font-size:14px;font-weight:400;line-height:170%;">\n' +
    '                                            <b>XXXusernameXXX</b> has invited you to the group <b>XXXgroupXXX</b>.\n' +
    '                                            You can join this group by clicking on the button below or use this link:\n' +
    '                                            <a style=\'color: #00bc87;text-decoration: underline;\'\n' +
    '                                               target=\'_blank\' href=\'link@link1\'>\n' +
    '                                                link@link2\n' +
    '                                            </a></p>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td align="center">\n' +
    '                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
    '                                            <tr>\n' +
    '                                                <td align="center" style="padding: 33px 0 33px 0;">\n' +
    '                                                    <table border="0" cellspacing="0" cellpadding="0" width="100%">\n' +
    '                                                        <tr>\n' +
    '                                                            <td align="center" style="border-radius: 4px;"\n' +
    '                                                                bgcolor="#00bc87"><a href="link@link3"\n' +
    '                                                                                     style="text-transform:uppercase;background:#00bc87;font-size: 13px; font-weight: 700; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none !important; padding: 20px 25px; border-radius: 4px; border: 1px solid #00bc87; display: block;-webkit-font-smoothing:antialiased;"\n' +
    '                                                                                     target="_blank"><span\n' +
    '                                                                    style="color: #ffffff;text-decoration: none;">Join</span></a>\n' +
    '                                                            </td>\n' +
    '                                                        </tr>\n' +
    '                                                    </table>\n' +
    '                                                </td>\n' +
    '                                            </tr>\n' +
    '                                        </table>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                            <!--[if (gte mso 9)|(IE)]></td></tr></table>\n' +
    '                            <![endif]-->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                    <tr>\n' +
    '                        <td bgcolor="#ffffff" align="center" style="padding: 0;"><!--[if (gte mso 9)|(IE)]>\n' +
    '                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="350">\n' +
    '                                <tr>\n' +
    '                                    <td align="center" valign="top" width="350">\n' +
    '                            <![endif]-->\n' +
    '                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;">\n' +
    '                                <tbody>\n' +
    '                                <tr>\n' +
    '                                    <td bgcolor="#ffffff" align="center"\n' +
    '                                        style="padding: 30px 0 30px 0; color: #666666; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 18px;">\n' +
    '                                        <p style="margin: 0;color: #585858;font-size: 12px;font-weight: 400;-webkit-font-smoothing:antialiased;line-height: 170%;">\n' +
    '                                            Need help? Ask at <a href="mailto:HE201718@students.ephec.be"\n' +
    '                                                                 style="color: #00bc87;text-decoration: underline;"\n' +
    '                                                                 target="_blank">HE201718@students.ephec.be</a> or visit our <a\n' +
    '                                                href="https://kotsapp.herokuapp.com"\n' +
    '                                                style="color: #00bc87;text-decoration: underline;" target="_blank">Help\n' +
    '                                            Center</a></p>\n' +
    '                                <tr>\n' +
    '                                    <td bgcolor="#ffffff" align="center"\n' +
    '                                        style="padding: 0; color: #666666; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 18px;">\n' +
    '                                        <p style="margin: 0;color: #585858;font-size: 12px;font-weight: 400;-webkit-font-smoothing:antialiased;line-height: 170%;"></p>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td bgcolor="#ffffff" align="center"\n' +
    '                                        style="padding: 15px 0 30px 0; color: #666666; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 18px;">\n' +
    '                                        <p style="margin: 0;color: #585858;font-size: 12px;font-weight: 400;-webkit-font-smoothing:antialiased;line-height: 170%;">\n' +
    '                                            Kots App, Inc.<br> Rue Wiertz 60, B 1047<br> Brussels, Belgium</p>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                </td>\n' +
    '                                </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                            <!--[if (gte mso 9)|(IE)]></td></tr></table>\n' +
    '                            <![endif]-->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</center>\n' +
    '\n' +
    '\n' +
    '</body>\n' +
    '</html>\n'

export default mailTemplate
