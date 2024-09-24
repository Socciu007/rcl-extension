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
      // Define data test
      let globalData = {
          "id": 99425,
          "userId": 1306,
          "ebNo": "FYEB069739-99425",
          "type": false,
          "self": false,
          "spell": false,
          "startPort": 599,
          "uploadPort": 25,
          "purposePort": 25,
          "shipCompany": 9,
          "sailingTime": "2024-09-28",
          "putType": 1,
          "declare": null,
          "interior": false,
          "trailer": false,
          "trailerTime": null,
          "custom": false,
          "entrustNub": "GYGJ2409092",
          "ladingCount": 0,
          "ladingNub": null,
          "blNo": "COSU6397627880",
          "blNoTsl": "",
          "putCode": null,
          "freightTerms": false,
          "transportTerms": "1",
          "appointNub": null,
          "matchTaime": "",
          "shipName": "CSCL URANUS",
          "voyage": "101W",
          "portVoyage": "101W",
          "bindingNotice": null,
          "startPortTime": "",
          "stopPortTime": "",
          "inPortCode": "见设备单",
          "overTime": "2024-09-24 09:19:30",
          "stopPassTime": "",
          "main": true,
          "tdRemark": null,
          "shipAgency": "COSCO",
          "leak": 0,
          "canPut": 0,
          "startPortalias": null,
          "purposePortalias": null,
          "uploadPortalias": null,
          "trailerAddress": "",
          "tetd": "",
          "vgmendTime": "2024-09-24 09:19:30",
          "addspell": null,
          "qy": 0,
          "dcstatus": 0,
          "tdstatus": 0,
          "cdstatus": 0,
          "vdstatus": 0,
          "cdreceipt": null,
          "ebId": 0,
          "receiptRemark": null,
          "endPortPierId": null,
          "xhxxStatus": 0,
          "mentionCon": null,
          "managelcl": false,
          "outside": 2,
          "icn": null,
          "warehouseName": null,
          "realityLeavePortTime": null,
          "realityClosePortTime": null,
          "exportBoxStartTime": null,
          "isf5": 0,
          "emptyId": null,
          "acidNumber": null,
          "vatNumber": null,
          "egyptAcidNumber": null,
          "billno": 0,
          "schedule": 1,
          "pushStatus": 0,
          "ghStatus": {
            "vgm": "",
            "status": false,
            "boxState": "",
            "customes": "",
            "terminal": "",
            "closeTime": "2024-09-29T00:00:00",
            "vgmWeight": "",
            "carrierLock": "",
            "carrierClose": ""
          },
          "ghType": {
            "customs": "",
            "stowage": "",
            "terminal": "",
            "startTime": ""
          },
          "createTime": "2024-09-23T08:29:42.000Z",
          "updateTime": "2024-09-24T01:19:56.000Z",
          "routeId": null,
          "containner_vgms": [
            {
              "cType": 0,
              "boxNub": null,
              "weight": "0.000",
              "volume": "0.000",
              "sealNUb": null,
              "amount": 0,
              "hostMark": false,
              "method": false
            }
          ],
          "sea_order_bind": {
            "routeId": 25,
            "routeCode": "MEX"
          },
          "sea_order_contacts": [
            {
              "id": 314633,
              "oid": 99425,
              "cabinId": 0,
              "lclid": 0,
              "type": false,
              "master": "SHANGHAI SNTAL ALUMINUM CO. LTD",
              "address": "ROOM 281,PUSAN RD.3058,PUDONG,\nSHANGHAI, CHINA\nTEL.: + 86 21 68195584",
              "firmCode": null,
              "country": null,
              "phone": null,
              "aeo": null,
              "spName": "",
              "spType": null,
              "spContact": null,
              "qy": 0,
              "createTime": "2024-09-23T08:29:42.000Z",
              "updateTime": "2024-09-24T01:19:53.000Z"
            },
            {
              "id": 314634,
              "oid": 99425,
              "cabinId": 0,
              "lclid": 0,
              "type": true,
              "master": "EMIRATES PRINTING PRESS(L.L.C.)",
              "address": "P.O.BOX 5106,AL QUOZ,DUBAI UNITED\nARAB EMIRATES",
              "firmCode": null,
              "country": null,
              "phone": null,
              "aeo": null,
              "spName": "",
              "spType": null,
              "spContact": null,
              "qy": 0,
              "createTime": "2024-09-23T08:29:42.000Z",
              "updateTime": "2024-09-24T01:19:53.000Z"
            },
            {
              "id": 314635,
              "oid": 99425,
              "cabinId": 0,
              "lclid": 0,
              "type": 2,
              "master": "EMIRATES PRINTING PRESS(L.L.C.)",
              "address": "P.O.BOX 5106,AL QUOZ,DUBAI UNITED\nARAB EMIRATES",
              "firmCode": null,
              "country": null,
              "phone": null,
              "aeo": null,
              "spName": "",
              "spType": null,
              "spContact": null,
              "qy": 0,
              "createTime": "2024-09-23T08:29:42.000Z",
              "updateTime": "2024-09-24T01:19:53.000Z"
            }
          ],
          "goods": [
            {
              "id": 105062,
              "oid": 99425,
              "cabinId": 0,
              "lclid": 0,
              "shantou": "EPP /",
              "name": "ALUMINIUM FOIL",
              "description": "铝箔",
              "cargoType": false,
              "amount": "40.000",
              "unit": "CASES",
              "weight": "23000.000",
              "volume": "26.000",
              "hscode": "76071190",
              "dangerClass": null,
              "unNub": null,
              "dangerCode": null,
              "dangerPoint": "0",
              "packType": null,
              "packDesc": null,
              "packWeight": null,
              "packSize": null,
              "grossWeight": null,
              "quarantineCode": null,
              "quarantineName": null,
              "sign": null,
              "qy": 0,
              "conid": null,
              "exigencyName": null,
              "exigencyPhone": null,
              "exigencyEmail": null,
              "exigencyFax": null,
              "createTime": "2024-09-23T08:29:42.000Z",
              "updateTime": "2024-09-24T01:19:53.000Z"
            }
          ],
          "startPortData": {
            "id": 599,
            "name": "上海",
            "nameEn": "SHANGHAI",
            "code": "CNSHA"
          },
          "purposePortData": {
            "id": 25,
            "name": "杰贝阿里",
            "nameEn": "JEBEL ALI",
            "code": "AEJEA"
          },
          "uploadPortsea": {
            "id": 25,
            "name": "杰贝阿里",
            "nameEn": "JEBEL ALI",
            "code": "AEJEA"
          },
          "carrier": {
            "id": 9,
            "code": "COSCO",
            "name": "中远",
            "nameEn": "COSCO",
            "scacCode": "COSU"
          }
        }
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
      chrome.runtime.sendMessage({action: 'saveBookingData', data: bookingData, data1: globalData}, function(response) {
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