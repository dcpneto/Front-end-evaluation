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
                <th class="text-center p-2 m-1">ID</th>
                                  <th class="p-2 m-1">Created At</th>
                                  <th class="p-2 m-1">Phone</th>
                                  <th class="p-2 m-1">Email</th>
                                  <th class="p-2 m-1">Name</th>
                                  <th class="p-2 m-1">Document</th>
                  </thead>
                  <tbody>
                      <tr class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="p-2 m-1">{{transactionsData.id}}</td>
                        <td class="p-2 m-1">{{transactionsData.created_at}}</td>
                        <td class="p-2 m-1">{{transactionsData.phone}}</td>
                        <td class="p-2 m-1">{{transactionsData.email}}</td>
                        <td class="p-2 m-1">{{transactionsData.name}}</td>
                        <td class="p-2 m-1">{{transactionsData.document}}</td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
      </html>
    </template>

<script>

export default {
  name: 'Transaction',
  data () {
    return {
      transactionsDataList: []
    }
  },
  transactionsData () {
    return {
      transactionsDataList: []
    }
  },
  methods: {
    gettransactionsData () {
      fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => (this.transactionsDataList = data))
    },
    gettransactionsData () {
      fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => (this.transactionsDataList = transactionsData))
    }
  }
}

</script>
