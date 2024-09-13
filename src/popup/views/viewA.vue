<template>
  <div class="view-a">
    <!-- 我是A页面 -->
    Page A
    <button @click="onGetCustomUa">
      <!-- 获取自定义ua -->
      Booking
    </button>
  </div>
</template>

<script>
export default {
  name: 'viewA',
  methods: {
    onGetCustomUa() {
      const bookingData = {
        placeOfIssue: 'SHANGHAI, CHINA',
        placeOfReceipt: 'SHANGHAI, CHINA CY',
        portOfLoading: 'SHANGHAI, CHINA',
        portOfDischarge: 'BANGKOK, THAILAND',
        portOfDelivery: 'BANGKOK, THAILAND CY',
        blType: 'T',
        tel: '65951271',
        email: 'LOUIS@SFYF.CN',
        moreEmail: 'GRACE@SFYF.CN',
        payment: 'prepaid',
        location: true,
        payerCompany: 'SHANGHAI FANYUAN INTERNATIONAL FREIGHT FORWARDING',
        shipperName: 'WELSCONDA CO., LIMITED',
        shipperAdd: 'ADD: ROOM 14B 14/F WAH HEN COMM',
        consigneeName: 'RHKGROUP COMPANY LIMITED',
        consigneeAdd: 'ADD: 189 M',
        notifyPartyName: 'RHKGROUP COMPANY LIMITED',
        notifyPartyAdd: 'ADD: 189 MOO10 SAMRONGTAI\nHRAPRADAENG SAMUTPRAKAN\nPHRAPRADAENG SAMUTPRAKAN\nHRAPRADAENG SAMUTPRAKAN *'
      }
      // 发送到content.js
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "startEShipping" });
      });

      // Send a message to the background
      chrome.runtime.sendMessage({action: 'saveBookingData', data: bookingData}, function(response) {
        // alert(JSON.stringify(response))
      })
    }
  }
}
</script>

<style lang="less">
.view-a{
  background-color: cadetblue;
  height: 100%;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  button {
    width: fit-content;
  }
}
</style>