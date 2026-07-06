import { z } from 'zod'
import { Resend } from 'resend'

const config = useRuntimeConfig()

const schema = z.object({
  company: z.string().min(1),
  name: z.string().min(1),
  email: z.email(),
  tel: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export default defineEventHandler(async (event) => {
  // bodyを取得
  // const body = await readBody(event)
  const validationResult = await readValidatedBody(event, (body) => {
    console.log('[POST] /api/submit: body =', body)
    return schema.safeParse(body)
  })

  if (!validationResult.success) {
    return {
      success: false,
      errorMessage: 'Validation Error'
    }
  }

  // メール文作成
  const formData = validationResult.data
  const subject = `【お問い合わせ】${formData.subject}`
  const text = `ホームページより問い合わせがありました。\n\n` +
    `----------\n` +
    `会社/所属名：${formData.company}\n` +
    `お名前：${formData.name} 様\n` +
    `メールアドレス：${formData.email}\n` +
    `電話番号：${formData.tel}\n` +
    `件名：${formData.subject}\n` +
    `お問い合わせ内容：\n${formData.message}` +
    `----------\n\n` + 
    `お問い合わせ日時：${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`

    // メール送信
  const resend = new Resend(config.resendApiKey)
  const { data, error } = await resend.emails.send({
    from: 'noreply@mfcworks.com',
    to: 'contact@mfcworks.com',
    subject: subject,
    text: text
  })

  if (data) {
    console.log('Resend email sending success:', data)
  } else if (error) {
    console.log('Resend email sending failure:', error.statusCode, error.message)
  }

  // 結果を返却
  if (!error) {
    return {
      success: true,
      errorMessage: ''
    }
  } else {
    return {
      success: false,
      errorMessage: error.message
    }
  }
})
