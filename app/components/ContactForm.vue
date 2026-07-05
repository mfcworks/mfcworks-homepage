<script setup lang="ts">
// import { reactive } from 'vue'
import * as z from 'zod'

const schema = z.object({
  company: z.string().min(1, '会社名または所属名を入力してください。'),
  name: z.string().min(1, 'お名前を入力してください。'),
  email: z.email('有効なメールアドレスを入力してください。'),
  tel: z.string().optional(),
  subject: z.string().min(1, '件名を入力してください。'),
  message: z.string().min(1, '内容を入力してください。'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  company: '',
  name: '',
  email: '',
  tel: '',
  subject: '',
  message: '',
})

const agree = ref(false)

const step = ref<'INPUT' | 'CONFIRM' | 'COMPLETE'>('INPUT')

// 「確認画面へ」ボタン
function onConfirm() {
  if (step.value === 'INPUT') {
    step.value = 'CONFIRM'
  }
}

// 「修正する」ボタン
function onModify() {
  if (step.value === 'CONFIRM') {
    step.value = 'INPUT'
  }
}

// 「送信する」ボタン
function onSend() {
  if (step.value === 'CONFIRM') {
    step.value = 'COMPLETE'
  }


  
}
</script>

<template>
  <UContainer class="tw:max-w-3xl-12" v-if="step === 'INPUT'">
    <UCard>
      <template #header>
        <p class="tw:mt-2 tw:text-sm tw:text-gray-500">
          以下のフォームに必要事項をご入力ください。
        </p>
      </template>

      <UForm :schema="schema" :state="state" class="tw:space-y-6" @submit="onConfirm">
        <UFormField label="会社/所属名" name="company" required>
          <UInput v-model="state.company" placeholder="株式会社〇〇" class="tw:w-full" />
        </UFormField>

        <UFormField label="お名前" name="name" required>
          <UInput v-model="state.name" placeholder="山田 太郎" class="tw:w-full" />
        </UFormField>

        <UFormField label="メールアドレス" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="name@example.com" class="tw:w-full" />
        </UFormField>

        <UFormField label="電話番号" name="tel">
          <UInput v-model="state.tel" type="tel" placeholder="090-1234-5678" class="tw:w-full" />
        </UFormField>

        <UFormField label="件名" name="subject" required>
          <UInput v-model="state.subject" placeholder="お問い合わせの件名" class="tw:w-full" />
        </UFormField>

        <UFormField label="お問い合わせ内容" name="message" required>
          <UTextarea v-model="state.message" :rows="8" placeholder="お問い合わせ内容をご入力ください。" class="tw:w-full" />
        </UFormField>

        <UFormField name="agree" required>
          <div class="tw:relative tw:flex tw:items-start tw:flex-row">
            <div class="checkbox-wrapper tw:flex tw:items-center tw:h-5">
              <UCheckbox v-model="agree" required class="tw:flex-none" />
            </div>
            <div class="tw:w-full tw:ms-4 tw:text-sm">
              <label class="tw:block tw:font-medium tw:text-default tw:after:content-['*'] tw:after:ms-0.5 tw:after:text-error">
                当社の <ULink to="/privacy" target="_blank">個人情報取り扱い方針</ULink> に同意します。
              </label>
            </div>
          </div>
        </UFormField>

        <div class="button-wrapper tw:flex tw:justify-end">
          <UButton type="submit" size="lg" icon="i-lucide-arrow-right">
            確認画面へ
          </UButton>
        </div>
      </UForm>
    </UCard>
  </UContainer>

  <UContainer class="tw:max-w-3xl-12" v-else-if="step === 'CONFIRM'">
    <UCard>
      <template #header>
        <p class="tw:mt-2 tw:text-sm tw:text-gray-500">
          入力内容を確認し、「送信する」ボタンを押してください。
        </p>
      </template>

      <table class="tw:border-collapse tw:border tw:border-gray-400">
        <tbody>
          <tr>
            <td class="tw:border tw:border-gray-300 tw:p-2 tw:w-32">会社/所属名</td>
            <td class="tw:border tw:border-gray-300 tw:p-2">{{ state.company }}</td>
          </tr>
          <tr>
            <td class="tw:border tw:border-gray-300 tw:p-2 tw:w-32">お名前</td>
            <td class="tw:border tw:border-gray-300 tw:p-2">{{ state.name }}</td>
          </tr>
          <tr>
            <td class="tw:border tw:border-gray-300 tw:p-2 tw:w-32">メールアドレス</td>
            <td class="tw:border tw:border-gray-300 tw:p-2">{{ state.email }}</td>
          </tr>
          <tr>
            <td class="tw:border tw:border-gray-300 tw:p-2 tw:w-32">電話番号</td>
            <td class="tw:border tw:border-gray-300 tw:p-2">{{ state.tel }}</td>
          </tr>
          <tr>
            <td class="tw:border tw:border-gray-300 tw:p-2 tw:w-32">件名</td>
            <td class="tw:border tw:border-gray-300 tw:p-2">{{ state.subject }}</td>
          </tr>
          <tr>
            <td class="tw:border tw:border-gray-300 tw:p-2 tw:w-32">内容</td>
            <td class="tw:border tw:border-gray-300 tw:p-0">
              <div class="textarea-wrapper">
                <UTextarea v-model="state.message" :rows="8" autoresize disabled class="tw:block" />
              </div></td>
          </tr>
        </tbody>
      </table>

      <div class="button-wrapper tw:flex tw:gap-6 tw:justify-center tw:pt-6">
        <UButton @click="onModify" size="lg" color="neutral" variant="outline">修正する</UButton>
        <UButton @click="onSend" size="lg" class="tw:font-bold">送信する</UButton>
      </div>
    </UCard>
  </UContainer>


  <UContainer class="tw:max-w-3xl-12" v-else-if="step === 'COMPLETE'">
    <UCard>
      <template #header>
        <p class="tw:mt-2 tw:text-sm tw:text-gray-500">
          送信完了
        </p>
      </template>

      <p>お問い合わせいただき、ありがとうございました。</p>
      <p>内容確認し、３～５営業日以内に担当者よりご連絡差し上げます。</p>
      <p>今しばらくお待ちいただけますようお願いいたします。</p>
    </UCard>
  </UContainer>

</template>

<style>
/* UCheckbox のデザインがPreflight有り前提なので、
   必要なものを再定義する */
.checkbox-wrapper button {
  overflow: hidden; /* ← これはMoonriseとの競合によるもの */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
}

/* UButton のデザインがPreflight有り前提なので、
   必要なものを再定義する */
.button-wrapper button {
  box-sizing: border-box;
  margin: 0;
  /* padding: 0; */
  border: 0 solid;
}

/* UTextarea の枠線を非表示、余白合わせる */
.textarea-wrapper textarea {
  box-shadow: none;
  padding: 9px;
}
</style>
