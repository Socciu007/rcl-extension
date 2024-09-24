<template>
  <div id="app">
    <div class="app-router">
      <router-view />
    </div>
    <div class="app-tab">
      <div class="app-tab-item" v-for="(tabName, i) in tabs" :key="i" @click="onToView(tabName)">
        {{ tabName }}
      </div>
    </div>
    <div class="popup-container">
      <div class="status-message" v-if="siteOpened">
        <!-- <p>网站已经成功为您打开。</p> -->
        <p>Successfully opened website.</p>
      </div>
      <div class="status-message" v-else>
        <!-- <p>网站正在打开中...</p> -->
        <p>The website is opening ...</p>
      </div>
      <div class="input-container">
        <!-- <input type="text" v-model="inputValue" placeholder="请输入值" />
        <button @click="handleSubmit">提交</button> -->
        <input type="text" v-model="inputValue" placeholder="Please enter the value" />
        <button @click="handleSubmit">Submit</button>
        <!-- openSiteAndCheck -->
      </div>
      <!-- 添加一个按钮用于触发 clickButtonOnPage 方法 (Add a button to trigger) -->
      <!-- <div class="btn-trigger-container">
        <button class="action-button" @click="clickButtonOnPage('#myButtonSelector')">
          <-- 点击页面按钮 
          Click Button on Page
        </button>
        <button @click="triggerContentScript">
          <-- 触发页面操作
          Trigger Active Page
        </button>
        <button @click="triggerAction">
          <-- 开始监听 
          Trigger Action
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      siteOpened: false, // 初始状态设置为未打开
      tabs: [
        'viewA',
        'viewB',
        'viewC',
      ],
      inputValue:'',
    }
  },
  methods: {
    async handleSubmit() {
      const data = { 'ebNo': this.inputValue };
      try {
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
              "hscode": "160413", //76071190
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
        // Define fetch data from interface
        const response = await axios.post(
          "http://www.dadaex.cn/api/cargosmart/edi/seaOrder",
          { "blNo": "COSU6397627880" },
          { headers: {'Content-Type': 'application/json'} }
        );
        console.log(response.data);
        // 发送到content.js
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "login" });
        });

        // Sent msg to background.js to init automation page
        chrome.runtime.sendMessage({ action: 'startAuto', data: globalData });
        return response.data;  // 返回数据用于进一步处理
      } catch (error) {
        console.error("Error during submission:", error);  // 打印错误信息
        return null;  // 错误处理，返回null或其他错误信息
      }
    },
    triggerContentScript() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "eShippingDashboard"});
      });
    },
    triggerAction() {
      // 发送消息到 background.js (Send to mesage to background.js)
      chrome.runtime.sendMessage({ action: 'startAutoRefresh' });
    },
    async openSiteAndCheck() { 
      // 指定要检查的网站 URL (Specify the URL you want to check)
      const siteUrl = 'https://eservice.rclgroup.com/e-commerce/spring/index?action=65426f6f6b696e67';
      const siteUrl1 = 'https://eservice.rclgroup.com/e-commerce/spring/eBookingService'
      const siteUrl2 = 'https://eservice.rclgroup.com/e-commerce/spring/manageBooking'
      
      // 查询所有标签页，查找是否已经打开了指定的 URL (Check all tab pages to find whether the specified URL has been opened)
      // eslint-disable-next-line no-undef
      chrome.tabs.query({}, async (tabs) => {
        let siteTab = tabs.find(tab => tab.url && tab.url.includes(siteUrl));
        // let siteTab1 = tabs.find(tab => tab.url && tab.url.includes(siteUrl1));
        // let siteTab2 = tabs.find(tab => tab.url && tab.url.includes(siteUrl2));

        if (siteTab) {
          // 如果找到了，切换到该标签页
          // eslint-disable-next-line no-undef
          chrome.tabs.update(siteTab.id, { active: true }, async () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              console.log(siteTab.id, tabs);
              chrome.tabs.sendMessage(tabs[0].id, { action: "firstPage"});
            });
          });
          this.siteOpened = true; // 更新状态为已打开
        } else {
          // 如果没有找到，创建新的标签页
          // eslint-disable-next-line no-undef
          chrome.tabs.create({ url: siteUrl }, async (tab) => {
            if(tab) {
              this.siteOpened = true; // 更新状态为已打开、
              chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "firstPage" });
              });
            } else {
              this.siteOpened = false; // 如果有错误，保持状态为未打开
            }
          });
        }
      });
    },
    onToView (name) {
      this.$router.push({name})
    }
  },
  create() {

  },
  mounted() {
    // 组件挂载后立即尝试打开网站
    this.openSiteAndCheck();
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 375px;
  height: fit-content;
  padding: 15px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .app-router{
    flex: 1;
  }

  .app-tab{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;

    .app-tab-item{
      font-size: 16px;
      color: coral;
      cursor: pointer;
    }
  }

  .popup-container {
    .input-container {
      display: flex;
      justify-content: center;
      gap: 8px;
      height: 28px;
    }
    .btn-trigger-container {
      display: flex;
      justify-content: center;
      height: 40px;
      margin-top: 8px;
      gap: 8px;
      cursor: pointer;
      button {
        width: 120px;
      }
    }
  }
}
</style>
