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
        const response = await axios({
          // url: "http://localhost:3001/cargosmart/edi/seaOrder",
          url: "http://localhost:3000/moneyapi/getOnefreight",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        });
        // 发送到content.js
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "login" });
        });

        // Sent msg to background.js to init automation page
        chrome.runtime.sendMessage({ action: 'startAuto', data: response.data.data });
        return response.data;  // 返回数据用于进一步处理
      } catch (error) {
        console.error("Error during submission:", error);  // 打印错误信息
        return null;  // 错误处理，返回null或其他错误信息
      }
      // // 点击提交判断是不是初始页，不是就更新，应对多票订场的问题
      // const data = { 'ebNo': this.inputValue };
      // // 确保使用 await 等待 fetch 操作完成
      // const response = await axios(

      //   {
      //     url: "http://localhost:3001/cargosmart/edi/seaOrder",
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       // 如有必要，添加更多头部信息
      //     },
      //     data: JSON.stringify(data),
      //   }
      // );
      // console.log(response);

      // // 确保使用 await 等待响应的 JSON 解析完成
      // const responseData = response.json();
      // console.log('获取单子数据', responseData);

      // // 提交完成后，发送消息到 content script 或 background script 执行自动化操作
      // // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // //   chrome.tabs.sendMessage(tabs[0].id, { action: "submitComplete", "data": data },
      // //     (response) => {
      // //       console.log("SendSuccess!!!!!!!!!!!!!!!!!!");
      // //     }
      // //   );
      // // });
      // // chrome.tabs.sendMessage(
      // //   tabs[0].id,
      // //   { action: "textLily", data: "your data" },
      // //   (response) => {
      // //     console.log("Message sent to content.js");
      // //   }
      // // );
      // return responseData
    },
    triggerContentScript() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "triggerOnClickEvent"});
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
