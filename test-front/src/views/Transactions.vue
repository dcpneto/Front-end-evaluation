<template class="items-center">
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
        <div class="place-content-center content-center">
            <button v-on:click="gettransactionsData"> Get transactions Data</button>
            <div class="text-center overflow-x-auto relative" v-for="transactionsData in transactionsDataList" :key="transactionsData.id">
              <table class="text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th class="p-2 m-1">Parcela</th>
                    <th class="p-2 m-1">Amount</th>
                    <th class="p-2 m-1">Description</th>
                    <th class="p-2 m-1">Due Date</th>
                    <th class="p-2 m-1">Name</th>
                    <th class="p-2 m-1">Status</th>
                    <th class="p-2 m-1">Created At</th>
                    <th class="p-2 m-1">Payer ID</th>
                  </thead>
                  <tbody>
                      <tr class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="p-2 m-1">{{transactionsData.parcela}}</td>
                        <td class="p-2 m-1">{{transactionsData.amount}}</td>
                        <td class="p-2 m-1">{{transactionsData.description}}</td>
                        <td class="p-2 m-1">{{transactionsData.due_date}}</td>
                        <td class="p-2 m-1">{{transactionsData.name}}</td>
                        <td class="p-2 m-1">{{transactionsData.status}}</td>
                        <td class="p-2 m-1">{{transactionsData.created_at}}</td>
                        <td class="p-2 m-1">{{transactionsData.payer_id}}</td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
      </html>
    </template>

<script>

new URL(location.href).searchParams.get('id')


export default {
name: 'transactions',
data () {
  return {
    transactionsDataList: []
  }
},
methods: {
  gettransactionsData () {
    fetch('http://localhost:3000/transactions/')
      .then(response => response.json())
      .then(data => (this.transactionsDataList = data))
  }
}

}

</script>
