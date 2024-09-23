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
        id: 150,
        userId: null,
        ebNo: 'FYJK000020-150',
        type: false,
        self: false,
        spell: false,
        startPort: 599,
        uploadPort: 3108,
        purposePort: 3108,
        shipCompany: 9,
        sailingTime: '2024-09-12',
        putType: 0,
        declare: '',
        interior: false,
        trailer: false,
        trailerTime: null,
        custom: false,
        entrustNub: '',
        ladingCount: 0,
        ladingNub: '',
        blNo: '1345',
        blNoTsl: '11111',
        putCode: '',
        freightTerms: false,
        transportTerms: '',
        appointNub: '',
        matchTaime: '',
        shipName: 'SKY 2413S',
        voyage: 'RNV2',
        portVoyage: '',
        bindingNotice: '',
        startPortTime: '',
        stopPortTime: '',
        inPortCode: '',
        overTime: '',
        stopPassTime: '',
        main: true,
        tdRemark: null,
        shipAgency: 'COSCO',
        leak: 0,
        canPut: 0,
        startPortalias: null,
        purposePortalias: null,
        uploadPortalias: null,
        trailerAddress: '',
        tetd: '',
        vgmendTime: '',
        addspell: null,
        qy: 0,
        dcstatus: 0,
        tdstatus: 0,
        cdstatus: 0,
        vdstatus: 0,
        cdreceipt: null,
        ebId: 0,
        receiptRemark: null,
        endPortPierId: null,
        xhxxStatus: 0,
        mentionCon: null,
        managelcl: false,
        outside: 2,
        icn: null,
        warehouseName: null,
        realityLeavePortTime: null,
        realityClosePortTime: null,
        exportBoxStartTime: null,
        isf5: '0',
        emptyId: null,
        acidNumber: null,
        vatNumber: null,
        egyptAcidNumber: null,
        createTime: '2023-11-16T09:00:07.000Z',
        updateTime: '2024-03-04T05:43:09.000Z',
        routeId: null,
        containner_vgms: [
          {
            cType: 40,
            boxNub: 'TEST1111233',
            weight: '0.000',
            volume: '0.000',
            sealNUb: '',
            amount: 10,
            hostMark: true,
            method: false
          }
        ],
        sea_order_bind: { routeId: 0, routeCode: 'SKT' },
        sea_order_contacts: [
          {
            id: 181523,
            oid: 150,
            cabinId: 0,
            lclid: 0,
            type: 2,
            master: 'SAME AS CONSIGNEE',
            address: '',
            firmCode: null,
            country: null,
            phone: null,
            aeo: null,
            spName: null,
            spType: null,
            spContact: null,
            qy: 0,
            createTime: '2023-11-16T09:00:07.000Z',
            updateTime: '2024-03-04T05:43:09.000Z'
          },
          {
            id: 181522,
            oid: 150,
            cabinId: 0,
            lclid: 0,
            type: true,
            master: 'ASAHI AUTO SPARE PARTS L.L.C',
            address: 'SHOP NO 18, NAIF 7 STATES BLDG, \n' +
              'BEHIND KHANSAHEB PARKING, DIERA \n' +
              'DUBAI,UNITED ARAB EMIRATES',
            firmCode: null,
            country: null,
            phone: null,
            aeo: null,
            spName: null,
            spType: null,
            spContact: null,
            qy: 0,
            createTime: '2023-11-16T09:00:07.000Z',
            updateTime: '2024-03-04T05:43:09.000Z'
          },
          {
            id: 181521,
            oid: 150,
            cabinId: 0,
            lclid: 0,
            type: false,
            master: 'YANCHENG RELY IMPORT & EXPORT \nCORP., LTD.',
            address: 'RM.401 TOWER #16,ZHONG YIN HAIHUA \n' +
              'PLAZA NO.59,JIANJUN\n' +
              'RD.,YANCHENG,CHINA',
            firmCode: null,
            country: null,
            phone: null,
            aeo: null,
            spName: null,
            spType: null,
            spContact: null,
            qy: 0,
            createTime: '2023-11-16T09:00:07.000Z',
            updateTime: '2024-03-04T05:43:09.000Z'
          }
        ],
        goods: [
          {
            id: 306,
            oid: 150,
            cabinId: 0,
            lclid: 0,
            shantou: null,
            name: 'TEST!!!',
            description: '你好',
            cargoType: false,
            amount: '10',
            unit: 'BAGS',
            weight: '2000.000',
            volume: '1111.000',
            hscode: '160413',
            dangerClass: null,
            unNub: null,
            dangerCode: null,
            dangerPoint: '0',
            packType: null,
            packDesc: null,
            packWeight: null,
            packSize: null,
            grossWeight: null,
            quarantineCode: null,
            quarantineName: null,
            sign: null,
            qy: 0,
            conid: null,
            createTime: '2023-11-16T09:00:07.000Z',
            updateTime: '2024-03-04T05:43:09.000Z'
          }
        ],
        startPortData: { id: 599, name: '上海', nameEn: 'SHANGHAI', code: 'CNSHA' },
        purposePortData: { id: 3108, name: '新加坡', nameEn: 'HO CHI MINH CITY', code: 'VNSGN' },
        uploadPortsea: { id: 3108, name: '新加坡', nameEn: 'HO CHI MINH CITY', code: 'VNSGN' },
        carrier: {
          id: 9,
          code: 'COSCO',
          name: '中远',
          nameEn: 'COSCO',
          scacCode: 'COSU'
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