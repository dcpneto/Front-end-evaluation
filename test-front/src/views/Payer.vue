<template class="items-center">
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
        <div class="place-content-center content-center">
            <button v-on:click="getpayersData"> Get payers Data</button>
            <div class="text-center overflow-x-auto relative" v-for="payersData in payersDataList" :key="payersData.id">
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
                        <td class="p-2 m-1">{{payersData.id}}</td>
                        <td class="p-2 m-1">{{payersData.created_at}}</td>
                        <td class="p-2 m-1">{{payersData.phone}}</td>
                        <td class="p-2 m-1">{{payersData.email}}</td>
                        <td class="p-2 m-1">{{payersData.name}}</td>
                        <td class="p-2 m-1">{{payersData.document}}</td>
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
name: 'Payers',
data () {
  return {
    payersDataList: []
  }
},
methods: {
  getpayersData () {
    fetch('http://localhost:3000/clients/')
      .then(response => response.json())
      .then(data => (this.payersDataList = data))
  }
}

}

</script>
