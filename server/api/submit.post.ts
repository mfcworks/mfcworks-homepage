export default defineEventHandler(async (event) => {
  // bodyを取得
  const body = await readBody(event)
  console.log('[POST] /api/submit: data received:', body)

  // 結果を返却
  return {
    succeed: false,
    errorMessage: 'メール送信処理未実装のため'
  }
})
